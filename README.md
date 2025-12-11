Source code to Dwait Bhatt's public academic website: https://www.dwaitbhatt.com/. Template inspiration from Jon Barron's website.

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

See `JEKYLL_GUIDE.md` for detailed instructions.

### Deployment

GitHub Pages automatically builds and deploys when you push to the repository.