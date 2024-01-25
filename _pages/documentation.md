### Documentation for website - Phase 4 of Refactor

- #### Changes made:
    For a custom twitter(X) layout, the following changes were made:
    1. Under the _layouts folder two files were created:
        - twitter_layout.html
            - This file is in used for creating a custom layout for the social media page. The url navigates to the page sample [Social media page](https://www.lifewithalacrity.com/tweets/).
        - single_tweets.html.
            - This file is in used for creating a custom layout for the social media post content. The url navigates to a post sample [Social media post](https://www.lifewithalacrity.com/tweets-md/2023/2023-01-01-tweets/).

    2. Under the _includes folder a file was created:
        - archive-single_tweet.html
            - This file is used for removing the "excerpt description in each post url under the twitter_layout.html file".
            The code in line 28 was commented out.
            ```html
                <!-- {% if post.excerpt %}<p class="archive__item-excerpt" itemprop="description">{{ post.excerpt | markdownify | strip_html | truncate: 0 }}</p>{% endif %} -->
            ```
    3. The list of tweets are stored in the folder "_tweets-md".

    4. Under the _config.yml the code was added to render the folder (_tweets-md):
         ```yml
             # _tweet-md
        - scope:
            path: ""
            type: tweets-md
            values:
            layout: single_tweets
            author_profile: true
            search: false
            header:
                overlay_image: /assets/images/lwa.png
        ```
    5. The yaml header with the following keys were added on each file in the "tweets-md" folder.
    
     ```yml
        ---   
        title: Social Media - January 
        date: "2023-01-31"
        time:  23:59:59 +0000
        ---
    ```
    6. The CSS designs where added in the file of the layout folders (twitter_layout.html and single_tweets.html)

    7. The path to each image where changed from **src="../../media/tweet.ico** to **src="{{ site.url }}{{ site.baseurl }}/assets/images/media/tweet.ico"**. This is done to navigate the image folder under this path: **/assets/images/media**.

    8. The text was removed on every post: **Replying to [@ChristopherA]** together with the link url.

    9. This code was remodified to force the posts to be reversed. Give reference to line 108 to 132.

    This is also applicable to the home page "Recent Social Media Post".

    ``` html

    <h3 class="recent-post__text recent-post__text-social-media">All Recent Social Media Posts</h3>

        <ul class="post-catalog_order post-catalog_order__social-media" style="font-weight: bold">

        {% assign reversed_posts = site.tweets-md | reverse %}
        {% for post in reversed_posts limit: 7 %}
            <li class="post-catalog_list post-catalog_list__social-media">
            <b>{{ post.date | date: "%Y-%m-%d" }}:</b> <a href="{{ post.url }}">{{ post.title }}</a>
            </li>
        {% endfor %}
        </ul>

        <span class="see-all_text see-all_text__social-media ">See all [Social Media Posts](/tweets/) <i style="color: #05A069;" class="far fa-eye"></i></span>

    ```

    10. GnuWin SED [Link to download editor](https://www.gnu.org/software/sed/manual/sed.html) was use to loop through  each files via the terminal to correct the links under each tweets. This was done because the links were not a standard markdown link, i.e **[Link title](link url)**.
    
    The regular expression used was:

    ``` ruby
    foreach i (*)
    cat $i | gsed 's/\\//g' > $i-REV1
    cat $i-REV1 | gsed 's/[^(]\b\(https:\/\/[^ |,]*\)/ [\1](\1)/g' > $i-REV2
    cat $i-REV2 | gsed 's/[^(]\b\(http:\/\/[^ |,]*\)/ [\1](\1)/g' > $i-REV3
    cat $i-REV3 | gsed 's/\.)/)/g' > $i-REV4
    mv $i-REV4 $i
    rm *REV*
    end
    ```
