# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder "./", "/home/vagrant/proj"

  config.vm.provision "shell", inline: <<-SHELL
    apt-get install -y build-essential
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
    #npm install -g gulp@latest
  SHELL
end
