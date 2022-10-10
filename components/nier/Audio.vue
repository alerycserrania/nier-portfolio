<template>
  <div class="nier-audio">
    <audio ref="audio" @play="setPlay" @pause="setPause" :loop="loop">
      <slot />
    </audio>
    <div class="nier-audio-player">
      <nier-button
        class="nier-audio-play-btn nier-button-flat nier-button-fade"
        @click="togglePlay"
        :style="{ width: '32px' }"
        :withBar="false"
        :withCursor="false"
        :withBlock="false"
      >
        <icon-pause :style="{ width: '32px', height: '32px' }" v-if="playing" />
        <icon-play :style="{ width: '32px', height: '32px' }" v-else />
      </nier-button>

      <div
        class="nier-audio-seek-slider"
        v-if="slider"
        ref="audioSlider"
        :style="{ marginRight: '0.5em', marginLeft: '0.5em' }"
        @click="setCurrentTime"
        @mousedown="setMouseDown"
        @mouseenter="setMouseEnter"
      >
        <div class="nier-audio-seek-slider-full" />
        <div class="nier-audio-seek-slider-current" ref="audioCurrentBar" />
      </div>

      <div class="nier-audio-timer" v-if="timer">
        <div class="nier-audio-current-time">{{ formatTime(currentTime) }}</div>
        <div class="nier-audio-duration">
          &nbsp;/&nbsp;{{ formatTime(duration) }}
        </div>
      </div>

      <div class="nier-audio-range">
        <icon-sound :style="{ width: '24px' }"/>
        <nier-range
          type="range"
          :nb-bars="10"
          :value="volume"
          @change="setVolume"
        />
      </div>

      <div class="nier-audio-analyser" ref="audioAnalyser">
        <component
          v-for="i in [...Array(nbBars).keys()]"
          :is="AudioBar"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{ timer?: boolean; slider?: boolean; loop?: boolean }>(),
  {
    timer: true,
    slider: true,
  }
);

const AudioBar = resolveComponent("NierAudioBar");

const audio = ref<HTMLAudioElement | null>(null);
const audioCurrentBar = ref<HTMLDivElement | null>(null);
const audioSlider = ref<HTMLDivElement | null>(null);
const audioAnalyser = ref<HTMLDivElement | null>(null);

const playing = ref(false);
const currentTime = ref(0);
const duration = ref(0);

const volume = ref(5);

const nbBars = 16;

let interval: NodeJS.Timer | null = null;

onMounted(() => {
  playing.value = !audio.value.paused;
  audio.value.volume = volume.value / 10;

  const audioCtx = new AudioContext();
  const audioSrc = audioCtx.createMediaElementSource(audio.value);
  const analyser = audioCtx.createAnalyser();
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  audioSrc.connect(audioCtx.destination);
  audioSrc.connect(analyser);


  interval = setInterval(() => {
    currentTime.value = audio.value?.currentTime;
    duration.value = audio.value.duration;
    analyser.getByteTimeDomainData(dataArray);

    let i = 0;
    audioAnalyser.value.childNodes.forEach((element) => {
      if (element instanceof HTMLDivElement) {
        const start = Math.floor((i * dataArray.length) / nbBars);
        const end = Math.floor(((i + 1) * dataArray.length) / nbBars);
        const slice = dataArray.slice(start, end);
        const average = slice.reduce((p, n) => p + n, 0) / slice.length;
        element.style.height = Math.abs(average - 128) + 5 + "px";
        i += 1;
      }
    });
  }, 100);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

watch([currentTime, duration], ([currentTime, duration]) => {
  if (!audioCurrentBar.value) return;
  audioCurrentBar.value.style.width = (currentTime / duration) * 100 + "%";
});

const setVolume = (value: number) => {
  volume.value = value;
  audio.value.volume = volume.value / 10;
};

const togglePlay = () => {
  if (!audio.value) return;

  if (audio.value.paused) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
};

const setPlay = () => {
  playing.value = true;
};

const setPause = () => {
  playing.value = false;
};

const setCurrentTime = (event: MouseEvent) => {
  const rect = audioSlider.value.getBoundingClientRect();
  audio.value.currentTime =
    ((event.clientX - rect.left) / (rect.right - rect.left)) *
    audio.value.duration;
};

const formatTime = (time: number): string => {
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(Math.floor(duration.value / 60).toString().length, "0");
  return `${minutes}:${seconds}`;
};
</script>

<style lang="scss">
@import "~/assets/css/colors.scss";

.nier-audio {
  width: 100%;

  .nier-audio-play-btn.nier-button {
    .nier-button-content {
      .nier-button-inner {
        padding: 0;
      }
    }

    &:active {
      .nier-button-content {
        transform: unset;
      }
    }
  }

  .nier-audio-player {
    display: flex;
    flex-flow: row;
    height: 32px;
    width: 100%;
    background-color: $medium;
    align-items: center;

    .nier-audio-play-btn {
      flex: 0 1 auto;
      width: 32px;
      cursor: pointer;
    }

    .nier-audio-seek-slider {
      position: relative;
      margin: 0.1em 0;
      width: 100%;
      height: 8px;
      cursor: pointer;

      .nier-audio-seek-slider-current {
        transition: width 0.1s linear;
        position: absolute;
        height: inherit;
        background-color: $light;
        width: 0%;
      }

      .nier-audio-seek-slider-full {
        position: absolute;
        height: inherit;
        background-color: $dark;
        width: 100%;
      }
    }

    .nier-audio-timer {
      display: flex;
      flex-flow: row;
      padding: 0 0.5em;

      .nier-audio-duration {
        font-weight: bold;
      }
    }

    .nier-audio-analyser {
      display: flex;
      flex-flow: row;
      align-items: center;
      height: 100%;
      padding: 0 0.5em;

      .nier-audio-analyser-bar {
        transition: height 0.1s linear;
        width: 4px;
        height: 5px;
        background-color: $light;
        margin: 1px;
        border-radius: 5px;
        max-height: 75%;
      }
    }

    .nier-audio-range {
      display: flex;
      flex-flow: row;
      margin: 0 0.2em;
      align-items: center;
    }
  }
}
</style>