# Jekyll Website Maintenance Guide

## Table of Contents

1. [Setup](#setup)
2. [Adding New Projects](#adding-new-projects)
3. [Adding New Publications](#adding-new-publications)
4. [Adding New Patents](#adding-new-patents)
5. [Adding Video Previews](#adding-video-previews)
6. [Adding New Sections](#adding-new-sections)
7. [Testing Locally](#testing-locally)
8. [Deploying](#deploying)

---

## Setup

### Initial Setup (One-time)

1. **Install Ruby and Jekyll** (if not already installed):
   ```bash
   # Windows (using RubyInstaller)
   # Download from: https://rubyinstaller.org/
   
   # Mac/Linux
   gem install bundler jekyll
   ```

2. **Create Gemfile** (if it doesn't exist):
   ```ruby
   source "https://rubygems.org"
   gem "jekyll", "~> 4.4.1"
   ```

3. **Install dependencies**:
   ```bash
   bundle install
   ```

4. **Test locally**:
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` to see your site.

### GitHub Pages Setup

GitHub Pages automatically builds Jekyll sites! Just push your changes and GitHub will build and deploy automatically.

---

## Adding New Projects

### Simple Project (Image Only)

Edit `_data/projects.yml` and add a new entry:

```yaml
- title: "My New Project"
  url: "https://drive.google.com/file/d/..."
  authors: |
    <strong>Dwait Bhatt</strong>
  description: "Description of your project here."
  image: "/files/new_project.png"
  image_title: "Optional image credit or title"
```

### Project with Video Preview

Add the `hover_video` field:

```yaml
- title: "My New Project with Video"
  url: "https://drive.google.com/file/d/..."
  authors: |
    <strong>Dwait Bhatt</strong>
  description: "Description of your project here."
  image: "/files/new_project.png"
  hover_video: "/files/new_project.mp4"  # ← Just add this line!
```

**That's it!** The video will automatically play on hover.

### Project with Additional Links

```yaml
- title: "My Project"
  authors: |
    <strong>Dwait Bhatt</strong>
  description: "Description here."
  image: "/files/project.png"
  links:
    "Code": "https://github.com/..."
    "Technical Report": "https://drive.google.com/file/d/..."
    "Demo Video": "https://..."
```

### Complete Example

```yaml
- title: "Robot Learning Project"
  url: "https://drive.google.com/file/d/1ABC123/view"
  authors: |
    <strong>Dwait Bhatt</strong>,
    <a href="https://collaborator.com/">Collaborator Name</a>
  description: "Using reinforcement learning to teach robots new skills."
  image: "/files/robot_project.png"
  image_title: "Image credit: DALL-E 3"
  hover_video: "/files/robot_project.mp4"
```

**Key Points:**
- Use `|` after `authors:` for multi-line text
- Use `<strong>` tags for your name
- Use `<a href="...">` for links in authors
- Image paths start with `/files/`
- Video paths start with `/files/` and end with `.mp4`

---

## Adding New Publications

Edit `_data/publications.yml`:

```yaml
- title: "My New Paper"
  url: "https://arxiv.org/abs/..."
  authors: |
    <a href="https://coauthor.com/">Coauthor Name</a>,
    <strong>Dwait Bhatt</strong>,
    <a href="https://another.com/">Another Author</a>
  links:
    "Paper": "https://arxiv.org/abs/..."
    "Code": "https://github.com/..."
    "Website": "https://..."
  venue: "Conference Name, 2024"
  description: "Brief description of the paper's contribution."
  image: "/files/paper_image.png"
  image_title: "Optional image credit"
```

### Example

```yaml
- title: "Learning Robot Manipulation Skills"
  url: "https://ieeexplore.ieee.org/abstract/document/12345678"
  authors: |
    <a href="https://tianyudwang.github.io/">Tianyu Wang</a>,
    <strong>Dwait Bhatt</strong>,
    <a href="https://xiaolonw.github.io/">Xiaolong Wang</a>
  venue: "ICRA, 2024"
  description: "We propose a novel method for transferring manipulation skills across different robot morphologies."
  image: "/files/manipulation_paper.png"
  image_title: "Image credit: DALL-E 3"
```

---

## Adding New Patents

Edit `_data/patents.yml`:

```yaml
- title: "Patent Title Here"
  url: "https://patentimages.storage.googleapis.com/..."
  authors: |
    Coauthor Name, <strong>Dwait Bhatt</strong>, Another Author
  patent_info: "US Patent: US12345678A1, 2024"
```

---

## Adding Video Previews

### Step 1: Add Video File

Place your video file in the `files/` folder:
```
files/
  my_project.mp4
```

### Step 2: Add to YAML

In `_data/projects.yml`, add the `hover_video` field:

```yaml
- title: "My Project"
  url: "https://..."
  authors: |
    <strong>Dwait Bhatt</strong>
  description: "Project description"
  image: "/files/my_project.png"
  hover_video: "/files/my_project.mp4"  # ← Add this line!
```

**That's it!** The video will:
- Show the image by default
- Play the video on hover
- Hide the video when you move the mouse away

### Video Requirements

- **Format**: MP4 (recommended)
- **Location**: `files/` folder
- **Naming**: Use descriptive names (e.g., `curiosity.mp4`, `robot_demo.mp4`)
- **Size**: Keep videos small for web (under 10MB recommended)

---

## Adding New Sections

### Step 1: Create Data File

Create a new file in `_data/` folder, e.g., `_data/awards.yml`:

```yaml
- title: "Best Paper Award"
  year: "2024"
  venue: "ICRA"
  description: "Awarded for outstanding contribution to robotics."

- title: "Student Research Award"
  year: "2023"
  venue: "UCSD"
  description: "Recognized for exceptional research."
```

### Step 2: Add to index.md

Edit `index.md` and add your new section:

```markdown
## Awards

{% for award in site.data.awards %}
<div class="award-item">
  <h3>{{ award.title }}</h3>
  <p><strong>{{ award.year }}</strong> - {{ award.venue }}</p>
  <p>{{ award.description }}</p>
</div>
{% endfor %}
```

### Step 3: Style (Optional)

Add CSS to `stylesheet.css` if needed:

```css
.award-item {
  padding: 20px;
  margin-bottom: 20px;
}
```

---

## File Structure

```
your-website/
├── _config.yml          # Jekyll configuration
├── _data/               # Content data files
│   ├── publications.yml
│   ├── patents.yml
│   └── projects.yml
├── _layouts/            # HTML templates
│   └── default.html
├── index.md             # Main page (uses layout)
├── stylesheet.css       # Your styles
├── files/              # Images, videos, PDFs
└── CNAME                # Your domain config
```

---

## Testing Locally

### Start Jekyll Server

```bash
bundle exec jekyll serve
```

### View Your Site

Open `http://localhost:4000` in your browser.

### Auto-reload

Jekyll automatically rebuilds when you save changes. Just refresh your browser!

### Common Issues

**Issue**: "Could not find gem 'jekyll'"
- **Solution**: Run `bundle install`

**Issue**: Port 4000 already in use
- **Solution**: Use `bundle exec jekyll serve --port 4001`

**Issue**: Changes not showing
- **Solution**: 
  - Make sure you saved the file
  - Check for YAML syntax errors (indentation matters!)
  - Restart Jekyll server

---

## Deploying

### GitHub Pages (Automatic)

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add new project"
   git push
   ```

2. **GitHub automatically builds**:
   - Wait 1-2 minutes
   - Visit your site: `https://yourusername.github.io`

### Manual Build (Optional)

If you want to build locally first:

```bash
bundle exec jekyll build
```

This creates a `_site/` folder with the generated HTML.

---

## YAML Syntax Tips

### Indentation Matters!

✅ **Correct**:
```yaml
- title: "My Project"
  url: "https://..."
  authors: |
    <strong>Dwait Bhatt</strong>
```

❌ **Wrong** (wrong indentation):
```yaml
- title: "My Project"
url: "https://..."  # Missing indentation!
```

### Multi-line Text

Use `|` for multi-line text:

```yaml
authors: |
  <strong>Dwait Bhatt</strong>,
  <a href="https://...">Coauthor</a>
```

### Special Characters

If you have quotes in your text, use single quotes:

```yaml
title: "Don't worry about quotes"
# or
title: 'He said "Hello"'
```

---

## Common Tasks

### Reorder Projects

Simply reorder entries in `_data/projects.yml`. The order in the file is the order on the page.

### Remove a Project

Delete the entry from `_data/projects.yml`.

### Update a Project

Edit the entry in `_data/projects.yml` and save.

### Change Site Title

Edit `_config.yml`:
```yaml
title: Your New Title
```

---

## Troubleshooting

### Video Not Playing

1. Check file path: Should be `/files/filename.mp4`
2. Check file exists in `files/` folder
3. Check video format (MP4 recommended)
4. Check browser console for errors

### Images Not Showing

1. Check path starts with `/files/`
2. Check file exists in `files/` folder
3. Check file extension matches (`.png`, `.jpg`, etc.)

### YAML Errors

Common YAML errors:
- Missing colons (`:`)
- Wrong indentation (use 2 spaces)
- Unclosed quotes
- Missing dashes (`-`) for list items

Use an online YAML validator: https://www.yamllint.com/

### Site Not Building

1. Check `_config.yml` syntax
2. Check all YAML files for errors
3. Run `bundle exec jekyll build` to see error messages
4. Check Jekyll logs in terminal

---

## Quick Reference

### Add New Project
1. Edit `_data/projects.yml`
2. Add new entry with `- title: "..."`
3. Save and push to GitHub

### Add Video Preview
1. Add video file to `files/` folder
2. Add `hover_video: "/files/filename.mp4"` to project entry
3. Save and push

### Add New Publication
1. Edit `_data/publications.yml`
2. Add new entry
3. Save and push

### Test Locally
```bash
bundle exec jekyll serve
```
Visit `http://localhost:4000`

---

## Need Help?

- **Jekyll Docs**: https://jekyllrb.com/docs/
- **YAML Syntax**: https://learnxinyminutes.com/docs/yaml/
- **GitHub Pages**: https://pages.github.com/
