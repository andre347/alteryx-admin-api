import oauthSignature from "oauth-signature";

class Gallery {
  constructor(apiLocation, apiKey, apiSecret) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.apiLocation = apiLocation;
  }

  async getSchedules() {
    const type = "GET";
    const url = `${this.apiLocation}/schedules/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getUsers() {
    const type = "GET";
    const url = `${this.apiLocation}/users/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getSubscriptions() {
    const type = "GET";
    const url = `${this.apiLocation}/subscriptions/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getCollections() {
    const type = "GET";
    const url = `${this.apiLocation}/collections/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getInsights() {
    const type = "GET";
    const url = `${this.apiLocation}/insights/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getServerDataConnections() {
    const type = "GET";
    const url = `${this.apiLocation}/serverdataconnections/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getSystemDataConnections() {
    const type = "GET";
    const url = `${this.apiLocation}/systemdataconnections/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getPackage(appId) {
    const type = "GET";
    const url = `${this.apiLocation}/${appId}/package/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }

  async getWorkflows(limit) {
    const type = "GET";
    const url = `${this.apiLocation}/workflows/?`;
    const params = buildOauthParams(this.apiKey);
    const signature = generateSignature(type, url, params, this.apiSecret);
    const newParams = setParams({
      ...params,
      ...{ oauth_signature: signature }
    });
    const response = await fetch(url + newParams);
    return response;
  }
}

function buildOauthParams(apiKey) {
  return {
    oauth_consumer_key: apiKey,
    oauth_signature_method: "HMAC-SHA1",
    oauth_nonce: Math.floor(Math.random() * 1e9).toString(),
    oauth_timestamp: Math.floor(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  };
}

function generateSignature(httpMethod, url, parameters, secret) {
  return oauthSignature.generate(httpMethod, url, parameters, secret, null, {
    encodeSignature: false
  });
}

function setParams(params) {
  return Object.keys(params)
    .map(function(k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    })
    .join("&");
}

module.exports = Gallery;
