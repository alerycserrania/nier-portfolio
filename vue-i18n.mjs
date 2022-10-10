// The configuration must be returned with an **async function**.
export default async () => ({
  locale: 'en',
  messages: {
    en: {
      hello: ({ named }) => `HELLO, ${named('name')}!`
    },
    ja: {
      hello: 'こんにちは、{name}!'
    }
  }
})