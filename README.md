# Love Letter Genie - Hackathon - February 2024<!-- omit from toc -->

This project is a website where users can generate a love letter to their loved one. They can use the additional features to copy this message directly to their clipboard, or send directly to their loved one via WhatsApp.

[Deployed Website: Love Letter Genie](https://moabdelbasset.github.io/FebHackathon/index.html)

![Website on all screens](/assets/images/readme-images/all-screens.png)

This is joint project for the February 2024 Hackathon with Code Institute. Below are links to all authors' GitHub profiles:

[Carl Ellis](https://github.com/carl2087/)\
[Mohamed Ayman](https://github.com/moabdelbasset)\
[Emmanuel Oluwadare](https://github.com/Emmy-Dare274)\
[Diarmuid Henry](https://github.com/diarmuidhenry/)\
[Ahmad Jawed Hazrati](https://github.com/Ahmad-Hazrati)\
[Kate McGuane](https://github.com/KateMcGuane)

## Table of Contents<!-- omit from toc -->
- [Website Objective](#website-objective)
- [Potential Users](#potential-users)
- [Design \& Development](#design--development)
  - [5 Planes of UX](#5-planes-of-ux)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
  - [Wireframes](#wireframes)
    - [Home Page](#home-page)
    - [Gift Shop Page](#gift-shop-page)
    - [Team Members Page](#team-members-page)
- [Features](#features)
- [Technology \& Resources](#technology--resources)
- [Deployment](#deployment)
- [Issues/Bugs](#issuesbugs)
- [Testing \& Validation](#testing--validation)
  - [Functional Testing of Website](#functional-testing-of-website)
    - [Home Page](#home-page-1)
    - [Team Members Page](#team-members-page-1)
  - [WAVE Evalutation Tool](#wave-evaluation-tool)
  - [PageSpeed Insight Tests](#pagespeed-insight-tests)
  - [HTML Code Validation](#html-code-validation)
  - [CSS Code Validation](#css-code-validation)
- [Future Improvements/Development](#future-improvementsdevelopment)
- [Acknowledgments](#acknowledgments)

## Website Objective

- Help users to create a personalised romantic letter to their loved one.
- Make it easy to share said letter, even for those not comfortaale/familiar with features such as copy and paste.
- Show the user links to websites where they can buy romantic gifts for their loved ones.

## Potential Users

- People who want to create a personalised romantic gesture for their loved one.
- Those who feel they lack the creativity to express their feelings for their loved one adequately.

## Design \& Development

### 5 Planes of UX

#### Strategy

Create a simple, clean, professional site whose main purpose is to generate a personalised romantic love letter.

#### Scope

The letter can be personalised by writing the user's name and their loved ones name, as well as optional extra words that may be of significance to them, e.g. a location of a previous shared holiday; a favourite sport/hobby that they share; their favourite food.\
The generated letter can be copied directly to the clipboard, or sent directly in WhatsApp by clicking on clear icons.\
A collection of links to sites where users can buy gifts for their loved one will also be included, as well as links to the authors of the page's GitHub profiles.

#### Structure

The *Home* page will have the love letter generator in focus, with clear prompts for the user to fill in. The generate text will appear on this page. Links to the *Team Members* and ???*Links*???? pages will appear in the header (compressed into a hamburger icon for smaller screens).

#### Skeleton

A simple header containing the page logo, and links to the other pages in the site will appear at the top of each page. A footer containing copyright information and a link the GitHub repo will also appear on each page.

See [Wireframes](#wireframes) below.

#### Surface

![Colour Scheme](/documentation/love-letter-genie-coolors.png)

This colour palette reflects the romantic theme of the website. They are generally soft, with some bolder colours to accent the page and make the words of importance stand out.

### Wireframes

#### Home Page

![Home Page Wireframe](/documentation/wireframes/home_letter_generator_wireframe.png)

#### Gift Shop Page
![Gift Shop Page](/documentation/wireframes/gift_shop_letter_generator_wireframe.png)

#### Team Members Page

![Team Members Page Wireframe](/documentation/wireframes/team_members_letter_generator_wireframe%20copy.png)

## Features

A soft, clean home page, where the goal/function of the site is obvious and apparent.

![Home Page Screenshot](/assets/images/readme-images/homepage.png)

Header, showing the user which page they are currently on, as well as the other page on the site.

![Header](/assets/images/readme-images/header.png)

Option to switch the colour scheme to dark mode, to better suit those whose computer is in dark mode.

![Dark Mode](/assets/images/readme-images/dark2.png)

Adaptive design, adjusting the layout and design to better fit the available real estate.

![Mobile View](/assets/images/readme-images/mobile-view.png)

Clear prompts to the user, and easy to understand instructions/buttons

![Input Filled](/assets/images/readme-images/input-example.png)

Hearts fill the screen, informing the user that their letter is about to be created.

![Heart filled screen](/assets/images/readme-images/hearts-appear.png)

A personalised message appears, as if being written in real time, in a handwriting-style font.

![Message example](/assets/images/readme-images/message-example.png)

Icons allowing the user to share their created message by either copying to their clipboard, or sharing directly via WhatsApp 

![Icons](/assets/images/readme-images/icons.png)

*Gifts* page, including links to gift websites where the user can pair their romantic letter with a gift, including ones adorning their custom message.

![Gifts Page](/assets/images/readme-images/gifts.png)

*Team Members* page, giving the user the option to contact the authors, and/or see their other work 

![Team Members Page](/assets/images/readme-images/team.png)

## Technology \& Resources

- **IDE :** Various IDEs were used by the members of the team, including VSC and CodeAnywhere.
- **Languages :** HTML for basic page structure. Bootstrap and CSS for styling. JavaScript for interactivity. Markdown for this readme.
- **Template :** The [CodeInstitute Gitpod template](https://github.com/Code-Institute-Org/gitpod-full-template) was used in order to install all the relevant tools for the code to function.
- [Github](https://github.com/) was used to host the project. Each author worked on their own self-titled branch before committing changes - after group approval - to the main branch.
- [Balsamiq](https://balsamiq.com/) was used to create wireframes for mobile, tablet and desktop.
- [Favicon.io](https://favicon.io/favicon-generator/) was used to find the page's favicon.
- [WAVE](https://wave.webaim.org/) and [PageSpeed Insights](https://pagespeed.web.dev/) testing tools were used to locate minor issues and check both accessibility and performance. 

## Deployment

Once the basic design of the website was finished, we deployed it to GitHub Pages. [The history of all deployed versions of the site can be found here](https://github.com/moabdelbasset/FebHackathon/deployments).

### How to Deploy to GitHub Pages

1. Log in to [GitHub](https://github.com/).
2. Select *FebHackathon* from the list of repositories, of any of the authors.
3. Click Settings > Pages.
4. Under *Source*, select *Deploy from a branch*.
5. Under *Branch*, select *main* and */root*, then click *Save*.
6. Wait a couple of minutes for the site to deploy, then navigate back to the repository.
7. Click *Deployments*, which now should have appeared on the main repository page.
8. Under *Active Deployments*, click the link https://moabdelbasset.github.io/FebHackathon/. (The deployed page will open in the current tab).

### How to Clone Repository

1. Go to the [GitHub repository](https://github.com/moabdelbasset/FebHackathon/).
2. Click the green *Code* drop-down button.
3. Click *HTTPS* and copy the URL.
4. Open your IDE, and open a terminal.
5. Type `git clone URL`, replacing `URL` with the URL copied in step 3.

## Issues/Bugs

- If there are a large number of 'un-romantic' words given in the prompt, the message generator will simply ignore them, as it deems it impossible to create a love letter including those words. By going into more depth with the prompt, and researching more about how the AI constructs its sentences, we could avoid this in the future. However, for the short time scale that we have for this product, this is beyond a reasonable workload.

## Testing \& Validation

### Functional Testing of Website

#### Header

|Test Item|Test Carried Out|Result|Pass/Fail|
|-------------|------------------|-----------|-------|
|Logo|Click on logo|Home Page reloads|PASS|
|Home icon|Click on Home icon|Home Page reloads|PASS|
|Gift Shop Icon|Click on Gift Shop Icon|Gift Shop page loads|PASS|
|Theme Mode|Click on Theme Mode icon|View toggles between light mode and dark mode|PASS|
|Hamburger icon **(Mobile only)**|Click on Hamburger icon|Header options are revealed|PASS|

#### Footer

|Test Item|Test Carried Out|Result|Pass/Fail|
|-------------|------------------|-----------|-------|
|GitHub icon|Click on GitHub icon|GitHub repo page for website loads|PASS|

#### Home Page

|Test Item|Test Carried Out|Result|Pass/Fail|
|-------------|------------------|-----------|-------|
|Love Letter Generator|*Name A* written in 'To:' field. *Name B* written in 'From:' field. *Word 1, Word 2, Word 3* written in *Additional* field. Click on *Generate Love Letter*|Love letter is generated. Letter is to *Name A*, from *Name B*. The letter inclues *Word A*, *Word B* and *Word C*|PASS|

#### Gift Shop Page

|Test Item|Test Carried Out|Result|Pass/Fail|
|-------------|------------------|-----------|-------|
|Links to external sites|Click on links to external site|Corresponding website opens in new tab|PASS|

#### Team Members Page

|Test Item|Test Carried Out|Result|Pass/Fail|
|-------------|------------------|-----------|-------|
|GitHub links|Click on GitHub logo under name and image of author|Corresponding GitHub profile opens in new tab|PASS|

### WAVE Evaluation Tool

WAVE revealed no errors and no contrast errors. As this needed to be tested throughout all moments of use, no single screenshot could show this.

### PageSpeed Insight Tests

#### Home Page

[Home - PageSpeed Test](https://pagespeed.web.dev/analysis/https-moabdelbasset-github-io-FebHackathon-index-html/de34mlu363?form_factor=desktop)

![Home PageSpeed Test](/assets/images/readme-images/home-page-test.png)

#### Gift Shop Page

[Gift Shop - PageSpeed Test](https://pagespeed.web.dev/analysis/https-moabdelbasset-github-io-FebHackathon-gift-html/u49ammank0?form_factor=desktop)

![Gift Shop PageSpeed Test](/assets/images/readme-images/gift-shop-test.png)

#### Team Members Page

[Team Members - PageSpeed Test](https://pagespeed.web.dev/analysis/https-moabdelbasset-github-io-FebHackathon-team-html/bqynegfncl?form_factor=desktop)

![Team Members PageSpeed Test](/assets/images/readme-images/team-members-test.png)

### JSHint

No major warnings of concern were displayed when put through JSHint. 

![JSHint 1 of 3](/documentation/testing/jshint/jshint-love-letter-genie-1.PNG)
![JSHint 2 of 3](/documentation/testing/jshint/jshint-love-letter-genie-2.PNG)
![JSHint 3 of 3](/documentation/testing/jshint/jshint-love-letter-genie-3.PNG)

### HTML Code Validation

Any issues that remain are struture-optimisation related. This can be re-formatted in future versions.

#### Home Page
![W3C HTML Home Page](/documentation/testing/w3c-validator/w3c-html-validator-homepage.PNG)

#### Gift Shop Page
![W3C HTML Gift Shop Page](/documentation/testing/w3c-validator/w3c-html-validator-gift-shop.PNG)

#### Team Members Page
![W3C HTML Team Members Page](/documentation/testing/w3c-validator/w3c-html-validator-team-members.PNG)

### CSS Code Validation

The validation of the CSS contained mostly parsing issues.

![W3C CSS](/documentation/testing/w3c-validator/w3c-css-validator.PNG)

## Future Improvements/Development

- Expand on the WhatsApp feature, by adding options to share via Messenger, Facebook, Twitter, Instagram.
- Add a feature where the user can generate a link, which when opened, is a blank page (possibly styled to look like paper) so they can read the message as it is generated, like on the main page. This way, the recipent can enjoy the handwritten effect feature, as well as the user.
- Add another animated feature to the text generation, so that it appears that a hand is writing the generated text.

## Acknowledgments

- Hackathon Staff for help and guidance throughout the process, especially our facilitator Andrew.
