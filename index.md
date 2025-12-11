---
layout: default
---

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr style="padding:0px">
      <td style="padding:2.5%;width:63%;vertical-align:middle">
        <p class="name" style="text-align: center;">
          Dwait Bhatt
        </p>
        <p>
          I am a PhD student at 
          <a href="https://existentialrobotics.org/">Existential Robotics Laboratory</a>,
          <a href="https://ucsd.edu/">UC San Diego</a>, 
          where I work on robot manipulation and reinforcement learning. Previously, I was a machine learning engineer at 
          <a href="https://research.samsung.com/sri-b">Samsung Research</a> 
          for 3 years.
        </p>
        <p> 
          My research goal is to develop continually aligned and helpful robots using demonstrations, explicit and implicit feedback, and intrinsic motivation. Always open to talk about AI safety, robotics, and reinforcement learning. Feel free to reach out over mail.
        </p>
        <p style="text-align:center">
          <a href="mailto:dwait.bhatt@gmail.com">Email</a> &nbsp;/&nbsp;
          <a href="{{ '/data/Dwait_Bhatt_Resume_Research.pdf' | relative_url }}">Resume</a> &nbsp;/&nbsp;
          <a href="https://scholar.google.com/citations?user=dDW1ydgAAAAJ">Google Scholar</a> &nbsp;/&nbsp;
          <a href="https://www.linkedin.com/in/dwait-bhatt">LinkedIn</a> &nbsp;&nbsp;
        </p>
      </td>
      <td style="padding:2.5%;width:40%;max-width:40%">
        <a href="{{ '/images/DwaitBhatt.jpg' | relative_url }}"><img style="width:100%;max-width:100%;object-fit: cover; border-radius: 50%;" alt="profile photo" src="{{ '/images/DwaitBhatt.jpg' | relative_url }}" class="hoverZoomLink"></a>
      </td>
    </tr>
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="padding:20px;width:100%;vertical-align:middle">
        <h2>Publications</h2>
      </td>
    </tr>
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    {% for pub in site.data.publications %}
    <tr>
      <td style="padding:20px;width:25%;vertical-align:middle">
        <div class="one">
          <img src="{{ pub.image | relative_url }}" width="160" {% if pub.image_title %}title="{{ pub.image_title }}"{% endif %}>
        </div>
      </td>
      <td style="padding:20px;width:75%;vertical-align:middle">
        <a href="{{ pub.url }}">
          <span class="papertitle">{{ pub.title }}</span>
        </a>
        <br>
        {{ pub.authors }}
        <br>
        <em>{{ pub.venue }}</em>
        <p>{{ pub.description }}</p>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="padding-top:10px; padding-bottom:0px; padding-left:20px; padding-right:20px; width:100%; vertical-align:middle">
        <h2>Patents</h2>
      </td>
    </tr>
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    {% for patent in site.data.patents %}
    <tr>
      <td style="padding:20px;width:75%;vertical-align:middle">
        <a href="{{ patent.url }}">
          <span class="papertitle">{{ patent.title }}</span>
        </a>
        <br>
        {{ patent.authors }}
        <br>
        {{ patent.patent_info }}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="padding:20px;width:100%;vertical-align:middle">
        <h2>Projects</h2>
      </td>
    </tr>
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    {% for project in site.data.projects %}
    <tr {% if project.hover_video %}data-hover-video="{{ project.hover_video | relative_url }}"{% endif %}>
      <td style="padding:20px;width:25%;vertical-align:middle">
        <div class="one">
          {% if project.hover_video %}
          <div class="two" style="opacity: 0;">
            <video width="100%" height="100%" muted loop preload="none">
              <source src="{{ project.hover_video | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          {% endif %}
          <img src="{{ project.image | relative_url }}" width="160" {% if project.image_title %}title="{{ project.image_title }}"{% endif %}>
        </div>
      </td>
      <td style="padding:20px;width:75%;vertical-align:middle">
        {% if project.url %}
          {% unless project.game_link %}
          <a href="{{ project.url }}">
            <span class="papertitle">{{ project.title }}</span>
          </a>
          {% else %}
          <span class="papertitle">{{ project.title }}</span>
          {% endunless %}
        {% else %}
        <span class="papertitle">{{ project.title }}</span>
        {% endif %}
        <br>
        {{ project.authors }}
        {% if project.video_presentation %}
        <br>
        <a href="{{ project.video_presentation }}">Video Presentation</a>
        {% endif %}
        {% if project.game_link %}
        <br>
        <a href="{{ project.url }}">{{ project.game_link }}</a>
        {% endif %}
        {% if project.description %}
        <p>{{ project.description }}</p>
        {% endif %}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
  <tbody>
    <tr>
      <td style="padding:0px">
        <br>
        <p style="text-align:center;font-size:small;">
          Template from <a href="https://github.com/jonbarron/jonbarron_website">Jon Barron</a>'s website.
        </p>
      </td>
    </tr>
  </tbody>
</table>

