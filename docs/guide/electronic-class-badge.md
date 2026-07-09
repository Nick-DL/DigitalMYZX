---
title: 电子班牌
---

<h1 class="chapter-header">
  <span class="chapter-header-num">五</span>
  <span class="chapter-header-title">电子班牌<br><span style="font-size:24px; font-weight: 600; letter-spacing: 0.05em;">请假系统</span></span>
  <span class="chapter-header-en">Electronic Class Badge</span>
</h1>

电子班牌是同学们除希沃外能接触到的最多的设备。从其数量规模、软硬件功能来看，其可玩性非常高。

## 请假系统

或许更准确的名字是"考勤系统"，由"青岛通软网络科技有限公司"搭建并维护。

硬件上，包含各教室外的"电子班牌"、各寝室大厅的寝室考勤机，和校门口的校门考勤机（其中包括绵中山庄的一台常年在 WinRE 界面的未配置功能的）。

软件上，三种硬件设备运行的主程序架构一致，但组件上略有差异；此外有微信服务渠道（供家长批假）、APP（供教师、宿管使用）及后端服务器（`10.37.2.21:8087` `10.37.2.22:8087`）及其对应外网 IP 地址可访问、登录。

::: info 新成员
目前通惠楼 105 门前安装了一台科大讯飞的新款电子班牌，它基于 Android 系统，目前已经可以识别校园卡，展示每个人的个人中心了。

或许某一天，班牌系统将迎来大换血，彼时这些教程都将失效。
:::

## 主程序

电子班牌及考勤机的主程序用 C# 语言编写，请假页面是网页。主程序中主体一致，三而种机器的程序差别主要在 Addons 目录下的插件中。

核心的硬件为屏幕下方的 NFC 读卡器。在学生刷卡时读卡器识别 NFC 卡号后，主程序记录对应学生的相关信息。同时，电子班牌弹出个人中心和请假入口，其余两种设备显示、上报学生的考勤信息。

该程序极为臃肿，代码据说相当复杂，程序目录下的日志也经常从 2018 年刚装上那会积攒到现在。

## 电子班牌运行机制

正常情况下，电子班牌在 06:30（高三）/07:15（高一、高二）开机，开机后启动 `LockMouse.exe` ，关任务栏，约一分钟后主程序启动完毕。

一直到晚上 21:50 执行任务计划程序中的命令关机，随后电源处下指令关机。周末一般会处于关机状态。

一些经修改的电子班牌会晚于一般时间关机。

