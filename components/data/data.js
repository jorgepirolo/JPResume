const data = {
  name: 'Jorge Luis Pirolo Machado',
  address: 'Sant Joan Despí, Barcelona, ES',
  email: 'jorgepirolo@outlook.com',
  avatar:
    'https://media.licdn.com/dms/image/D5603AQGt5Jbyqa1Q_A/profile-displayphoto-shrink_400_400/0/1699986502343?e=1717027200&v=beta&t=UcShlh6PeHgdEYs4AtLoPIZ5vHvFGujXNx35HcfbEio',
  aboutMe:
    "I'm an engineer based in Barcelona with expertise in designing technological solutions and optimizing processes. Holding a Master's in Supply Chain Management & Technology, deep knowledge in Microsoft Excel, Power BI, Google Looker Studio, MySQL, JIRA, HTML5, and JavaScript. Currently, as a Process Manager at Randstad, I lead cost-saving programs, design demand plans, and manage teams across diverse sectors. Proficient in creating customized KPIs through Power BI, I bring analytical strength to projects. Previously, as Process Engineer at Grupo Alonso, I oversaw daily operations, managed teams, organized infrastructure maintenance and created balanced scorecards for multiple companies. Beyond my professional journey, I've contributed to social impact as a Training Facilitator at COMPUBUS, addressing critical social issues. With a published thesis on SME processes, I showcase a dynamic profile, combining a strong skill set, leadership experience, and a commitment to impactful contributions.",

  education: [
    {
      degree: 'Diploma in Strategic Marketing',
      university: 'UCAB - Universidad Católica Andrés Bello',
      universityLogo:
        'https://pbs.twimg.com/profile_images/1159188851736436738/i9W7A4Mb_400x400.jpg',
      graduationYear: 2017,
      relevantInfo: ''
    },
    {
      degree: 'Industrial Engineer',
      university: 'UCAB - Universidad Católica Andrés Bello',
      universityLogo:
        'https://pbs.twimg.com/profile_images/1159188851736436738/i9W7A4Mb_400x400.jpg',
      graduationYear: 2017,
      relevantInfo:
        'https://revistasenlinea.saber.ucab.edu.ve/index.php/tekhne/article/download/3497/3006/11134'
    },
    {
      degree: 'Master in Supply Chain Management & Technology',
      university: 'La Salle Barcelona',
      universityLogo: 'https://i.ytimg.com/vi/itGaKvniycE/maxresdefault.jpg',
      graduationYear: 2022,
      relevantInfo: ''
    },
    {
      degree: 'Full Stack Developer',
      university: 'Rock the Code by ThePower',
      universityLogo:
        'https://framerusercontent.com/images/zJBgnto0UuieHjFzX0KB4xPLrLk.png',
      graduationYear: 2024,
      relevantInfo: ''
    }
  ],
  workExperience: [
    {
      position: 'University Thesis Researcher in Industrial Engineering',
      company: 'UCAB - Universidad Católica Andrés Bello',
      companyLogo:
        'https://pbs.twimg.com/profile_images/1159188851736436738/i9W7A4Mb_400x400.jpg',
      startDate: '2016',
      endDate: '2017',
      description:
        'The School of Industrial Engineering at Universidad Católica Andrés Bello in collaboration with the service company FREYM, C.A. Design of a Small and Medium Enterprises (SMEs) process diagnostic methodology. Contribution to the School of Industrial Engineering at Universidad Católica Andrés Bello through the design of a process diagnostic methodology for the entry into the consulting market for companies. Ensuring the optimal operation of SMEs to identify potential areas for improvement and analyze issues hindering the proper functioning of the system. Assisting in decision-making aimed at eliminating activities that generate extra costs and optimizing those that add value, meeting customer needs.'
    },
    {
      position: 'Quality and Warehouse Supervisor',
      company: 'Spalato S.A.',
      companyLogo:
        'https://media.licdn.com/dms/image/D4D0BAQGg3sUyk0BjEQ/company-logo_200_200/0/1694128252334/spalato_s_a__logo?e=2147483647&v=beta&t=P6OO0c4PShEr-RKHGz3QKeHzFQXmcvg5WIiZG604bng',
      startDate: '2017',
      endDate: '2018',
      description:
        'Developed quality parameters aligned with company standards and oversaw their implementation. Implemented a part labeling system and location-tracking software. Designed route sheets for distributors and installers. Strategized production planning according to demand and delivery schedules- Developed quality parameters aligned with company standards and oversaw their implementation - Implemented a part labeling system and location-tracking software - Designed route sheets for distributors and installers - Strategized production planning according to demand and delivery schedules'
    },
    {
      position: 'Process Engineer',
      company: 'Grupo Alonso',
      companyLogo:
        'https://grupo-alonso.com/wp-content/uploads/2022/01/Recurso-1.png',
      startDate: '2019',
      endDate: '2022',
      description:
        'Creation of balanced scorecards for 4 companies within the group (activity and process measurement systems). Selection of KPIs for control, monitoring, and presentation in dashboards. Presentation of improvement proposals. Ongoing communication with department heads for performance control. Final decision-making for the daily operations of national and international train services. Dealing with suppliers, approval, and supervision of payments. Management of a team of 35 workers to meet service demand. In charge of organizing the maintenance of the infrastructure of the terminal with 10 railway tracks. Organization of the mechanical workshop, consisting of 6 workers, to handle 5 gantry cranes and 3 mobile cranes'
    },
    {
      position: 'Process Manager',
      company: 'Randstad',
      companyLogo:
        'https://multimedia.infojobs.net/api/v1/tenants/c7e2b9c1-8480-43b0-ad9e-000c17aa2cbb/domains/718302b6-5343-43d3-a8a3-829dc3da0893/buckets/6f3ab1cc-5920-4f4e-b131-46a4587a0e1f/images/c4/c4080efa-d2d4-4072-b723-bd4fa8d1be2a?jwt=eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTU0MTQ4NjQsInJxcyI6IkdFVFxcL3RlbmFudHMvYzdlMmI5YzEtODQ4MC00M2IwLWFkOWUtMDAwYzE3YWEyY2JiL2RvbWFpbnMvNzE4MzAyYjYtNTM0My00M2QzLWE4YTMtODI5ZGMzZGEwODkzL2J1Y2tldHMvNmYzYWIxY2MtNTkyMC00ZjRlLWIxMzEtNDZhNDU4N2EwZTFmL2ltYWdlcy9jNC9jNDA4MGVmYS1kMmQ0LTQwNzItYjcyMy1iZDRmYThkMWJlMmEiLCJtZXRhZGF0YSI6eyJydWxlIjp7InZlcnNpb24iOiIyMDE2LTEwIiwiYWN0aW9ucyI6W119fX0.DXcXA-wkmedtjpkrcij0UgAPOKsFWFhrFJg1iH4IvNzPizwc43smHRTGI7YbYSm41B1CSIWbsm0Fv34H8dflJQNQV6A5belhkvHfKMGMAFy-e2l6TsYuyNMxZ6cATlZR9ZxvA56WtBpC6bXM-AjAK6B0vY7axkSlXS8EbxPSnqGyHlpz_MP2Ix6BEdZRnb6sE3tj5vwtuhiaEPuLijtX9mmvqDfzWr1BEKkWMg9xkK6YYlsHJHo4Ybz0QOilUs-vuSNZFqjv7D7NgqlBVu9v0FcUAhUgVaPreNFazaAI4sigBxBRg6D98I4aUUOqaYsYTsVoTFCLrMD1_ve9bMLtsg&AccessKeyId=d724d9a53d95a810',
      startDate: '2022',
      endDate: 'Present',
      description:
        'Managing a client portfolio across various sectors such as food, chemicals, pharmaceuticals, logistics, and manufacturing. Creation of cost-saving programs through analytically based proposals reaching up to a 5% annual billing savings. Design and planning of demand to achieve cost reduction. Leadership of customized projects for the client, defining targets, action plans and driving progress. Team management for accomplish results based on the annual budget. Identify opportunities and addressing performance gaps strategically. Design, monitoring, and presentation of customized KPIs for each client through Power BI dashboards. Evaluate and test new business opportunities, supporting the vision of an exceptional digitally enabled customer experience'
    }
  ],
  skills: [
    'Engineering',
    'Process Improvement',
    'Supply Chain Management',
    'Business Intelligence',
    'Strategy',
    'Planification',
    'Microsoft Excel',
    'Power BI',
    'Google Looker Studio',
    'MySQL',
    'JIRA',
    'HTML5',
    'CSS3',
    'JavaScript'
  ],
  projects: [
    {
      title: 'PC Componentes by Jorge',
      description:
        'Project in which I have put into practice my skills in information architecture and layout with HTML and CSS. It is a replica of the main sections of the PC Componentes website.',
      link: 'https://extraordinary-chaja-8c91a7.netlify.app/',
      preview:
        'https://images.unsplash.com/photo-1676315636785-9c3017d7694a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: '(JP)interest',
      description:
        'Replica of Pinterest with a personal rebranding. I put my JavaScript skills into practice by creating objects through the DOM, organizing them into components within the project, and also querying an external API for the photos requested by the user through the input.',
      link: 'https://jp-interest.netlify.app',
      preview:
        'https://images.unsplash.com/photo-1636044594149-6e2f289c3868?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
}

export default data
