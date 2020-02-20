# Scout24 Tech Challenge
My solution for the Scout24 Tech Challenge

# Main Steps of my Solution

1. Creating a React Project
2. Separate Server and Client Code
3. Creating a simple Express REST API
4. Googling how to use Cheerio
5. Extracting all the necessary information
6. Sending the data to the frontend
7. Fetching the data
8. Displaying the data
9. Handling errors
10. Googling how to test with Jest
11. Implement simple tests which can be improved

## Assumptions

- HTML Version of Document === !DOCTYPE
- The Frontend doesn't have to look good, it should be readable (for this project)
- 'The number of headings and their level', displaying the count of each level
- There are 2 'largest' Images:

  1) File Size

  2) Dimensions

## Limitations of the Implementation

- Independent Source Control for the two projects
- My Server Tests work only for methods with return values
- Default CORS activated, can be more specific
- No Type Checking & No Parameter Validation
- A good Dockerfile for Production
- and many more...

# How to crawl a SPA page
Using another Framework like Puppeteer which acts like a User and can click through the websites. The crawler
isn't limited to static HTML and it can even interact with Javascript.

# Improve the App
## Production-Ready

- Build minified versions
- Minimize builds, assets
- Create a Dockerfile
- Add SEO if needed
- ...

## Security

- Upgrading old packages
- Limiting API requests
- More Specific CORS settings
- Hide sensible data (API Keys, passwords, ...)
- ...

## Scalability

- Use Multithreading
- Microservice Architecture
- ...

## Performance (faster)

- Optimize file/bundle sizes
- Lighthouse assessment
- Avoid unnecessary rerendering
- ...

# JS Styleguide

- Stick to a convention
- Be persistent
- Use Frameworks (Eslint, Prettier, ...)
- Use Typescript
- Styling Guidelines from others (I personally use the Airbnb Guideline)
- There is no perfect solution

# Time Measurements

- 5h 15min for Development (No Jest Tests)
- 0h 51min Jest Tests (first time doing tests)
- 0h 30min Answering Questions WIP

```
Total Time: ~ 6h 40min
```

# Author

Fullstack Developer Phuc Tran <glup3.tran@gmail.com>

My Portfolio: https://glup3.github.io/portfolio-v2