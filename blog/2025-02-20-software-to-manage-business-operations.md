---
slug: software-to-manage-business
title: Software to Manage Business Operations
authors: [alex]
tags: [features,echodash,slack,software stack,software business,wp-agency,wp]
description: A quick look at tools to manage the software stack and tools you use to run your business
---

Running software businesses today can get complex quickly, especially because we all rely on multiple software tools to run them. Personally I’m using Gmail, GCal, Stripe, Slack, Notion, Jira, Figma, Matomo, GA, Cloudflare and AWS and the team at EchoDash use many more. We’ve spoken to developers and business owners that use as many as 30+ tools to manage their businesses and projects. 

  It’s a lot of pings, alerts, notifications and emails to keep track of everything going on. That’s exactly why Jack (of WP Fusion) founded EchoDash. He was spending hours a week jumping between open tabs to check all the different software tools he was using to run WP Fusion. All this happens across multiple software providers, so it’s a lot of work to understand what’s going on. Did some one leave a ticket or a review? Are there any payment failures or churn? Did someone abandon a cart? Is there a PHP error or another error that has your site performance flagging or worst down?  

Jack very quickly realised this wasn’t a problem he alone was facing, this is one of the key things developers do to support software products. It was clear after some conversations it extended from developers to product teams, non tech CEOs, COOs, managers and plenty of other software teams. 


### What is EchoDash?

EchoDash, is a tool to manage your business operations and [software stack ](htarget.com/searchapparchitecture/definition/software-stack)from one place.

EchoDash was born out of a problem our founder Jack had. He spent hours each week just getting the data to then manage his businesses operations. Logging in to check multiple services to understand the key aspects of his business that day or week is frustrating and time consuming. He was frustrated with the sub standard solution of “just keeping a lot tabs open” to manage his software stack. 

There was too many things happening, why couldn’t it all live in one place that it could be digested in context of when and where things were happening. Jack was jumping between Slack, Discord and various project management tools and getting notifications on his phone. Notification blindness set in, what did it all mean? How could Jack’s time be more laser focused, how could he put out fires when they were embers not house fires?  EchoDash is a simple idea with powerful features, a feed of events real-time activity across your business (and can even be applied to externalities like google alerts) that can be searched and filtered. For example if you wanted to see all the stripe notifications for payments above $100, it would be possible. If you want to filter down to see a feed of a couple of tools you use (say Stripe and Square) then two clicks gets you there. EchoDash lets you send any data from any software you use via a Webhook, and doesn’t rely on integrations. Like lego, you assemble the feed you want, not some seven figure product person, who has never ran a business before.   EchoDash is designed to be used for tracking real time events that need a timely response or that are time sensitive. Whilst also allowing you to look back on specific periods to understand any historical data or events, without having to spend days manually pulling data and aggregating it.   EchoDash has some fantastically cool tech under the hood, using AI to ingest Webhook data and turn it into meaningful, searchable newsfeed events. The most exciting piece is it could (and will in the future) be able to also show you emails you receive in the feed, imagine filtering for emails from a certain domain or with specific content, or better yet, staying out of the inbox for more than a day?  

EchoDash is a simple idea with powerful features, a feed of events real-time activity across your business (and can even be applied to externalities like google alerts) that can be searched and filtered. For example if you wanted to see all the stripe notifications for payments above $100, it would be possible. If you want to filter down to see a feed of a couple of tools you use (say Stripe and Square) then two clicks gets you there. EchoDash lets you send any data from any software you use via a Webhook, and doesn’t rely on integrations. Like lego, you assemble the feed you want, not some seven figure product person, who has never ran a business before.  

 It is designed to be used for tracking real time events that need a timely response or that are time sensitive. Whilst also allowing you to look back on specific periods to understand any historical data or events, without having to spend days manually pulling data and aggregating it. 

EchoDash has some fantastically cool tech under the hood, using AI to ingest Webhook data and turn it into meaningful, searchable newsfeed events. The most exciting piece is it could (and will in the future) be able to also show you emails you receive in the feed, imagine filtering for emails from a certain domain or with specific content, or better yet, staying out of the inbox for more than a day?


### What is a Webhook? 

According to [RedHat.com](redhat.com) a Webhook is “A Webhook is a lightweight, event-driven communication that automatically sends data between applications via HTTP. Triggered by specific events, Webhooks automate communication between application programming interfaces (APIs) and can be used to activate workflows, such as in GitOps environments.” 

If you’re not a developer, simply put it is a way for any website or app to talk to another. Think of it as DMs or instant messages between software services. Yes kind like robots texting each other. It’s done in an automated way, and Webhooks can include a lot of data. When you connect a Webhook you’re sending any data that service allows to anywhere else to interact with it, or even create alerts or automations.

Webhooks are often triggered by an ‘event’, in software parlance. Which is basically when anything happens, for example on Instagram if someone likes a post, or if on your Webstore someone pays for something, or worse a payment fails. All of these are events, and the bigger your business is, the more likely it has many hundreds or even thousands of events per week. 


### What did people do before EchoDash? 

The thing we heard most talking to developers and business owners, is that many use a dedicated slack channel. Basically they would feed Webhook data to a slack channel to get events piped into slack that they monitor there

It’s a very simple solution and for a lot of small companies it can be enough. It is also free and lives in the place your team lives, from that perspective it’s a handy place to begin. Slack does, however, faces many limitations, if you’re two or three people it’s a great place to start, but when your business scales, it won’t scale with you. 


### How to get Webhook URL for Slack Channel?

