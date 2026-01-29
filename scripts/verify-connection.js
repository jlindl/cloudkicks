const { createStorefrontApiClient } = require('@shopify/storefront-api-client');

const client = createStorefrontApiClient({
    storeDomain: 'cloudkicks-4.myshopify.com',
    apiVersion: '2026-01',
    publicAccessToken: '96f8988d3ccff97a90622130f8a06fbb',
});

async function verify() {
    const query = `
    query {
      shop {
        name
        primaryDomain {
          url
        }
      }
    }
  `;

    try {
        const { data, errors } = await client.request(query);
        if (errors) {
            console.error('Errors:', errors);
        } else {
            console.log('Success! Connected to shop:', data.shop.name);
            console.log('Primary Domain:', data.shop.primaryDomain.url);
        }
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

verify();
