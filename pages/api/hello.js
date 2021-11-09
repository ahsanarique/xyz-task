// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

/* Endpoints: 
Get: 
1. Job List - {id, title, description}
2. Job list based on types
3. Single job details based on id - {responsibilities, requirements, recruitment process}

Post:
1. Application Data  */
