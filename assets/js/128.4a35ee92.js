(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{631:function(r,e,t){"use strict";t.r(e);var n=t(11),o=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"虚拟化容器"}},[r._v("虚拟化容器")]),r._v(" "),t("p",[r._v("容器是云计算、微服务等诸多软件业界核心技术的共同基石，容器的首要目标是让软件分发部署过程从传统的发布安装包、靠人工部署转变为直接发布已经部署好的、包含整套运行环境的虚拟化镜像。在容器技术成熟之前，主流的软件部署过程是由系统管理员编译或下载好二进制安装包，根据软件的部署说明文档准备好正确的操作系统、第三方库、配置文件、资源权限等各种前置依赖以后，才能将程序正确地运行起来。"),t("a",{attrs:{href:"http://chadfowler.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Chad Fowler"),t("OutboundLink")],1),r._v("在提出“不可变基础设施”这个概念的文章《"),t("a",{attrs:{href:"http://chadfowler.com/2013/06/23/immutable-deployments.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("Trash Your Servers and Burn Your Code"),t("OutboundLink")],1),r._v("》里，开篇就直接吐槽：要把一个不知道打过多少个升级补丁，不知道经历了多少任管理员的系统迁移到其他机器上，毫无疑问会是一场灾难。")]),r._v(" "),t("p",[r._v("让软件能够在任何环境、任何物理机器上达到“一次编译，到处运行”曾是Java早年的宣传口号，这并不是一个简单的目标，不设前提的“到处运行”，仅靠Java语言和Java虚拟机是不可能达成的，因为一个计算机软件要能够正确运行，需要有以下三方面的兼容性来共同保障（这里仅讨论软件兼容性，不去涉及“如果没有摄像头就无法运行照相程序”这类问题）：")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("ISA兼容")]),r._v("：目标机器指令集兼容性，譬如ARM架构的计算机无法直接运行面向x86架构编译的程序。")]),r._v(" "),t("li",[t("strong",[r._v("ABI兼容")]),r._v("：目标系统或者依赖库的二进制兼容性，譬如Windows系统环境中无法直接运行Linux的程序，又譬如DirectX 12的游戏无法运行在DirectX 9之上。")]),r._v(" "),t("li",[t("strong",[r._v("环境兼容")]),r._v("：目标环境的兼容性，譬如没有正确设置的配置文件、环境变量、注册中心、数据库地址、文件系统的权限等等，任何一个环境因素出现错误，都会让你的程序无法正常运行。")])]),r._v(" "),t("div",{staticClass:"quote"},[t("p",{staticClass:"title"},[r._v("额外知识：ISA与ABI")]),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Instruction_set_architecture",target:"_blank",rel:"noopener noreferrer"}},[r._v("指令集架构"),t("OutboundLink")],1),r._v("（Instruction Set Architecture，ISA）是计算机体系结构中与程序设计有关的部分，包含了基本数据类型，指令集，寄存器，寻址模式，存储体系，中断，异常处理以及外部I/O。指令集架构包含一系列的Opcode操作码（即通常所说的机器语言），以及由特定处理器执行的基本命令。")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Application_binary_interface",target:"_blank",rel:"noopener noreferrer"}},[r._v("应用二进制接口"),t("OutboundLink")],1),r._v("（Application Binary Interface，ABI）是应用程序与操作系统之间或其他依赖库之间的低级接口。ABI涵盖了各种底层细节，如数据类型的宽度大小、对象的布局、接口调用约定等等。ABI不同于应用程序接口（Application Programming Interface，API），API定义的是源代码和库之间的接口，因此同样的代码可以在支持这个API的任何系统中编译，而ABI允许编译好的目标代码在使用兼容ABI的系统中无需改动就能直接运行。")])]),t("p",[r._v("笔者把使用仿真（Emulation）以及虚拟化（Virtualization）技术来解决以上三项兼容性问题的方法都统称为虚拟化技术。根据抽象目标与兼容性高低的不同，虚拟化技术又分为下列五类：")]),r._v(" "),t("ul",[t("li",[t("strong",[r._v("指令集虚拟化")]),r._v("（ISA Level Virtualization）。通过软件来模拟不同ISA架构的处理器工作过程，将虚拟机发出的指令转换为符合本机ISA的指令，代表为"),t("a",{attrs:{href:"https://www.qemu.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("QEMU"),t("OutboundLink")],1),r._v("和"),t("a",{attrs:{href:"http://bochs.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Bochs"),t("OutboundLink")],1),r._v("。指令集虚拟化就是仿真，能提供了几乎完全不受局限的兼容性，甚至能做到直接在Web浏览器上运行完整操作系统这种令人惊讶的效果，但由于每条指令都要由软件来转换和模拟，它也是性能损失最大的虚拟化技术。")]),r._v(" "),t("li",[t("strong",[r._v("硬件抽象层虚拟化")]),r._v("（Hardware Abstraction Level Virtualization）。以软件或者直接通过硬件来模拟处理器、芯片组、内存、磁盘控制器、显卡等设备的工作过程。既可以使用纯软件的二进制翻译来模拟虚拟设备，也可以由硬件的"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/X86_virtualization#Intel-VT-d",target:"_blank",rel:"noopener noreferrer"}},[r._v("Intel VT-d"),t("OutboundLink")],1),r._v("、"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/X86_virtualization#AMD_virtualization_(AMD-V)",target:"_blank",rel:"noopener noreferrer"}},[r._v("AMD-Vi"),t("OutboundLink")],1),r._v("这类虚拟化技术，将某个物理设备直通（Passthrough）到虚拟机中使用，代表为"),t("a",{attrs:{href:"https://www.vmware.com/",target:"_blank",rel:"noopener noreferrer"}},[r._v("VMware ESXi"),t("OutboundLink")],1),r._v("和"),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/",target:"_blank",rel:"noopener noreferrer"}},[r._v("Hyper-V"),t("OutboundLink")],1),r._v("。如果没有预设语境，一般人们所说的“虚拟机”就是指这一类虚拟化技术。")]),r._v(" "),t("li",[t("strong",[r._v("操作系统层虚拟化")]),r._v("（OS Level Virtualization）。无论是指令集虚拟化还是硬件抽象层虚拟化，都会运行一套完全真实的操作系统来解决ABI兼容性和环境兼容性问题，虽然ISA兼容性是虚拟出来的，但ABI兼容性和环境兼容性却是真实存在的。而操作系统层虚拟化则不会提供真实的操作系统，而是采用隔离手段，使得不同进程拥有独立的系统资源和资源配额，看起来仿佛是独享了整个操作系统一般，其实系统的内核仍然是被不同进程所共享的。"),t("br"),r._v("操作系统层虚拟化的另一个名字就是本章的主角“容器化”（Containerization），由此可见，容器化仅仅是虚拟化的一个子集，只能提供操作系统内核以上的部分ABI兼容性与完整的环境兼容性。这意味着如果没有其他虚拟化手段的辅助，在Windows系统上是不可能运行Linux的Docker镜像的（现在可以，是因为有其他虚拟机或者WSL2的支持），反之亦然。也同样决定了如果Docker宿主机的内核版本是Linux Kernel 5.6，那无论上面运行的镜像是Ubuntu、RHEL、Fedora、Mint或者任何发行版的镜像，看到的内核一定都是相同的Linux Kernel 5.6。容器化牺牲了一定的隔离性与兼容性，换来的是比前两种虚拟化更高的启动速度、运行性能和更低的执行负担。")]),r._v(" "),t("li",[t("strong",[r._v("运行库虚拟化")]),r._v("（Library Level Virtualization）。与操作系统虚拟化采用隔离手段来模拟系统不同，运行库虚拟化选择使用软件翻译的方法来模拟系统，它以一个独立进程来代替操作系统内核来提供目标软件运行所需的全部能力，这种虚拟化方法获得的ABI兼容性高低，取决于软件是否能足够准确和全面地完成翻译工作，其代表为"),t("a",{attrs:{href:"https://www.winehq.org/",target:"_blank",rel:"noopener noreferrer"}},[r._v("WINE"),t("OutboundLink")],1),r._v("（Wine Is Not an Emulator的缩写，一款在Linux下运行Windows程序的软件）和"),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/about",target:"_blank",rel:"noopener noreferrer"}},[r._v("WSL"),t("OutboundLink")],1),r._v("（特指Windows Subsystem for Linux Version 1）。")]),r._v(" "),t("li",[t("strong",[r._v("语言层虚拟化")]),r._v("（Programming Language Level Virtualization）。由虚拟机将高级语言生成的中间代码转换为目标机器可以直接执行的指令，代表为Java的JVM和.NET的CLR。虽然厂商肯定会提供有不同系统下都相同接口的标准库，但本质上这种虚拟化并不直接解决任何ABI兼容性和环境兼容性问题。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);