// This is where project configuration and plugin options are located.
//Docs: https://gridsome.org/docs/config

module.exports = {
  siteName: 'Dünyadaki Bütün Ülkeler!',
  plugins: [
    {
      use: 'gridsome-plugin-plausible-analytics',
      options: {
        dataDomain: 'countries.as93.net',
        customDomain: 'no-track.as93.net',
        outboundLinkTracking: false
      }
    }
  ],
}
