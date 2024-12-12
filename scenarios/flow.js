const { expect } = require('@playwright/test');
const fs = require('fs');

const sfccQuestions = [
  "What is Salesforce Commerce Cloud (SFCC)?",
  "How does SFCC support e-commerce businesses?",
  "What are the key features of SFCC?",
  "How can SFCC be customized for specific business needs?",
  "What are the benefits of using SFCC over other e-commerce platforms?",
  "How does SFCC handle third-party integrations?",
  "What is the role of APIs in SFCC?",
  "How can SFCC improve the customer shopping experience?",
  "What are the best practices for implementing SFCC?",
  "How does SFCC support mobile commerce?",
  "What is the architecture of SFCC?",
  "How does SFCC ensure data security?",
  "What are the different pricing models for SFCC?",
  "How can SFCC be integrated with CRM systems?",
  "What is the SFCC B2C Commerce platform?",
  "How does SFCC handle inventory management?",
  "What are the common challenges faced during SFCC implementation?",
  "How can SFCC be used to personalize customer experiences?",
  "What is the role of AI in SFCC?",
  "How does SFCC support omnichannel retailing?",
  "What are the key performance indicators (KPIs) for SFCC?",
  "How can SFCC be optimized for SEO?",
  "What is the SFCC Order Management System (OMS)?",
  "How does SFCC handle payment processing?",
  "What are the reporting and analytics capabilities of SFCC?",
  "How can SFCC be used to manage promotions and discounts?",
  "What is the SFCC Storefront Reference Architecture (SFRA)?",
  "How does SFCC support internationalization and localization?",
  "What are the training resources available for SFCC?",
  "How can SFCC be used to enhance customer loyalty?",
  "What is the SFCC Link Marketplace?",
  "How does SFCC handle customer data and privacy?",
  "What are the deployment options for SFCC?",
  "How can SFCC be integrated with social media platforms?",
  "What is the role of cloud computing in SFCC?",
  "How does SFCC support scalability for growing businesses?",
  "What are the common use cases for SFCC?",
  "How can SFCC be used to streamline supply chain operations?",
  "What is the SFCC Business Manager?",
  "How does SFCC handle returns and refunds?",
  "What are the key differences between SFCC B2B and B2C platforms?",
  "How can SFCC be used to improve customer service?",
  "What is the SFCC Commerce Cloud Digital?",
  "How does SFCC support headless commerce?",
  "What are the integration options for SFCC with ERP systems?",
  "How can SFCC be used to create a seamless checkout experience?",
  "What is the SFCC Einstein AI?",
  "How does SFCC handle product catalog management?",
  "What are the security compliance standards for SFCC?",
  "How can SFCC be used to enhance marketing efforts?",
  "What is the SFCC Page Designer?",
  "How does SFCC support subscription-based business models?",
  "What are the common pitfalls to avoid in SFCC implementation?",
  "How can SFCC be used to track customer behavior?",
  "What is the SFCC Commerce Cloud Endless Aisle?",
  "How does SFCC handle multi-currency transactions?",
  "What are the support and maintenance options for SFCC?",
  "How can SFCC be used to manage customer reviews and ratings?",
  "What is the SFCC Commerce Cloud Order Management?",
  "How does SFCC support A/B testing?",
  "What are the key considerations for migrating to SFCC?",
  "How can SFCC be used to automate marketing campaigns?",
  "What is the SFCC Commerce Cloud Mobile?",
  "How does SFCC handle fraud detection and prevention?",
  "What are the customization options for SFCC storefronts?",
  "How can SFCC be used to improve site performance?",
  "What is the SFCC Commerce Cloud Einstein?",
  "How does SFCC support customer segmentation?",
  "What are the key trends in SFCC development?",
  "How can SFCC be used to manage digital assets?",
  "What is the SFCC Commerce Cloud B2B?",
  "How does SFCC handle tax calculations?",
  "What are the integration capabilities of SFCC with marketing automation tools?",
  "How can SFCC be used to enhance product recommendations?",
  "What is the SFCC Commerce Cloud Digital Experience?",
  "How does SFCC support customer feedback and surveys?",
  "What are the key features of SFCC's mobile app?",
  "How can SFCC be used to manage shipping and logistics?",
  "What is the SFCC Commerce Cloud Store?",
  "How does SFCC handle customer authentication and authorization?",
  "What are the key benefits of SFCC's cloud-based infrastructure?",
  "How can SFCC be used to create personalized email campaigns?",
  "What is the SFCC Commerce Cloud Einstein Recommendations?",
  "How does SFCC support customer journey mapping?",
  "What are the key challenges in SFCC integration?",
  "How can SFCC be used to manage product launches?",
  "What is the SFCC Commerce Cloud Mobile First?",
  "How does SFCC handle data migration?",
  "What are the key considerations for SFCC performance optimization?",
  "How can SFCC be used to manage customer loyalty programs?",
  "What is the SFCC Commerce Cloud AI?",
  "How does SFCC support customer engagement?",
  "What are the key features of SFCC's order management system?",
  "How can SFCC be used to manage customer support tickets?",
  "What is the SFCC Commerce Cloud Personalization?",
  "How does SFCC handle product returns and exchanges?",
  "What are the key benefits of SFCC's API-first approach?",
  "How can SFCC be used to manage customer subscriptions?",
  "What is the SFCC Commerce Cloud Headless Commerce?",
  "How does SFCC support real-time inventory updates?"
];

