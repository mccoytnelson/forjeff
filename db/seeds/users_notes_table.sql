create table users_notes
(
user_notes_id serial primary key,
user_id int,
notes varchar(500)
)