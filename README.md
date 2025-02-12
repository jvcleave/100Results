# 100Results Firefox Extension

## Overview
**100Results** is a lightweight Firefox extension that automatically modifies Google search queries to display **100 results per page** instead of the default 10. 

## Features
- Automatically appends `&num=100` to Google search queries.

## Installation
### Temporary Installation (For Development)
1. Open **Firefox**.
2. Navigate to `about:debugging#/runtime/this-firefox`.
3. Click **"Load Temporary Add-on"**.
4. Select the `manifest.json` file from the project folder.

### Permanent Installation (Manual)
1. Zip the project folder.
2. Navigate to `about:addons` in Firefox.
3. Enable **Developer Mode**.
4. Load the zipped extension.

## Usage
1. Open Google Search.
2. Perform a search query.
3. The extension will automatically modify the URL to append `&num=100`.
4. Google should now display 100 results per page.



## License
whatever


