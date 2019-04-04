select * from subtopic
inner join topic on subtopic.topic_id = topic.topic_id
inner join category on topic.category_id = category.category_id
where category = $1