> [!important] INFO
> 关于电子班牌网络配置、所在网段的连接阻断机制等，已在 [校园网](/guide/campus-local-area-network#不完全的-ap-隔离) 章节中介绍过。

## 基础玩法

通过在 AppBar 上左右滑动五个来回 (正确的操作似乎是上滑一次即可)，可打开配置面板。在数字键盘上输入 1-8 任意数字可切换主题。

::: info
输入某串 8 位数 `[CONDENSED]` 可打开调试菜单。这串数字可在逆向相关软件后找到。
:::
![GS Console](/img/GS.Console.png)
<p class="img-description">△ GS Console</p>

## 神秘玩法

::: danger
李波（化学）马上到你教室门口！

![高一(1)班屏幕截图(注：图片是合成的，但原跑马灯通知真实存在)](/img/FakeLiboChem.png)

<p class="img-description">△ 高一(1)班屏幕截图  (注：图片是合成的，但原跑马灯通知真实存在过)</p>
:::



### 解除 LockMouse.exe 桎梏

LockMouse.exe 的功能显而易见，在程序属性里有"防火防盗防熊孩子"的描述。

它运行时在屏幕上显示透明全屏窗口，仅操作电子班牌程序的触控/鼠标操作可被穿透。但其功能对于 Windows 8+ 的 UWP 界面无效。

![LockMouse](/img/LockMouse.png)
<p class="img-description">△ LockMouse.exe 属性</p>

**关闭 LockMouse.exe**：可用以下方法：
- [撬锁](#撬锁)后接上键盘；
- 登录[远程桌面](#远程桌面)；
- 用特殊手法，在 Tablet PC 输入面板快捷浮窗存在的情况下，在其周围反复长按数次，最后打开 Tablet PC 软键盘；再按 Alt+Tab 切换到无名的窗口上，按 Alt+F4 关闭该窗口。

**禁止 LockMouse.exe 开机启动**：使用命令：

```cmd
taskkill /im LockMouse.exe /f
taskkill /im explorer.exe /f
explorer
```

可添加至任务计划程序，或写到 `.cmd` 文件里，放到开始菜单"启动"/"startup"文件夹下（没有需新建）。

### 撬锁

使用带一侧凸起的纸棍或半片指甲刀可打开机身右侧接口 / 开关面板的盖子。随后可接 USB 设备。

### 远程桌面

连接远程桌面需在电子班牌间操作，当然，外部设备可连接设置自动 IP 的电子班牌。

账户为 `Administrator`，密码一般为 `[CONDENSED]` 或 `[CONDENSED]`。

::: info
公开展示登录密码具有一定风险。可在电子班牌上自行 dump 内存并提取密码明文。
:::

电子班牌配置的手动 IP 顺序大致为：远志楼→铭志楼→远翔楼→通慧楼→六艺楼→宿舍→校门。

各活动教室（按几年前时教室的排布）、办公室、阶梯教室、机房等的 IP 在约 150 至 240 间穿插。

信息中心有 IP 表。

<Linkcard 
  url="/resources/ip-table-smartboard" 
  title="资源：电子班牌 IP 表" 
  description="查看各个电子班牌与 IP 地址的对应表" 
  logo="/icons/share.svg"
/>

### 图片 CDN

打开 `10.37.2.21:8080` 可以看到 2018 年以来电子班牌系统使用的所有图片素材，如头像、班级展示墙图片、宣传海报图片等。未登录不能修改，只能上传/下载。

![HFS](/img/HFS.png)
<p class="img-description">△ HFS</p>

::: info
这个 HFS 只能说是千疮百孔，对于这里实装的版本，网上已有公开报道的高危漏洞，比如 CVE-2024-23692。
:::

### 圣遗物

- **IPConfig**：学长装在通慧楼一部分电子班牌上的小插件，会在左上角显示 IP 地址后两位。

![IPConfig](/img/IPconfig.png)
<p class="img-description">△ IPConfig</p>

- **Addons中的申必缓存**：在一些电子班牌的主程序 Addons 目录下可见名为"Cirno.ChinaGS.Injection.Temp"的隐藏文件夹，根目录下可见被替换过的"GS.Unitive.Framework.dll" "AutoUpdate"文件及它们的备份。<br>参见 [超高阶玩法](#超高阶玩法)

![Injection](/img/injection.png)
<p class="img-description">△ 神秘的缓存文件夹</p>

- **FileCenter**：用电子班牌搭建的静态文件站，内含常用网站导航。

![FC](/img/FileCenter.png)
<p class="img-description">△ FileCenter</p>

## 超高阶玩法

绵中曾有一位学长对电子班牌主程序的代码注入、机制，以及后端服务器等做了深入研究，有兴趣的可以打开他的主页。

[网站](https://konata233.github.io/) | [GitHub 主页](https://github.com/myhsp)

> [!IMPORTANT]
> 截至发稿，本站还未与该大佬取得联系（缺联系方式）。看到大佬的研究成果被时间湮没，而编者没有能力进行相关研究，感到十分遗憾。
> 
> 故在此记录，希望有识之士能加以研究，或参与完善。

::: details 参考
- [交互式智慧教室信息终端](http://www.chinags.com.cn/products_list.aspx?category_id=214)
- [CVE-2024-23692](https://nvd.nist.gov/vuln/detail/CVE-2024-23692)
:::