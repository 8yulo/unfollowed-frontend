# Who Unfollowed Me on Instagram?
Web app to check profiles not following you back on Instagram. Includes an interface with direct links to profiles user follows after uploading their data--streamlining the process by letting users readily cross-reference accounts not following them back. 

This method works for both private and non-private accounts. As of August 19, 2025, this product does not break Instagram TOS as there is no scraping involved nor logging in involed. This tool is **not** affiliated nor associated with Instagram.

This program is deployed on Streamlit, view web app here


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
1) On terminal: run `streamlit run core.py`
