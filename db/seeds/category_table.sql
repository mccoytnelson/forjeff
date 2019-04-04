create table category
(
category_id serial primary key,
category varchar(20),
category_description varchar,
topic_note_id int 
)

insert into category 
(category, category_description)
values
('react', 'react description'),
('javascript', 'javascript description'), ('html', 'html description')

