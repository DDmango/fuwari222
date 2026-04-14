---
title: 每日Markdown Extended Features
published: 2024-05-01
updated: 2024-11-29
description: 'Read more about Markdown features in Fuwari'
image: ''
tags: [演示, Example, Markdown, Fuwari]
category: '示例'
draft: false 
---

<iframe  src="//player.bilibili.com/player.html?isOutside=true&aid=116355747679451&bvid=BV1KgSdBZELv&cid=37276287439&p=1" style="height: auto;" width="100%" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>


## GitHub Repository Cards
You can add dynamic cards that link to GitHub repositories, on page load, the repository information is pulled from the GitHub API. 

::github{repo="Fabrizz/MMM-OnSpotify"}

Create a GitHub repository card with the code `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```



### 下面是今日更新小黄方向
<h1>
<script>
document.write(new Date().toLocaleString()); 
</script>
<h1>

<img src="/src/img/wechat.jpg" alt="描述" width="50%" style="height: auto;">
<img src="/images/updata-2.jpg" alt="描述" width="100%" style="height: auto;">
<img src="/images/updata-3.jpg" alt="描述" width="100%" style="height: auto;">
<img src="/images/updata-4.jpg" alt="描述" width="100%" style="height: auto;">
<img src="/images/updata-5.jpg" alt="描述" width="100%" style="height: auto;">















## Admonitions

Following types of admonitions are supported: `note` `tip` `important` `warning` `caution`

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

### Basic Syntax

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### Custom Titles

The title of the admonition can be customized.

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub Syntax

> [!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```

### Spoiler

You can add spoilers to your text. The text also supports **Markdown** syntax.

The content :spoiler[is hidden **ayyy**]!

```markdown
The content :spoiler[is hidden **ayyy**]!

```