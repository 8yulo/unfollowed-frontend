# Unfollowed (for IG)
Web app to check profiles not following you back on Instagram. Includes dashboard for seamlessly cross-referencing accounts not following them back. 

This method works for both private and non-private accounts. As of January 12, 2026, this product does not break Instagram TOS as there is no scraping nor logging in involed. This tool is **not** affiliated nor associated with Instagram nor Meta.


## Downloading IG Account Data
1) Make sure you are logged into browser
2) Head to: More -> Your Activity -> Download your Information
3) While on Accounts Center: Download or Transfer information -> Select Account
4) Once you select account: Some of your information -> Followers & Following -> Download to device -> Date range
5) Make sure range is set to "all time" as Instagram will only include followers/following from the time range you've selected  

## On Web App
1) From downloaded data folder: find `connections`
2) Search for `followers_1.html` and `following.html` 
3) Upload files onto app

## Deploying Locally
1) On terminal: run `npm run dev`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).