---
title: Pickling On Pay
author:
  name: Joe Roberts
  email: joe@engiqueer.net
  pronouns: They/Them
---
So it's a new month, and you know what they say, new month, new you. With that I'm going to try at week notes again!
We'll see how it goes this time.

But not only am I starting new week notes, but it's a bunch of change for me this month! I've joined a new team 
within GDS. I've moved from [GOV.UK One Login](https://sign-in.service.gov.uk/) to [GOV.UK Pay](https://payments.service.gov.uk/).
This is an exciting move for me, and will hopefully make a massive difference on my mental health. So far everyone has
been just lovely and I feel so welcome!

### Getting Pickled

Honestly, the title to this post is so random, but I laughed when I thought about it, so points there.

As part of learning Pay's systems, I have been learning [Pkl](https://pkl-lang.org/) (pronounced 'pickle'), a
configuration language built by Apple, originally for internal use but recently open sourced. We are using it to declare
CI/CD pipelines, rather than directly defining them in YAML.

This has a major benefit that we can reuse common components (say a step to automatically update the pipeline, or common
resources), reducing the size of individual files and allowing refactoring to happen without delving into YAML madness.
YAML anchors are all well and good, but have their limitation, and have very little on a full declarative language.

### PCI Pickling My Brain

Yes, I am making this a thing, this is my blog, what are you going to do about it?

Because Pay deals with card information, it requires to be certified under PCI DSS, a set of standards that banks,
merchants and service providers follow to ensure customer data is kept safe and secure.

As part of joining, I have had to do so much learning and tests to ensure that I understand PCI DSS and I am compliant,
to get access to our systems. It's the end of the week and I still don't have access to most things yet!

My onboarding has also included setting up GPG and AWS credentials to have access to our lower environments and to
securely transmit and receive data such as passwords. Because of the protections around the AWS accounts, it took a 
while to set up my first users properly.

### Pay, Pickled

Yup, I've lost it.

This week, the government announced the pay remit for 2024/2025. The offer on the table is a 5% uplift, which is a lot
better than what many of us were expecting. It's not enough to cover pay restoration that PCS and other unions have been
pushing for, but it's a step in the right direction. As a union representative, I will no doubt be working alongside my
colleagues and employer to come to an agreement.

We are also full swing into a Machinery of Government change that is moving GDS into DSIT, out of Cabinet Office. So 
far, this has been going very well, and everyone I have spoken to has felt included in communications. However, the
air of uncertainty still looms, with a lot of unanswered questions which unfortunately just can't be answered right
now. I am attending weekly meetings with DSIT and other trade union representatives to ensure the whole process goes as
smoothly as possible.

### What else have I been up to lately?

Here are some other things I have been up to, and some things happening this weekend!

- Sparkle Weekend, the largest transgender and gender identity festival in Europe!
- After Sparkle, a:gender (the Civil Service Network for transgender and intersex staff) has its members meeting,
  which was good fun, as well as being a good time to launch a:gender's new website built by me!
- Trans Pride Manchester is tomorrow, I plan on attending, and it should be a blast!

That's all from me, this week has been pretty chill all things considered, and it's just what I've needed.

*[GDS]: Government Digital Service
*[CI/CD]: Continuous Integration/Continuous Delivery
*[YAML]: Yet Another Markup Language
*[PCI DSS]: Payment Card Industry Data Security Standard
*[GPG]: Gnu Pretty Good Privacy
*[AWS]: Amazon Web Services
*[PCS]: Public and Commercial Services Union
*[DSIT]: Departments for Science, Innovation and Technology
