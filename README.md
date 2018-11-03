# manzi8

## Description(概要)

チーム manzi8 のリポジトリ

## Requirement(必要条件)

- [Docker](https://www.docker.com/)

1. `brew cask install docker`
2. dockerを起動します
3. `docker ps`でdockerのプロセスを確認することができます。

if you use Linux
 
- mysql-client
 
ex. `sudo apt install mysql-client`


## Usage(使い方)

途中にコンパイル状況が出るけど、気にしないでください。

ネットワーク回線によりますが、3~5分ほどでダウンロードが終わります。

1. `make docker/start`
2. `make composer/install`

### Makefile

このリポジトリはMakefileを用いて開発しています。

Makefileを読めば、やっていることは理解できると思いますが、メモ程度に書いておきます。

`make docker/start`　Dockerコンテナを起動します

`make docker/stop` Dockerコンテナを停止します

`make docker/clean`　Dockerコンテナを削除します

`make web/bash` Nginxコンテナにbashで入ることが出来ます。

`make db/bash` MySQLコンテナにbashで入ることが出来ます。データベースの中身を知りたい際にご利用ください。

`make php/bash` PHPコンテナにbashで入ることが出来ます。bin/cakeコマンドを叩く際にご利用ください。 

`make composer/install` composerでパッケージのインストールをします。
