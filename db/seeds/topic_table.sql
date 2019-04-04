create table topic
(
topic_id serial primary key,
topic varchar(20),
topic_description varchar(500),
syntax varchar(500),
category_id int
)


 /** 
* ! Javascript
*/

insert into topic
(topic, topic_description, syntax, category_id)
values('object', 'The Object constructor creates an object wrapper.', '// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])',2);

insert into topic
(topic, topic_description, syntax, category_id)
values('array', 'The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.', '[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)',2);

insert into topic
(topic, topic_description, syntax, category_id)
values('string', 'The String global object is a constructor for strings or a sequence of characters.', '"use double quotes or single quotes to declare a string"',2)

 /** 
* ! React
*/

insert into topic
(topic, topic_description, category_id)
values('Main Concepts', 'These are fundamental concepts that will allow us to build basic and useful applications', 1)

insert into topic
(topic, topic_description, category_id)
values('Lifecycle methods', 'The main one you will use is componentDidMount, however componentDidUpdate is also very useful',1)

 /** 
* ! HTML
*/

insert into topic
(topic, category_id)
values('Tags', 3)

insert into topic
(topic, topic_description, category_id)
values('Attibutes', 'HTML attributes are tags that contain additional pieces of info "inside" the tags. Here is an example `<img src="mydog.jpg" alt="A photo of my dog.">`',3)

insert into topic
(topic, topic_description, syntax, category_id)
values('Golden Rules To Remember', '1. The vast majority of tags must be opened (<tag>) and closed (</tag>) with the element information such as a title or text resting between the tags.
2. When using multiple tags, the tags must be closed in the order in which they were opened. For example: <strong><em>This is really important!</em></strong>',3)