To get a webhook URL for a Slack channel, you can do the following:

1. Create a Slack App

* Go to the Slack API website
* Hit "Create an App"
* Select "From scratch"
* Give it a Name
* Choose a Workspace where the app will be utilised
* Hit "Create App"

2. Enable Incoming Webhooks
   
* In your app settings, go to "Incoming Webhooks" (left sidebar).
* Turn "Activate Incoming Webhooks" to ON.
* Mouse down and hit "Add New Webhook to Workspace". 

3. Authorise the Webhook for a Channel
* Choose the Slack Channel where you want to send messages.
* Hit "Allow".
* Slack will create a Webhook URL.

4. Copy and Use the Webhook URL

It should look like:

![Slack Webhook Image](https://github.com/user-attachments/assets/173dd8a9-cc1b-4907-ba6d-0ef3b2b7169f)


### Can you email to slack channel?

Slack has beaten us to this punch, but we will be delivering it. The answer is yes, you can, but this is not a free feature from Slack. Slack notes you’d need a standard or plus plan to email in. 

If that’s you, you can forward emails to your dedicated alerts channel following these steps:

1.Go to the the Slack [Integrations page]([url](https://slack.com/integrations)) and select email.
2.You then need to pick the channel the email will post in (your dedicated slack channel), label and name it and save the integration. 
3.You then need to copy the email address Slack creates for you and forward emails to that address to see them in slack.

EchoDash is working on a similar feature, but our aim is that you can edit the templates (as you can now with sources) to show only the pertinent details from emails you send to EchoDash.


### How does Slack compare to EchoDash? 

We love Slack, we use it every day and it’s best in class in what it does. We don’t see ourselves as a competitor to Slack, but as a useful addition. Slack isn’t designed for what EchoDash excels at, pulling events, activity, notification and alerts from your entire software stack and serving it to you in ways that make it easy to understand, act on and share.

Firstly Webhooking into Slack the data is often unstructured so it’s messy to look at and quickly understand what it means. A lot of people who use dedicated Slack channels told us that these channels could get overloaded, and they often missed key events buried in an avalanche of other alerts. 

EchoDash is built to solve this problem, firstly you can easily turn off or on events from a source, so if you see that say Notion is sending you useless notifications that can be turned off.  

Secondly you can either filter by events source, so you can see the events that matter, or search specifically for events of that type. In the future we’ll also be adding event specific alerts, so you can specify terms and whenever that event occurs, you’ll get a notification. 

Thirdly each source has a dashboard of event types, so you can see how many times something happened in an instant. Whereas in slack you need to scroll through weeks of logs in channel.

![Echodash Event Types Dashboard](https://github.com/user-attachments/assets/85c99735-9a87-4a50-b3a4-b67c547832d6)

Slack also doesn’t allow you to assign certain events to specific team members, so when an alert happens from your CRM, you can’t assign whoever is handling sales. There’s an issue with Cloudflare, who should be pinged? EchoDash is being built with agencies and teams in mind, so that assigning events, sources or alerts to specific team members is super simple.  

Webhook data is often unstructured and messy, or can be overloaded with lots of detail, 90% of which can be noise. EchoDash classifies sources into event types. For example for GitHub “New Commit, Pull Request, Pull Request Merged, New Issue” and many more. Each event type from GitHub comes in formatted, neatly tagged so you know the key points. However at any point you can edit the template to show you Webhook data others may not need. Basically, EchoDash is incredibly flexible to your individual needs, which Slack just isn’t built for.


### Who is EchoDash for? 

Initially we had thought: developers, but we learnt quickly, that lots of different kinds of non technical business people, sales people, marketers and others had similar problems

Some examples of who we’re building for:

**Software and WP Agencies** “We’re an agency managing multiple client sites, some WP, some not, with many services stitched together to keep them working. How can I see across these multiple web properties what’s happening and be proactive, to avoid any issues for my clients, before they happen.”

**Customer Service** “I’m non tech contractor, I have never written a line of code, I manage a few companies client outreach, ticketing systems and reviews. Basically I need to know what every one is saying and doing and make sure our customers feel they’ve had the concerns heard and answered, and also send any new business to relevant teams. It’s a pretty manual process checking the many places these conversations happen (CRMs, Emails, Discord, Zendesk etc.)”  

**Sales** “I have to track what 1000 leads are doing at any one time, who’s about to close, who needs to speak with our security or tech teams, who has sent me an email for more information. This, sadly, isn’t all in our CRM (actually we use three.)”  

**Education and Coaching businesses** “At any one time I have 5-6 different courses running each with hundreds of students, all progressing at different rates. I use an LMS (Learning Management System) but have a few channels for outreach including Slack. I’d love to know who hasn’t hit their learning targets for the week, or find out that a module was too basic for someone. At the moment this information isn’t easy to manage or see in one place.

If you use WordPress (WP) to run your business we’ve setup a very simple integration for you to track user behaviour across the WP plugins you’re using. See how you can test out EchoDash free whilst in beta with one [click setup]([url](https://echodash.com/docs/echodash-plugin)).

If you don’t use WordPress no problem. You can, with no coding knowledge, send Webhook data from the services you use to EchoDash. We have a simple how to guide [here]([url](https://echodash.com/docs/sending-data)). 

Anyone running a business using lots of software services and SaaS tools, can give EchoDash a try. Yes it’s pretty broad, but we’re confident if you use more than 4 tools, we’ll make your life easier. We know that’s the case because we’re solving this problem for ourselves and our friends.



