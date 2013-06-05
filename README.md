# MINI Client Api

## Goals

- Provide a simple library to access api.buildmymini.ca in node programs

        var opts = {
            url: 'api.buildmymini.ca',
            version: 'v2',
            lang: 'en'    
        };
        var client = miniapiclient(opts);
        client.get({type:'vehicles'}); // returns all vehicles from v2/vehicles
        client.get({type:'vehicles',id:'1310'}) // returns v2/vehicles/1310

## Version 0.0.0

- Use express to build a web page where you can click to load various api
endpoints.
- Get a feel for how http.request works

## Version 0.0.1

- Be able to execute the above psuedo code for any api end point and have it returned to the calling function as JSON
