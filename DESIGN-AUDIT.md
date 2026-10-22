# 30 套网站风格研究逐项审查（修正前快照）
> 本文件保存修正前的审查结论；修正已实施，当前状态见 [CORRECTIONS.md](CORRECTIONS.md)。下文代码链接固定指向修正前的提交，避免行号随新代码变化。未核实内容仍未认证为官方规范。

核查日期：2026-10-22（Asia/Shanghai）。结论：**当前版本不宜作为“已核实、可直接复用的 design system”发布。**

本次仅添加审查报告，没有修改生产代码、配色或交互。核查对象是 systems.js 的全部 30 条记录，以及 app.js、styles.css、index.html、README.md。

## 方法与边界

- 对照品牌官方主页、官方公开设计规范及其页面引用的 CSS；关键争议另外读取浏览器计算样式（Cursor、Notion、Framer、A24）。
- 明确区分“色值在源码出现”“该值确实用于对应元素”“官方规范明确规定”。SVG、示意图或旧版兼容 CSS 中出现一个颜色，不等于它就是主按钮色。
- 对全部 30 套计算 5 组不透明 sRGB 前景/背景对比度：on/accent、ink/bg、ink/surface、muted/bg、muted/surface。合计 150 组；其中 5 组按钮文字不足 4.5:1。145 组通过这一有限检查不等于整页或全站可访问性通过，渐变、图片、叠层、hover/focus/disabled 未包含在这项数值检查里。
- 普通文字 4.5:1、大字 3:1 采用 [W3C WCAG 2.2 对比度解释](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)。本库按钮继承 15px，不能按大字豁免。
- 网站、地域、实验分组和主题会变化。未匹配的值记为“待补证”，不据此断言该品牌从未使用过这个颜色。Aesop、Lovable 受访问限制；Airbnb 未取得实际样式；Mistral 样式请求超时。上述条目不算通过。
- README 已说明是 public-page observations、字体为开源替代，这是合理定位。但详情页仍将不少作者判断写成了品牌的绝对规则；当前数据没有逐字段 source/checkedAt/theme/component 记录。

## 优先处理的问题

