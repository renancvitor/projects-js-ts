-- As mais importantes funções de agregração do SQL

SELECT 
	first_name,
	MAX(salary) AS max_salary,
	MIN(salary) AS min_salary,
	AVG(salary) AS avg_salary,
	SUM(salary) AS sum_salary,
	COUNT(salary) AS count_salary
FROM
	users
GROUP BY
	first_name
ORDER BY
	max_salary;