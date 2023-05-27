type ServiceType = {
  image: string
  text: string
  requests: number
}

type ReviewType = {
  image: string
  name: string
  message: string
  stars: number
  date: string
}

type FaqType = {
  question: string
  answer: string
}

export const services: ServiceType[] = [
  { image: '/images/services/cleaning.png', text: 'cleaning', requests: 500 },
  {
    image: '/images/services/moving.png',
    text: 'help moving',
    requests: 450,
  },
  {
    image: '/images/services/yard_work.png',
    text: 'yard work',
    requests: 400,
  },
  {
    image: '/images/services/plumbing.png',
    text: 'plumbing help',
    requests: 500,
  },
  { image: '/images/services/mounting.png', text: 'mounting', requests: 400 },
  {
    image: '/images/services/home_repairs.png',
    text: 'home repairs',
    requests: 300,
  },
  { image: '/images/services/cleaning.png', text: 'cleaning', requests: 500 },
  {
    image: '/images/services/moving.png',
    text: 'help moving',
    requests: 450,
  },
  {
    image: '/images/services/yard_work.png',
    text: 'yard work',
    requests: 400,
  },
  {
    image: '/images/services/plumbing.png',
    text: 'plumbing help',
    requests: 500,
  },
  { image: '/images/services/mounting.png', text: 'mounting', requests: 400 },
  {
    image: '/images/services/home_repairs.png',
    text: 'home repairs',
    requests: 300,
  },
]

export const reviews: ReviewType[] = [
  {
    image: '/images/reviews/user1.png',
    name: 'soowon e.',
    stars: 5,
    message: `Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. I'd definitely hire him again. ”`,
    date: 'April 8,2023',
  },
  {
    image: '/images/reviews/user2.png',
    name: 'betsy t.',
    stars: 5,
    message: `"Punctual, great communication, great work. I look forward to working with Thomas again!"”`,
    date: 'April 1,2022',
  },
  {
    image: '/images/reviews/user3.png',
    name: 'ray e.',
    stars: 4,
    message: `"Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!"`,
    date: 'April 1,2023',
  },
  {
    image: '/images/reviews/user4.png',
    name: 'seema h.',
    stars: 3,
    message: `"Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended."`,
    date: 'April 8,2023',
  },
  {
    image: '/images/reviews/user1.png',
    name: 'soowon e.',
    stars: 2,
    message: `Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. I'd definitely hire him again. ”`,
    date: 'April 8,2023',
  },
  {
    image: '/images/reviews/user2.png',
    name: 'betsy t.',
    stars: 4,
    message: `"Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended."`,
    date: 'April 4,2023',
  },
  {
    image: '/images/reviews/user3.png',
    name: 'ray e.',
    stars: 1,
    message: `"Punctual, great communication, great work. I look forward to working with Thomas again!"`,
    date: 'April 1,2022',
  },
  {
    image: '/images/reviews/user4.png',
    name: 'seema h.',
    stars: 3,
    message: `"Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!"`,
    date: 'April 4,2023',
  },
]

export const faqs: FaqType[] = [
  {
    question: 'What do you need to become a HelpInc?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique litora, ridiculus class morbi id metus dis taciti ornare, sem montes laoreet felis nec hendrerit vulputate risus. Non dapibus quam sociis donec dictum dictumst lacinia fusce, est praesent natoque malesuada magna augue euismod egestas, hac nisl volutpat faucibus condimentum phasellus nunc.',
  },
  {
    question: 'How do I get a job?',
    answer:
      'Once you complete registration steps including creating your Tasker profile, make sure you draw your work area map and set schedule availability to show up in Client search results. If you don’t get task invitations, consider adjusting your rates, your work area, adding availability and additional categories, and editing your profile information to make sure it’s clear to Clients which services you offer.',
  },
  {
    question: 'Do I need experience for the task?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique litora, ridiculus class morbi id metus dis taciti ornare, sem montes laoreet felis nec hendrerit vulputate risus. Non dapibus quam sociis donec dictum dictumst lacinia fusce, est praesent natoque malesuada magna augue euismod egestas, hac nisl volutpat faucibus condimentum phasellus nunc.',
  },
  {
    question: 'How long does it take to process my registration?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique litora, ridiculus class morbi id metus dis taciti ornare, sem montes laoreet felis nec hendrerit vulputate risus. Non dapibus quam sociis donec dictum dictumst lacinia fusce, est praesent natoque malesuada magna augue euismod egestas, hac nisl volutpat faucibus condimentum phasellus nunc.',
  },
  {
    question: 'How will I get the money?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique litora, ridiculus class morbi id metus dis taciti ornare, sem montes laoreet felis nec hendrerit vulputate risus. Non dapibus quam sociis donec dictum dictumst lacinia fusce, est praesent natoque malesuada magna augue euismod egestas, hac nisl volutpat faucibus condimentum phasellus nunc.',
  },
  {
    question: 'What categories of tasks can I perform on TaskRabbit?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit tristique litora, ridiculus class morbi id metus dis taciti ornare, sem montes laoreet felis nec hendrerit vulputate risus. Non dapibus quam sociis donec dictum dictumst lacinia fusce, est praesent natoque malesuada magna augue euismod egestas, hac nisl volutpat faucibus condimentum phasellus nunc.',
  },
]
