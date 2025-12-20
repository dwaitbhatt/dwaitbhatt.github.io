---
layout: default
---

<div>
    <p>
        I am a PhD student at 
        <a href="https://existentialrobotics.org/">Existential Robotics Laboratory</a>,
        <a href="https://ucsd.edu/">UC San Diego</a>, 
        where I work on reinforcement learning for robot manipulation. Previously, I was a machine learning engineer at 
        <a href="https://research.samsung.com/sri-b">Samsung Research</a> 
        for 3 years.
    </p>
    <p> 
        Recently, I have been working on efficient ways to leverage offline demonstrations with online RL, to make fast, real-world RL feasible.
        Always open to talk about AI safety, robotics, and reinforcement learning. Feel free to reach out over mail!
    </p>
</div>

<div>
    <h2 class="noselect">Publications and preprints</h2>
    <!-- <p>Papers sorted by recency. Representative papers are <span style="background-color: #fff8df">highlighted</span>.</p> -->
    
    {% for pub in site.data.publications %}
    <div class="{% if pub.highlight %}highlight {% endif %}publication row clearfix">
        {% if pub.hover_video %}
        <div class="row-media row-media-video">
            <video autoplay loop muted playsinline>
                <source src="{{ pub.hover_video | relative_url }}" type="video/mp4">
            </video>
        </div>
        {% else %}
        <div class="row-media" style="background-image: url('{{ pub.image | relative_url }}');"></div>
        {% endif %}
        <div class="row-text">
            <a class="publication-title bold" href="{{ pub.url }}">{{ pub.title }}</a><br/>
            {{ pub.authors }}<br/>
            {% if pub.venue %}<span class="italic">{{ pub.venue }}</span><br/>{% endif %}
            {% if pub.links %}
            {% for link_pair in pub.links %}
            <a class="btn" href="{{ link_pair[1] }}">{{ link_pair[0] }}</a>{% unless forloop.last %} / {% endunless %}
            {% endfor %}
            {% endif %}
            {% if pub.description %}<p style="margin-top: 8px; margin-bottom: 0;">{{ pub.description }}</p>{% endif %}
        </div>
    </div>
    {% endfor %}
</div>

<div>
    <h2 class="noselect">Patents</h2>
    
    {% for patent in site.data.patents %}
    <div class="patent row clearfix">
        <div class="row-text" style="margin-left: 0; max-width: 100%;">
            <a class="publication-title bold" href="{{ patent.url }}">{{ patent.title }}</a><br/>
            {{ patent.authors }}<br/>
            <span class="italic">{{ patent.patent_info }}</span>
        </div>
    </div>
    {% endfor %}
</div>

<div>
    <h2 class="noselect">Projects</h2>
    
    {% for project in site.data.projects %}
    <div class="publication row clearfix">
        {% if project.hover_video %}
        <div class="row-media row-media-video">
            <video autoplay loop muted playsinline>
                <source src="{{ project.hover_video | relative_url }}" type="video/mp4">
            </video>
        </div>
        {% else %}
        <div class="row-media" style="background-image: url('{{ project.image | relative_url }}');"></div>
        {% endif %}
        <div class="row-text">
            {% if project.url %}
            <a class="publication-title bold" href="{{ project.url }}">{{ project.title }}</a><br/>
            {% else %}
            <span class="publication-title bold">{{ project.title }}</span><br/>
            {% endif %}
            {{ project.authors }}<br/>
            {% if project.links %}
            {% for link_pair in project.links %}
            <a class="btn" href="{{ link_pair[1] }}">{{ link_pair[0] }}</a>{% unless forloop.last %} / {% endunless %}
            {% endfor %}
            {% endif %}
            {% if project.description %}<p style="margin-top: 8px; margin-bottom: 0;">{{ project.description }}</p>{% endif %}
        </div>
    </div>
    {% endfor %}
</div>

<div id="contact" class="noselect">
    <h2>Contact</h2>
    You are welcome to contact me regarding my research! My email is <span class="bold">dwait.bhatt</span> [at] <span class="bold">gmail</span> 。com
</div>