1. **[P1] 五套按钮白字对比度不足。** Airbnb 3.516:1；Claude 3.277:1；Cursor 3.516:1；Zapier 3.296:1；Mistral 3.345:1。位置见下方每条记录的 accent/on 字段，统一渲染处为 [styles.css:469](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/styles.css#L469)。应先查真实操作色及其 on-color；例如 Cursor 保留品牌橙，但主按钮用深色/米白。不要为了修对比度而把品牌色改成未经证实的新“官方色”。
2. **[P1] 已有直接反证的品牌记录。** Notion 首页主按钮实际是 #0075DE 而非 #5645D4；Spotify 已使用 Spotify Mix；The Verge 提供 Light/System/Dark，原则却写没有 light mode；Cursor 品牌橙不是首页主 CTA 背景。详见逐项记录和官方来源。
3. **[P2] 同名色板与运行 token 不一致。** Nike：Muted #707072 vs #C8C8C8，Line #E5E5E5 vs #2A2A2A；SpaceX：Muted #5A5A5F vs #A8A8B0，Line #E0E0E8 vs #3A3A3F；Shopify：Line #E4E4E7 vs rgba(255,255,255,.2)。应拆主题或从同一 token 数据生成色板，不能让两条复制路径输出不同的“Line”。代码分别在 systems.js:551、889、1142 附近。
4. **[P2] 导出 token 契约与预览不一致。** [app.js:234](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/app.js#L234) 的 paint 使用 --ink/--on/--c2/--r/--display；[app.js:259](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/app.js#L259) 的 cssBlock 导出 --text/--accent-text/--spot/--radius/--font-display，且漏掉 weight、tracking、caps。导出的 token 单独使用可以自行映射，但无法直接喂给本项目的示例 CSS。应统一变量名、补齐字体参数，并提供所需字体加载声明或明确依赖。
5. **[P2] 正文和控件字体未按每套系统实现。** [app.js:235](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/app.js#L235) 将除 Teenage Engineering 外的正文全部固定为 Inter；[styles.css:23](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/styles.css#L23) 的 button/input 又通过 font:inherit 使用正文，字体名字主要只作用于标题。开源替代可保留，但需给 display/body/control 分别声明字体及“替代”身份。Raycast 的 ss03 原则没有相应 CSS；Figma 原则约 340 与实际 400 冲突。index.html 的字体链接不代表已加载品牌字体。
6. **[P2] 当前 schema 还不是完整 design system。** 数据主要是 9 色、标题字体、两种圆角和单个阴影；没有 spacing/type scale、语义色、交互状态 token、组件变体、焦点/错误/禁用规范、主题映射及逐项来源。八类通用预览也不能证明每家的布局/组件规则。可将产品定位写成“30 套网站视觉风格研究 / starter themes”；若承诺可复用系统，需补齐上述契约。尺寸/触控问题（如 15px 输入和 28/30/36px 控件）属于另一轮组件可用性检查，本报告未做完整交互验收。

## 逐项核对

下面的“核心色确认”只针对文中明确列出的字段；没有任何一条被认定为该品牌完整 design system 通过。

### 01. Linear — 部分确认，需修正

- 代码：[systems.js:4](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L4)。当前 bg `#010102`；accent `#5E6AD2`；on `#FFFFFF`。
- 已确认/检查：官网 CSS 确认营销背景 #010102、正文 #F7F8F8、三级文字 #8A8F98、品牌靛蓝 #5E6AD2、链接 #828FFF；font-weight-medium 为 510。
- 问题与处理：surface #1C1E22 缺少对应角色依据；官网 bg-secondary 为 #1C1C1F，panel 为 #0F1011。字体声明是 Inter Variable；不宜把 Linear Sans 写成已核实字体。官网本身区分品牌色、链接色和语义色，“没有第二亮色”应限定为作者建议。
- 本地按钮文字对比度：**4.700:1，通过普通文字 AA**。
- 官方来源：[linear.app](https://linear.app)。

### 02. Stripe — 核心色有依据，仍需补证

- 代码：[systems.js:46](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L46)。当前 bg `#FFFFFF`；accent `#533AFD`；on `#FFFFFF`。
- 已确认/检查：官网 HDS 的 brand-600=#533AFD、neutral-990=#061B31、neutral-50=#E5EDF5；#F6F9FC、#FF6118、#FB76FA 也有具体 CSS 用途。sohne-var 字体可确认。
- 问题与处理：muted #425466 未在取得的本次样式中匹配；官网使用 text-soft→neutral-600 等语义映射。300 字重、统一胶囊和固定阴影只能作为选定样例的提炼，尚非官网全局规范。
- 本地按钮文字对比度：**6.192:1，通过普通文字 AA**。
- 官方来源：[stripe.com](https://stripe.com)。

### 03. Vercel — 需要修正原则

- 代码：[systems.js:88](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L88)。当前 bg `#FAFAFA`；accent `#171717`；on `#FFFFFF`。
- 已确认/检查：Geist / GeistSans、黑白基础与 #7928CA、#0070F3 的历史/装饰变量有来源。
- 问题与处理：“界面只有黑白”不适用于完整 Geist：官方有蓝、红、琥珀、绿、青、紫、粉等色阶及语义用途；按钮也有 rounded 和 shadow 变体，不能规定全部 6px。营销页面研究应与 Geist 产品系统分开。
- 本地按钮文字对比度：**17.928:1，通过普通文字 AA**。
- 官方来源：[vercel.com/geist/colors](https://vercel.com/geist/colors)；[vercel.com/geist/button](https://vercel.com/geist/button)。

### 04. Apple — 核心色有依据，角色需细分

- 代码：[systems.js:130](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L130)。当前 bg `#F5F5F7`；accent `#0071E3`；on `#FFFFFF`。
- 已确认/检查：本次官网 CSS 能匹配全部九个基础颜色字段：#F5F5F7、白、#1D1D1F、#6E6E73、#0071E3、#D2D2D7、黑、#FAFAFC。SF Pro Text / Display 家族可确认。
- 问题与处理：这证明色值存在，不证明每个角色都全站统一。链接与实心 CTA 应分别取样；“只在灰白和纯黑之间交替”、18px 卡片和 600 字重不应写成整个 Apple / HIG 的规则。
- 本地按钮文字对比度：**4.697:1，通过普通文字 AA**。
- 官方来源：[apple.com](https://apple.com)。

### 05. Airbnb — 按钮对比度需修正；来源待补

- 代码：[systems.js:172](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L172)。当前 bg `#FFFFFF`；accent `#FF385C`；on `#FFFFFF`。
- 已确认/检查：本地黑白中性色搭配可读；此处仅能确认库中的配色计算，不能给官网精确采样背书。
- 问题与处理：#FF385C 配 #FFFFFF 按钮文字仅 3.516:1。官网文本能读取，但本次源站请求仅返回约 824 字节的脚本跳转页，未拿到实际样式；Cereal、16px 卡片和其他色值均应标为待补来源。不可只因熟悉品牌色便认证通过。
- 本地按钮文字对比度：**3.516:1，不通过普通文字 AA**。
- 官方来源：[airbnb.com](https://airbnb.com)。

### 06. Aesop — 待核实

- 代码：[systems.js:214](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L214)。当前 bg `#FFFEF2`；accent `#333333`；on `#FFFEF2`。
- 已确认/检查：本地纸色 #FFFEF2 与 #333333 对比度充足，零圆角/零阴影在代码内部一致。
- 问题与处理：源站 CSS 请求返回 403；网页阅读工具仅取得降级文本。未取得色值、Suisse Intl / serif 身份和具体角色证据；Newsreader 是库的替代字体。当前只能视为风格提炼，不能标记已验证。
- 本地按钮文字对比度：**12.461:1，通过普通文字 AA**。
- 官方来源：[www.aesop.com](https://www.aesop.com)。

### 07. Arc — 核心品牌色确认，其余需补证

- 代码：[systems.js:256](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L256)。当前 bg `#FFFCEC`；accent `#3139FB`；on `#FFFFFF`。
- 已确认/检查：官网变量直接确认 --colors-brandBlue:#3139FB、--colors-brandOffwhite:#FFFCEC；Marlin 字体家族存在。
- 问题与处理：#141414、#5C5848、#E7E2C8、#FFB38A、#FFF6C2 未在所取样式中匹配；20px 卡片、560 字重仍需对应元素。Arc 页面当前还包含 Dia 导流，研究应绑定具体页面与时间。
- 本地按钮文字对比度：**6.755:1，通过普通文字 AA**。
- 官方来源：[arc.net](https://arc.net)。

### 08. Claude — 需要修正

- 代码：[systems.js:298](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L298)。当前 bg `#FAF9F5`；accent `#CC785C`；on `#FFFFFF`。
- 已确认/检查：官网 gray-050=#FAF9F5 可确认；当期样式声明 anthropicSans、anthropicSerif、anthropicMono。
- 问题与处理：其余所列暖灰、#CC785C、青绿与琥珀色未在本次所取样式中匹配；Copernicus / Tiempos 不能冒充当期已确认字体。白字/陶土按钮只有 3.277:1。“motion 0.8s”没有动作、缓动、来源或减少动态效果约束，不应作为通用交互规则。
- 本地按钮文字对比度：**3.277:1，不通过普通文字 AA**。
- 官方来源：[claude.com](https://claude.com)。

### 09. Notion — 主按钮色和字体名需修正

- 代码：[systems.js:340](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L340)。当前 bg `#FFFFFF`；accent `#5645D4`；on `#FFFFFF`。
- 已确认/检查：浏览器实测 Get Notion free 主按钮为 rgb(0,117,222) 即 #0075DE，白字、8px 圆角。官网 CSS 使用 NotionInter，gray-200=#F6F5F4。
- 问题与处理：库中 accent=#5645D4，以及“紫色是唯一固定品牌操作色”的原则与当期首页直接冲突。应使用该蓝色作为“该页主按钮”样本；Notion Sans 改为本次查到的 NotionInter，或明确记录历史版本。
- 本地按钮文字对比度：**6.567:1，通过普通文字 AA**。
- 官方来源：[www.notion.com](https://www.notion.com)。

### 10. Figma — 字体确认，色板与字重需补证

- 代码：[systems.js:382](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L382)。当前 bg `#FFFFFF`；accent `#000000`；on `#FFFFFF`。
- 已确认/检查：官网声明 figmaSans / figmaMono；有 8、12、16、24、28 和 full 等圆角 token。
- 问题与处理：库中的四个具体粉彩色未在本次取到的 CSS 中字面匹配，不能认证为官方色板。原则写 display weight≈340，数据却为 400，内部不一致；无论最终选哪一个都应绑定具体标题证据。
- 本地按钮文字对比度：**21.000:1，通过普通文字 AA**。
- 官方来源：[www.figma.com](https://www.figma.com)。

### 11. Framer — 主要方向确认，精确值未全确认

- 代码：[systems.js:424](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L424)。当前 bg `#090909`；accent `#FFFFFF`；on `#000000`。
- 已确认/检查：浏览器当期 h1 声明 GT Walsheim Medium、500 字重；黑色舞台和白色主要操作的大方向有页面依据。
- 问题与处理：#090909、#D44DF0、#FF7A3D 未在本次样式中匹配。即使 CSS 包含很多字体，也不能据此否定 h1 的 Walsheim；要按实际元素判定。按钮在该次加载中的样式有不完整信号，未据此认证统一 pill 半径。
- 本地按钮文字对比度：**21.000:1，通过普通文字 AA**。
- 官方来源：[www.framer.com](https://www.framer.com)。

### 12. Raycast — 部分确认，原则与实现不一致

- 代码：[systems.js:466](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L466)。当前 bg `#07080A`；accent `#FFFFFF`；on `#000000`。
- 已确认/检查：官网变量确认 bg-200=#18191A、fg=#F4F4F6、border=#242728、品牌红 #FF6363；Inter 存在。
- 问题与处理：#07080A 的匹配上下文是某个 tag，不能单凭出现就认证为全站 canvas；muted #A0A0A0 未匹配。原则说白色 pill，但 r=10px；原则说启用 ss03，库中无 font-feature-settings 实现。
- 本地按钮文字对比度：**21.000:1，通过普通文字 AA**。
- 官方来源：[www.raycast.com](https://www.raycast.com)。

### 13. Spotify — 字体过时；页面范围需修正

- 代码：[systems.js:508](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L508)。当前 bg `#121212`；accent `#1ED760`；on `#000000`。
- 已确认/检查：Spotify 官方于 2024-05-22 宣布 Spotify Mix，并明确替换应用和桌面体验的旧字体。
- 问题与处理：face=Circular 作为 2026 年当前主字体不正确，应注明历史或换成 Spotify Mix。当前 url=spotify.com 指向营销入口，描述却是播放器系统，宜绑定 open.spotify.com。深色/绿色的具体 token 本次未取得足够 CSS 证据，不能全部认证。
- 本地按钮文字对比度：**10.944:1，通过普通文字 AA**。
- 官方来源：[newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/](https://newsroom.spotify.com/2024-05-22/introducing-spotify-mix-our-new-and-exclusive-font/)；[open.spotify.com/](https://open.spotify.com/)。

### 14. Nike — 色板与 token 不一致

- 代码：[systems.js:551](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L551)。当前 bg `#111111`；accent `#FFFFFF`；on `#111111`。
- 已确认/检查：官网资源中有 Nike Futura / Nike Futura ND、Helvetica Now Text 等字体；黑白与强摄影是可保留的方向。
- 问题与处理：运行 muted=#C8C8C8、line=#2A2A2A，色板却显示 Muted=#707072、Line=#E5E5E5，把深浅模式混在一套里。Futura 并非全部文字唯一字体，应把标题与正文分开；Barlow Condensed 是替代品。
- 本地按钮文字对比度：**18.883:1，通过普通文字 AA**。
- 官方来源：[www.nike.com](https://www.nike.com)。

### 15. Wise — 核心色确认，限制过度

- 代码：[systems.js:594](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L594)。当前 bg `#E8EBE6`；accent `#9FE870`；on `#163300`。
- 已确认/检查：官网确认 bright-green=#9FE870、forest-green=#163300、content-primary=#0E0F0C、content-secondary=#454745；Inter 与 Wise Sans 都存在。
- 问题与处理：“酸绿不可作为大背景”不是官方通用约束：官网 CSS 有 .background--light{background-color:var(--color-bright-green)}。应写成该示例的用色比例建议。line #D5DDD0 未匹配，仍需来源。
- 本地按钮文字对比度：**9.452:1，通过普通文字 AA**。
- 官方来源：[wise.com](https://wise.com)。

### 16. PostHog — 部分确认，地色和角色需补证

- 代码：[systems.js:636](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L636)。当前 bg `#EEEFE9`；accent `#F7A501`；on `#23251D`。
- 已确认/检查：官网 CSS 可确认 #EEEFE9（tan）、#23251D、#4D4F46、#F7A501，字体 IBM Plex Sans Variable。
- 问题与处理：tan 出现不等于所有页面 ground 都是它；该站存在更多明暗层级、桌面式窗口与控件样式。line #DCDFD2 未匹配，6px/8px 圆角只能代表所选示例，不能概括全站。
- 本地按钮文字对比度：**7.636:1，通过普通文字 AA**。
- 官方来源：[posthog.com](https://posthog.com)。

### 17. Resend — 主要方向确认，角色仍需补证

- 代码：[systems.js:678](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L678)。当前 bg `#000000`；accent `#FCFDFF`；on `#000000`。
- 已确认/检查：官网 h1 直接使用 font-domaine；CSS 同时声明 domaine、aBCFavorit、inter、commitMono。黑底/衬线标题方向正确。
- 问题与处理：ABC Favorit 不能等同于所有正文，官网默认 sans 映射还包含 Inter。#141418、#FCFDFF 未在所取样式中匹配；12px 按钮和固定边框透明度需对应元素。Fraunces 是替代品，不是已导出的 Domaine。
- 本地按钮文字对比度：**20.633:1，通过普通文字 AA**。
- 官方来源：[resend.com](https://resend.com)。

### 18. Slack — 字体与精确色板需更新

- 代码：[systems.js:720](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L720)。当前 bg `#F4EDE4`；accent `#4A154B`；on `#FFFFFF`。
- 已确认/检查：当期营销 CSS 明确 --font-family-heading:Salesforce-Avant-Garde，--font-family-body:Salesforce-Sans；#F4EDE4 和 #F9F0FF 仍有页面样式用途。
- 问题与处理：face=Slack sans 过于笼统且不代表当期首页字体。#4A154B 和 #ECB22E 在这次取得的首页及 CSS 未匹配；这不能否认历史品牌色，但不能当作当期主按钮/强调色的认证。
- 本地按钮文字对比度：**14.000:1，通过普通文字 AA**。
- 官方来源：[slack.com](https://slack.com)。

### 19. Cursor — 颜色角色明确错误

- 代码：[systems.js:762](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L762)。当前 bg `#F7F7F4`；accent `#F54E00`；on `#FFFFFF`。
- 已确认/检查：官网确认 --color-theme-bg:#F7F7F4、--color-theme-fg:#26251E、--color-theme-accent:#F54E00；CursorGothic、h1 400 字重也确认。
- 问题与处理：浏览器实测 Download for macOS 主按钮：底 #26251E、字 #F7F7F4、胶囊。库却使用橙色底/白字和 8px 圆角，前者仅 3.516:1。应拆 brand-accent 与 action-primary，而不是直接改掉品牌橙色。
- 本地按钮文字对比度：**3.516:1，不通过普通文字 AA**。
- 官方来源：[cursor.com/](https://cursor.com/)；[cursor.com/en-US/brand](https://cursor.com/en-US/brand)。

### 20. Pinterest — 核心红与字体确认，圆角需分角色

- 代码：[systems.js:804](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L804)。当前 bg `#FBFBF9`；accent `#E60023`；on `#FFFFFF`。
- 已确认/检查：当期源站内嵌样式包含 #E60023、#FBFBF9、#262622、#E5E5E0 和 Pin Sans 的 @font-face。
- 问题与处理：这些存在性证据不足以证明全部角色；32px 只能作为某类图片容器样本，不能统一代表所有 Card。完整 Gestalt 还有语义色、状态、文字层级；当前六色色板不等于 Gestalt。
- 本地按钮文字对比度：**4.785:1，通过普通文字 AA**。
- 官方来源：[www.pinterest.com](https://www.pinterest.com)。

### 21. The Verge — 浅色模式声明错误

- 代码：[systems.js:846](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L846)。当前 bg `#131313`；accent `#3CFFD0`；on `#000000`。
- 已确认/检查：当期首页导航明确提供 Light / System / Dark。CSS 资源确认 ManukaCondensed_Black 和 PolySans 系列。
- 问题与处理：原则“There is no light mode”错误。#131313、#3CFFD0、#5200FF 有来源，但应限定为深色变体并补浅色 token，不能用这一套覆盖整个站。
- 本地按钮文字对比度：**16.407:1，通过普通文字 AA**。
- 官方来源：[www.theverge.com](https://www.theverge.com)。

### 22. SpaceX — 字体方向确认；色板内部错误

- 代码：[systems.js:889](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L889)。当前 bg `#000000`；accent `#FFFFFF`；on `#000000`。
- 已确认/检查：官网 CSS 声明 D-DIN、D-DIN-Bold、D-DIN-PRO，并还有 Roboto Mono。黑白大图方向可保留。
- 问题与处理：运行 muted=#A8A8B0、line=#3A3A3F；色板却为 Muted=#5A5A5F、Line=#E0E0E8。line #3A3A3F 本次没有直接来源；“全站没有卡片”也不能由首页视觉推出。
- 本地按钮文字对比度：**21.000:1，通过普通文字 AA**。
- 官方来源：[www.spacex.com](https://www.spacex.com)。

### 23. Zapier — 按钮对比度与字体需修正

- 代码：[systems.js:932](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L932)。当前 bg `#FFFEFB`；accent `#FF4F00`；on `#FFFFFF`。
- 已确认/检查：官网 CSS 确认 #FFFEFB、#F8F4F0、#201515、#605D52、#FF4F00 的存在及部分具体角色；字体声明 Inter、DegularDisplay、Serrif。
- 问题与处理：白字配 #FF4F00 仅 3.296:1；不能默认把品牌橙当所有实心按钮色。Zapier sans 不是足够准确的当前字体记录；line #E6DFD6 未匹配，统一 pill 仍需具体元素证据。
- 本地按钮文字对比度：**3.296:1，不通过普通文字 AA**。
- 官方来源：[zapier.com](https://zapier.com)。

### 24. Mistral — 对比度不通过；精确样式待补

- 代码：[systems.js:974](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L974)。当前 bg `#FFF8E0`；accent `#FA520F`；on `#FFFFFF`。
- 已确认/检查：官方 brand 页面确认像素猫标志、渐变/单色版本及像素插画构成视觉系统。
- 问题与处理：白字配 #FA520F 仅 3.345:1。首页文本可读，但两次源站 CSS 获取超时，不能认证 Near-serif、500 字重、999px 按钮和所列具体色值。应补实际页面样式证据；官方标志规范不能代替 UI token。
- 本地按钮文字对比度：**3.345:1，不通过普通文字 AA**。
- 官方来源：[mistral.ai/brand/](https://mistral.ai/brand/)；[mistral.ai/](https://mistral.ai/)。

### 25. Miro — 部分确认，粉彩值需补证

- 代码：[systems.js:1016](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1016)。当前 bg `#FFFFFF`；accent `#1C1C1E`；on `#FFFFFF`。
- 已确认/检查：官网确认 Roobert PRO 家族，primary/black=#1C1C1E；#FFD02F 至少出现在边框工具类中，其作为品牌主黄的语义角色仍需单独取样。
- 问题与处理：#FFF4C4、#FF9999、#0FBCB0 作为这套具体色板缺乏本次来源；颜色存在不代表同一层级。不同组件有不同圆角 token，16px 仅应记录为所选 card 的样本。
- 本地按钮文字对比度：**17.015:1，通过普通文字 AA**。
- 官方来源：[miro.com](https://miro.com)。

### 26. Sentry — 多项核心色确认，主操作仍需补证

- 代码：[systems.js:1058](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1058)。当前 bg `#150F23`；accent `#C2EF4E`；on `#150F23`。
- 已确认/检查：官网确认 #150F23、rich-black=#1F1633、lt-pink=#FA7FAA、dk-violet=#362D59、blurple=#6A5FC1；字体有 Rubik 和 Dammit Sans。
- 问题与处理：#C2EF4E 在源站出现，但其作为全站唯一主操作色的角色尚未确认；不可仅靠字面匹配认证。展示字体写 Sentry display 太笼统，建议写实际字体名，并与正文 Rubik 分开。
- 本地按钮文字对比度：**14.007:1，通过普通文字 AA**。
- 官方来源：[sentry.io](https://sentry.io)。

### 27. Lovable — 待核实

- 代码：[systems.js:1100](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1100)。当前 bg `#F7F4ED`；accent `#1C1C1C`；on `#FCFBF8`。
- 已确认/检查：本地纸色/深灰的对比度充足；palette 与字段没有出现 Nike 式的同名冲突。
- 问题与处理：HTTP 403，浏览器也停在安全验证。Camera Plain、#F7F4ED、#ECEAE4 以及“只有 charcoal 不同透明度”均未取得可验证的当前来源；只能保留为作者风格研究，不能写成已确认规范。
- 本地按钮文字对比度：**16.469:1，通过普通文字 AA**。
- 官方来源：[lovable.dev](https://lovable.dev)。

### 28. Shopify — 字体和色板需修正

- 代码：[systems.js:1142](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1142)。当前 bg `#000000`；accent `#FFFFFF`；on `#000000`。
- 已确认/检查：当期官网 CSS 声明 Shopify-Inter；黑底营销版式与 #C1FBD4 存在性可确认。
- 问题与处理：face=Neue Haas Grotesk 不符合本次首页字体声明。运行 line=rgba(255,255,255,.2)，色板却是 #E4E4E7；应拆深浅模式。营销官网不能代替商家后台/checkout 的设计系统。
- 本地按钮文字对比度：**21.000:1，通过普通文字 AA**。
- 官方来源：[www.shopify.com](https://www.shopify.com)。

### 29. A24 — 字体应具体化；色值待重采

- 代码：[systems.js:1184](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1184)。当前 bg `#0E0E0E`；accent `#F4F1EA`；on `#0E0E0E`。
- 已确认/检查：浏览器 h1 使用 neueMontreal，实测 weight=485；源站 CSS 还有 neueMontrealMono。
- 问题与处理：Humanist sans 太笼统；库的六个色板字面值均未在此次取到的样式中匹配。源站暖中性色包含 #0E0E0D、#FCFBFA、#F2F0ED 等及主题映射，需按具体页面层级重采，不能将 #0E0E0E / #F4F1EA 直接认证。
- 本地按钮文字对比度：**17.114:1，通过普通文字 AA**。
- 官方来源：[a24films.com](https://a24films.com)。

### 30. Teenage Engineering — 字体及颜色需修正

- 代码：[systems.js:1226](https://github.com/fresh-hippo-liu/design-library/blob/3b33ccd1effa8e3bd50b4071fb21d5a143a28450/systems.js#L1226)。当前 bg `#FFFFFF`；accent `#111111`；on `#FFFFFF`。
- 已确认/检查：官网 token 声明 --te-20:"te-20","Unicode",sans-serif、--te-40:"te-40","Unicode",sans-serif；--te-white:#F5F5F5、--te-black:#0F0E12、--te-orange:#F05A24。
- 问题与处理：“全站 monospace / IBM Plex Mono”不是当前官网的准确记录。库里的白 #FFFFFF、黑 #111111、橙 #FF5A1F 与以上品牌 token 不同；若研究某个历史产品页，应附该页和版本，不应泛指全站。
- 本地按钮文字对比度：**18.883:1，通过普通文字 AA**。
- 官方来源：[teenage.engineering](https://teenage.engineering)。

## 建议的数据修订方式

保留原有 HEX 来源值；不为“看起来更像系统”而机械转换或调色。将官方来源、观察所得、开源替代和作者推荐分开记录。例如每个字段或 token 可附 sourceUrl、sourceSelector/CSS variable、checkedAt、theme、pageScope、evidenceType；字体拆 actual/preview 与 display/body/control；颜色拆 brand/action/text/surface/status。

色板从运行 token 引用生成；导出与预览共用同一变量映射；dark/light 各自给出完整的角色映射。对“全部”“唯一”“没有”“必须”的原则逐条补来源或改为本示例的建议。涉及品牌当前版本的断言，以当期具体页面与官方规范为准。

机器可读逐项结果与 150 组对比度在 [audit/design-system-audit.json](audit/design-system-audit.json)。其中 retrievedStyleUrls 只是本次取到的部分样式清单，不是官网全部资产清单；额外的 Linear 样式、Slack 重试及浏览器观察已反映在逐项文字结论中。
