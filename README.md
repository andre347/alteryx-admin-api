# Alteryx Admin API

This is a wrapper around the [Alteryx Admin API](https://gallery.alteryx.com/api-docs/#admin)
as an NPM module. It has one dependency which will be installed when you install this module: 'oauth-signature'. This module uses Async/Await for fetching data from the API. The Alteryx Admin API only works for Private Galleries.

The reason for building this wrapper is that the official Alteryx documentation has a jQuery dependency (this one doesn't) and can therefore more easily be used in modern front-end frameworks such as Angular, React and Vuejs.

## Usage

To use this NPM module:

    npm i alteryx-admin-api

Then, import it in your code:

    import Gallery from "alteryx-admin-api";

Once imported, you'll need to create a new Gallery object like so:

```javascript
function createGallery() {
  const gallery = new Gallery(apilocation, apikey, apisecret);
  return gallery;
}
```

You can grab the Location, Key and Secret from the API in your Alteryx Gallery by going to Settings - Keys. Make sure you enable the Admin API.

When you get the gallery object back. You'll have the following API methods (GET) available to you:

- Schedules - getSchedules()
- Users - getUsers()
- Collections - getCollections()
- Subscriptions - getSubscriptions()
- Insights - getInsights()
- Server Data Connections - getServerDataConnections()
- Workflows - getWorkflows()
- Packages: ability to download workflows, macros and analytic apps from the Gallery - getPackage(appId)

An example for getting back all the **schedules** in your gallery:

```javascript
async function getGallerySchedules() {
  const response = await createGallery().getSchedules();
  const data = await response.json();
  // do something with the data
  console.log(data);
}
```