const meetingText = 
`
Meeting Title: Project Kick-off Meeting
Date: December 5, 2024
Time: 10:00 AM - 11:00 AM
Participants:

Alice Johnson (Project Manager)
Bob Smith (Lead Developer)
Carol White (UX Designer)
David Brown (QA Specialist)
Alice Johnson:
Good morning, everyone. Thank you for joining the project kick-off meeting. Our main goal today is to outline the project objectives and discuss the timeline and deliverables. Let's start with a brief overview of the project.

Bob Smith:
Thanks, Alice. The project aims to develop a new feature for our application that enhances user engagement. We plan to use the latest technologies to ensure scalability and performance.

Carol White:
From a design perspective, I'll focus on creating an intuitive user interface that aligns with our brand guidelines. I'll share some initial design concepts by next week.

David Brown:
I'll be setting up the testing framework to ensure we maintain high-quality standards throughout the development process. I'll coordinate with Bob to integrate testing early in the development cycle.

Alice Johnson:
Great, thank you all. Let's move on to the timeline. We aim to complete the project in three months, with key milestones every two weeks. I'll send out a detailed schedule after the meeting.

Bob Smith:
Sounds good. I'll ensure the development team is aligned with the timeline and deliverables.

Alice Johnson:
Thank you, everyone. If there are no further questions, we'll wrap up today's meeting. Please feel free to reach out if you have any concerns or need further clarification.
`
// a function that returns a random string from above array
function getRandomQuestion() {
  const index = Math.floor(Math.random() * sfccQuestions.length);
  return sfccQuestions[index];
}


async function loginUserAndSaveStorage(page, context) {
  // NOTE: we use the $dirname utility so Playwright can resolve the full path
  const storageState = JSON.parse(
    fs.readFileSync(`${context.vars.$dirname}/storage.json`, 'utf8')
  );
  if (Object.keys(storageState).length > 0) {
    console.log('Already logged in. Skipping login.');
    return;
  }

  //1. navigate to page and assert that we are not logged in
  await page.goto(context.vars.target);//wait for auth0 login
  // log urls loaded
  // const html = await page.content()
  // console.log(html)

  await page.waitForURL('**/u/login/**');

  await page.getByLabel('Email address').fill(context.vars.username);
  //click submit
  await page.getByRole('button', { name: 'Continue' }).click();
  //click sign in with password
  await page.getByLabel('Password').fill(context.vars.password);
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForURL(context.vars.target);

  await page
    .context()
    .storageState({ path: `${context.vars.$dirname}/storage.json` });
}

async function createThreadAndAskQuestionAndDelete(page, context, events, test) {
  const { step } = test;

  await step('go_to_home_and_create_thread', async () => {
    await page.goto(context.vars.target);
    await page.locator('[data-cy=send-message-textarea]').fill(getRandomQuestion());
    await page.locator('[data-cy="send-message-button"]').click();

    const chatStreamingPromise = page.waitForResponse('**/$chat');
    // wait for chatStreamingPromise to finish streaming response
    const chatStreamingRequest = await chatStreamingPromise;
    try {
      await chatStreamingRequest.json();
    } catch (error) {}// we don't care about json error we are just waiting for stream to finish
  });

  await step('delete_thread', async () => {
    await page.locator('[data-cy=chat-header] svg:nth-child(2)').click();

    const chatDeletePromise = page.waitForResponse('**/chat');
    // wait for chatDeletePromise to finish streaming response
    const request = await chatDeletePromise;
  });

  await step('create_thread_from_prompt', async () => {
    await page.goto(`${context.vars.target}/prompts-library`);
    await page.locator('input[placeholder="Search prompts..."]').fill('meeting');
    await page.locator('[data-cy="chat-prompt-meeting-analyst"]').click();

    await page.locator('[data-cy=send-message-textarea]').fill(meetingText);
    await page.locator('[data-cy="send-message-button"]').click();

    const chatStreamingPromise = page.waitForResponse('**/$chat');
    // wait for chatStreamingPromise to finish streaming response
    const chatStreamingRequest = await chatStreamingPromise;
    try {
      await chatStreamingRequest.json();
    } catch (error) {}// we don't care about json error we are just waiting for stream to finish
  });

  await step('delete_thread', async () => {
    // set timeout to 60s
    await page.locator('[data-cy=chat-header] svg:nth-child(2)').click();

    const chatDeletePromise = page.waitForResponse('**/chat');
    // wait for chatDeletePromise to finish streaming response
    const request = await chatDeletePromise;
  });
}

module.exports = {
  loginUserAndSaveStorage,
  createThreadAndAskQuestionAndDelete
};