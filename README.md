# React Roadmap-Style Portfolio - [mobenh.com](https://mobenh.com) 

Welcome to Moben Haq's portfolio built with React! This project showcases a roadmap-style portfolio to represent professional milestones, experience, and contact information.

## Portfolio Screenshot
![image](https://github.com/mobenh/react-portfolio/assets/96225596/b4936991-1960-4ae2-a627-6476a219ad4c)


## Features

- **Roadmap-style layout**: Present information in a visually appealing and intuitive manner.
- **Interactive Links**: Direct links to GitHub repositories and other resources for a deeper dive.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Integrated DevIcons**: Representing various technologies and platforms.

## Milestones Covered:

- **Languages**: A showcase of programming languages like Golang, C++, Python, and JavaScript.
- **Projects**: Direct links to key projects on GitHub.
- **Frameworks**: Experience with frameworks like React and Angular.
- **Infrastructure**: Skills in tools like Terraform and AWS.
- **Certifications**: Display of key certifications earned.
- **Contact Me**: Direct ways to get in touch.

## How to Run Locally

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/mobenh/react-portfolio.git
    ```

2. **Install Dependencies**:  
    Navigate to the project folder and run:

    ```bash
    npm install
    ```

3. **Run the App**:

    ```bash
    npm start
    ```

    Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Dependencies Used

- React
- DevIcons

## Future Enhancements

- Integration with backend services for dynamic data.
- Interactive animations to improve user engagement.
- Additional sections to showcase testimonials, skills, etc.

## Feedback & Contributions

Feedback and contributions are always welcome! Please raise an issue or submit a pull request if you'd like to improve this project.

# Deployment to AWS

## Prerequisites
- An AWS account.
- A registered domain (you can use Route 53 or another domain registration service).
- AWS Command Line Interface (CLI) installed.

## Steps:

### Build Your React App:
Before deploying, you need to create a production build of your app.
```bash
npm run build
```
## Create an S3 Bucket:
Navigate to the AWS Management Console and open the Amazon S3 dashboard. Create a new bucket with the name of your domain (e.g., `mobenh.com`).

## Configure the S3 Bucket for Static Website Hosting:
1. Open your S3 bucket and navigate to the **Properties** tab.
2. Scroll down and click on **Static website hosting**.
3. Choose **Use this bucket to host a website** and enter `index.html` for both the Index and Error documents.
4. Save the changes.


## Request an SSL Certificate using ACM:

1. Open the AWS Certificate Manager and request a public certificate.
2. Enter your domain name and follow the steps to validate the domain (either through email or DNS validation).
3. Once validated, the certificate status will change to **Issued**.

## Setup CloudFront:

1. Navigate to the CloudFront dashboard and create a new distribution.
2. Choose your S3 bucket as the origin.
3. Under "Alternate Domain Names (CNAMEs)", enter your domain name.
4. For "SSL Certificate", choose "Custom SSL Certificate" and select the certificate you created in ACM.
5. Save the distribution. Note down the CloudFront Distribution Domain Name (e.g., `d12345abcdegh.cloudfront.net`).

## Configure Route 53:

1. Open Route 53 and navigate to your domain's hosted zone.
2. Create a new record set. For the record type, choose A – IPv4 address.
3. For the Alias target, enter the CloudFront Distribution Domain Name from the previous step.
4. Save the record set.

## Wait for Propagation:

- It might take some time for your DNS changes to propagate. Once propagated, visiting your domain (e.g., `mobenh.com`) should display your React portfolio app served through CloudFront.

## Important Notes:

- Ensure your S3 bucket permissions allow public reads for your app to be accessible.
- After updating your React app, remember to rebuild and re-upload it to the S3 bucket. Also, consider invalidating the CloudFront cache to see the updates immediately.
