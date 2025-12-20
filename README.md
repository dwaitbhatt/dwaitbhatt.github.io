Repository for my [personal site](https://dwaitbhatt.com). Design from Nicklas Hansen's [website](https://nicklashansen.com), rewritten in Jekyll for easier maintenance. 

If you're reading this, you're probably interested in creating a personal site similar to what I have built. You are very welcome to clone this repository and build off of Nicklas's and my work. Feel free to link back to our pages if you decide to clone, but don't feel obligated.

Below is a quick guide on setting up and maintenance, refer to [`JEKYLL_GUIDE.md`](JEKYLL_GUIDE.md) for detailed information.


## Setup

This website is built with Jekyll and hosted on GitHub Pages.

### Local Development

1. Install Ruby and Jekyll:
   ```bash
   gem install bundler jekyll
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000`

### Adding Content

- **Projects**: Edit `_data/projects.yml`
- **Publications**: Edit `_data/publications.yml`
- **Patents**: Edit `_data/patents.yml`

### Deployment

GitHub Pages automatically builds and deploys when you push to the repository.