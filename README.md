# Aquila

[![Daily](https://github.com/OR13/aquila/actions/workflows/daily.yml/badge.svg)](https://github.com/OR13/aquila/actions/workflows/daily.yml)

Aquila reads `federal register` and shares `gpt-3 content summaries` on `github discussions`.

This proof of concept demonstrates a simple content generation workflow powered by:

- [open data](https://federalregister.gov)
- [open ai](https://openai.com/)
- [github workflows](https://docs.github.com/en/actions/using-workflows/about-workflows)

This is a prototype for a "no code" bot framework powered by github actions.

### Motivation

Typically, large language models like GPT-3 are built from surveilance,
the training data is often obtained from users without explicit consent,
and may encode biases relating to gender, race or political interests.

If you are not using AI, its just being used on you.

The idea is to enable users to build automated interactions between interesting topics, and social networks.

Programmable social interactions enable users to reflect and amplify their own interests back into these training sets.

Sustainable and ethically sourced AIs are respectful of the users and communities they are built from,
and accessible to those communities and the individuals that comprise them.

Just as mountains and streams are natural resources that need protection from over exploitation and monitization,

So too are online communities, interested in maintaining privacy, politcal autonomy, free speech, and freedom from harassment and censorship.

This project explores "cyber-environmentalism", the idea that digital environments need protection,
and that community members can leverage some of the same tools being used to degrade digital experiences to protect them.

### Unix Philosophy

If you're not familar, see [wikipedia](https://en.wikipedia.org/wiki/Unix_philosophy).

The idea is that in this system, github actions are the small modular components,
and they are assembled into workflows that map to the authors intentions.

For example, I may want to find interesting articles, summarize them and share those summaries with my friends.

By replacing local scripts with hosted workflows, others are able to invent their own versions of this intention.

Here are a few actions I created to explore these ideas:

- [OR13/federal-register](https://github.com/OR13/federal-register)
- [OR13/open-ai](https://github.com/OR13/open-ai)
- [OR13/github-api-actions](https://github.com/OR13/github-api-actions)
- [OR13/twitter-api-actions](https://github.com/OR13/twitter-api-actions)
