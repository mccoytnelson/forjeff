select * from users_notes
inner join users on users_notes_id.id = users.id
where user_id = $1