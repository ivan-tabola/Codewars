function match(candidate, job) {
    if(!candidate.minSalary || !job.maxSalary)
      throw error // Инструкция throw позволяет генерировать исключения, определяемые пользователем.
    return candidate.minSalary * .9 <= job.maxSalary
  }