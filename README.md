# Recycle (Dionysus)
This is a POC project for IBM Call-For-Code event, which we are mainly focus on one of topic - "Responsible production and green consumption"

The main page of the get-started can be found here
https://developer.ibm.com/callforcode/get-started/climate-change/green-consumption/

## Contents
- [Recycle (Dionysus)](#recycle-dionysus)
  - [Contents](#contents)
  - [Short description](#short-description)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Authors](#authors)
  - [License](#license)

## Short description
A platform to provide  transparency on reparability for digital devices to assist decision making for  purchasing or repairing

## Demo video
[![Watch the video](https://github.com/yukangle/recycle/blob/main/video-demo.png)]()

## The architecture
![architecture](https://github.com/yukangle/recycle/blob/main/architecture.png)

## Long description
Electronics are getting smaller and more sophisticated, making recovery and reuse of materials challenging.  While there are a growing environmental friendly awareness from more consumers,     it is currently a challenge to find handy information about reparability of electronics for them to make decisions on purchasing or repairing such products.

As a result we propose to create a transparent and trustworthy platform for sharing this information on digital devices.  We provide a webpage for users to search for the devices that they are interested in.  The search criteria can be the name or model  of the phone, pad or PC.  The webpage will return pros and cons for  reparability for the device, and provide ranking information for each device that user has an interest.

There are 3 typical use cases with this information:

* Assist users to make decision on purchasing based on reparability
* In case the device needs repair, user has the information of if the device is reparable with reasonable cost/damage
* If user decides not to repair,  user can check if some of the components can be recycled

The solution consists of 3 key components

* A web client implemented in Angular  and deployed with IBM Object Storage. It provide interface for user to search for certain device and display the result
* A server implemented in Node.js and deployed in Heroku Cloud. It provide RESTful API for retrieving reparability information by looking up JSON documents stored in IBM Cloudant
* A  web crawler which regularly craws webpages for up-to-date information about reparability of the digital devices . The crawler will parse HTML page, convert into fixed JSON format, and store it into IBM Cloudant

## Project roadmap
* Deploy server with IBM Kubernetes solution
* Query Bing map API to provide information about where to repair/recycle certain devices
* Support parsing  webpages in different format in the crawler

## Live demo

You can find a running system to test at [Live Demo on IBM Cloud Host](https://recycle-portal-v-1-2.s3.jp-tok.cloud-object-storage.appdomain.cloud/index.html).

## Built with
- IBM Cloudant - The NoSQL database used
- IBM Object Storage - Static site host
- Node.js - Framework used for RESTful API
- Angular - Framework used for web portal

## Authors
- Tom Yu - yukangle
- Zhengyu Zhang - zyzhang0703
- Faymay Cheng - FaymayCL
- Rachel Xie - rachelxyxy

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.
