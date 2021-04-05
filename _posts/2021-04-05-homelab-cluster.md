---
title: "Homelab - Pi cluster"
categories:
  - Terminal
tags:
  - k8s
  - homelab
  - pi
toc: true
excerpt: "Ever thought about setting up a homelab with Raspberry Pis? If your first thought is why, and why use raspberry pis. Well for me it was simple!"
---


# Homelab – Pi cluster

![image](https://user-images.githubusercontent.com/7490199/113591081-c0f96380-9633-11eb-8344-cbfc322a306a.png)

Ever thought about setting up a homelab with Raspberry Pis? If your first thought is why, and why use raspberry pis. Well for me it was simple! I had a few lying in a drawer and I wanted to learn something new! Plus setting up a Kubernetes cluster using Pis with limited memory and CPU-power with ARM-architecture. Instead of the (a bit) more common X86-architecture was a nice week-end challenge. 
So, were do you start? Well with the Pis, what did I have?
```
2 Raspberry Pi 4B 4GB (64bit ARMv8)
1 Raspberry Pi 3B+ 1GB (32bit ARMv7)
```
## Setting-up the Pis
First, you need to choose a distro for you PIs. I chose Ubuntu Server 20.04 LTS since they are going to run headless. Two of the Pis running the 64-bit version and one running the 32-bit version. [The Raspberry Pi Imager](https://www.raspberrypi.org/blog/raspberry-pi-imager-imaging-utility/) is great for flashing your SD-cards. 

My router is so kind to alert me when something new connects to the network, so retrieving the IPs of the Pis was a breeze. Else use: `sudo nmap -sP <Local network prefix>/24` or `arp -an`.

Update your Pis with `sudo apt-get update` and `sudo apt-get upgrade`. Change your Pis hostname to something fancy like pi1, pi2 and pi3 and add a new sudo user. 
Commands: `sudo adduser <username>` and `sudo usermod -aG sudo <username>`. To check `sudo -l -U <username>`
And reboot your Pi.
I wanted to use my SSH key to login and since I’m running Ubuntu it’s easy to set-up. If you don’t have a SSH key `ls -l ~/.ssh/id_*.pub` run the command: `ssh-keygen -t rsa -b 4096 -C <your@email.address>`.
To copy your key to the Pis: `ssh-copy-id <username>@<pi-ip-address>`. If you want, you can now disable password authentication on your Pis: `/etc/ssh/sshd_config` set, 

```nano
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM no
```
(remember to restart the sshd or reboot)

## Ansible and k3s
Welcome Kubernetes! So, what distribution should you install on a Raspberry Pi and how should you install it? Want to know your options? Here is a link to the official CNCF Cloud Native Interactive Landscape: https://landscape.cncf.io/ 

I went with [K3S](https://k3s.io/) a lightweight Kubernetes distribution built for IoT and edge computing. 
As I stated in the beginning I wanted to learn or at least test something new! Let’s say hello to Ansible! Install Ansible on your personal computer (sudo apt-get install ansible). Ansible is a tool to automate and manage multiple devices/systems, and I find logging in to each Pi repeating the same commands is boring. There is a playbook on K3s github [k3s-ansible](https://github.com/k3s-io/k3s-ansible) Clone the repository and follow the Readme, edit two files `inventory/my-cluster/hosts.ini` and `inventory/my-cluster/group_vars/all.yml`
To run the playbook `ansible-playbook site.yml -i inventory/my-cluster/hosts.ini`
(You might need to add `–ask-become-pass`, or the none secure way `--extra-vars "ansible_sudo_pass=<your-password>"`)
This will take a few minutes and should finish without any errors!

Congratulations!
You are now running a Pi Cluster! To verify that it is up and running check with kubectl

![image](https://user-images.githubusercontent.com/7490199/113591063-bb9c1900-9633-11eb-9885-1d93518974d1.png)

## Next step?
How about monitoring? Well, just go and find a container with what you need and deploy it! Will it work? Hopefully, but probably not since we are running ARM cpus. But I found a [project](https://github.com/carlosedp/cluster-monitoring) built for multi-cpu clusters. 

Just follow the guide for the _Quickstart for k3s_ et voila!

![image](https://user-images.githubusercontent.com/7490199/113591072-be970980-9633-11eb-96a5-7b48051c5604.png)


## Want to manage your cluster with an UI?

I went with [Rancher](https://rancher.com/) in a docker [image](https://hub.docker.com/r/rancher/rancher)

But one of our consultants shared two other projects:

[Kubedoom](https://github.com/storax/kubedoom) - Kill Kubernetes pods by playing Id's DOOM!

[KubeCraftAdmin](https://blog.usejournal.com/minecraft-as-a-k8s-admin-tool-cf16f890de42) The adventurer’s admin tool. Minecraft as a k8s admin tool.
