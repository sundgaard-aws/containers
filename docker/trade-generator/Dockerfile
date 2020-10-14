FROM debian

RUN apt-get update -y
RUN apt-get install curl software-properties-common -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

ENTRYPOINT ["/usr/sbin/node", "-D", "FOREGROUND"]
