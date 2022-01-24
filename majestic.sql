create table users
(
    id       int auto_increment
        primary key,
    login    varchar(32) charset utf8  not null,
    password varchar(256) charset utf8 null,
    constraint users_login_uindex
        unique (login)
);

create table posts
(
    id           int auto_increment
        primary key,
    author_login varchar(32) charset utf8            not null,
    text         varchar(1024) charset utf8          null,
    created_at   datetime  default CURRENT_TIMESTAMP null,
    updated_at   timestamp default CURRENT_TIMESTAMP null,
    constraint posts_users_login_fk
        foreign key (author_login) references users (login)
);


