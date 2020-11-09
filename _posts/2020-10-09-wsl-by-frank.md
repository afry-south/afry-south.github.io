---
title: "HowTo: Dev using VSCode, Git, SSH in WSL1"
categories:
  - Terminal
tags:
  - wsl
  - windows
  - linux
  - ssh
  - vscode
---

# HowTo: Dev using VSCode, Git, SSH in WSL1
> @author: Frank Camara  
> @date: October 2020
​

Hi! So you are like me, need your Windows environment for working purpose but linux for coding. Well, for quite som time I've been running dual-boot on my machine to accomplish that. But it has been a bit cumbersome since I need to switch my OS environment several times throughout the day. To not begin discussing the era of SSD which has limited the space we have, to run 2 Operating Systems on our computer. Virtual machine you might say...well let's not go there (manage the VM, fix interoperability issues like key-bindings etc.).  
​

Then...**Windows Subsystem for Linux (WSL)** came by and grabbed me for a cup of coffee :-) Yes it is a VM, but handles all system interoperabilities and updates for you.
​

**What is WSL you may ask?**  
As explained on Microsofts homepage:
​
*"The Windows Subsystem for Linux lets developers run a GNU/Linux environment -- including most command-line tools, utilities, and applications -- directly on Windows, unmodified, without the overhead of a traditional virtual machine or dualboot setup."* [Read more about WSL](https://docs.microsoft.com/en-us/windows/wsl/about)
​

Exactly what we need, let's try.
​

## Pre-requisites
- [Git](https://git-scm.com/download/win)
- [VScode](https://code.visualstudio.com/) - Don't forget to add it to the PATH in environment variables.
- [GitHub account](https://github.com/) 
- GitHub repository for code-base (Optional)
​
## Setup WSL
In this article we will set up WSL1 with Ubuntu 2004 LTS distro. There is an updated version of WSL that requires a PC running Windows **Version 1903**  or higher, with  **Build 18362**  or higher. So if you do, I recommend you to try WSL2 instead for better performance and system compliances.


First step is to prepare to install WSL by enable this feature. In powershell (as Admin) type command
​

    PS > dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart


Next, download a linux distro of your choice from the Microsoft Store, ie. Ubuntu 2004 LTS. Open the installed distro (as Admin) and set username and pass.
​

> Note! You can now quit the distro window, we do not need it in the following steps of this guide. **Instead we are using powershell. Open powershell and type `PS > wsl` to switch to the linux environment.**
​

## Setup SSH
Setup SSH as normal in Windows 10 since it has a built-in SSH client that you can use in Windows Terminal. 
In your ~/.ssh folder, type:
​

    PS > ssh-keygen #To generate a new key-pair


Copy the public key
​

    PS > cat .\id_key.pub | clip.exe


Add the pub key to github (Profile -> Settings -> SSH and GPG keys). 
​

> Note: To configure and run ssh-agent on Win10 using OpenSSH (PS as Admin) 
> `PS > Get-Service -Name ssh-agent | Set-Service -StartupType Manual`
> `PS > ssh-agent.exe`
> Suggestion: use Git bash on Windows10 instead to be able to work with SSH as we are used to -> eval $(ssh-agent -s)
​

## Setup VSCode with remote dev ext
I suggest you follow this guide -> [VSCode remote wsl](https://code.visualstudio.com/docs/remote/wsl.)
​

*"The  **Visual Studio Code Remote - WSL**  extension lets you use the  [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/windows/wsl)  as your full-time development environment right from VS Code. You can develop in a Linux-based environment, use Linux-specific toolchains and utilities, and run and debug your Linux-based applications all from the comfort of Windows.*
*The extension runs commands and other extensions directly in WSL so you can edit files located in WSL or the mounted Windows filesystem (for example  `/mnt/c`) without worrying about pathing issues, binary compatibility, or other cross-OS challenges."*
​

**So** this means that from our WSL environment our Windows file system can be accessed through /mnt/c. No need to clone our code into the linux environment. WAT! How great. Just spin up VSCode from the WSL environment standing in the "Windows"-folder where we have our code.
​

	PS > wsl (to start bash in linux environment)
	.
	.
	.
	$ cd /mnt/c/Users/fgc/code/myProj/
	$ code.

We can see it as VSCode treats our WSL as a remote server in which it installs necessary executables to be able to work in the remote server's environment and filesystem.
​

## About that SSH
So we're done right? Now we can just edit files in our codebase and push it to our github repository? Wrong! As a quick solution (there are others) we can simulate the SSH process that we normally should have use if developing in linux. Since we already have our SSH key-pair set up in Windows and added to github we can just copy the files in our .ssh folder to WSL and add the private key to the ssh-agent running on WSL.


	$ cd ~
	$ mkdir .ssh
	$ cp /mnt/c/Users/fgc/.ssh/* ~/.ssh
	
	$ #start the ssh-agent in the background
	$ eval $(ssh-agent -s)
	$ > Agent pid 59566
	
	$ ssh-add ~/.ssh/id_key

Almost done, since we copied the files from Windows file system, linux system have not sufficient permissions to read them so we have to re-write the permissions of the key-pair.
​

```bash
$ sudo chmod 600 id_key (user read/ write perms)
$ sudo chmod 644 id_key.pub (user read/ write, others read perms)
```



## Summing up

So what have we actually done. We have all our development tools installed and created on the Windows side of our system (Git, Powershell, SSH keys, VSCode (extended), our code-base) but set VSCode up to run on our remote server and utilizes our SSH key (again created in Windows) on our linux system to be able to clone/push/pull via SSH from within WSL. How convenient, no duplicate code-bases, no need for a new terminal, we have access to the best of both worlds. 
​

> Final Note: make sure to update your .gitconfig in the codebase or global to use correct line-endings (merge-hell). We are using linux/unix line-ending style (LF) here instead of Windows (CRLF) `$ git config --global core.autocrlf input`. This command make sure to always commit files using LF file endings.