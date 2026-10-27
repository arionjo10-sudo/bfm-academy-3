/* ---------- Data helpers ---------- */
const L=(t,ref,bib,key,pra,rq,act)=>({t,ref,bib,key,pra,rq,act});
const Q=(q,right,w1,w2,w3)=>({q,o:[right,w1,w2,w3]});
const P=(t,b,d,h)=>({t,b,d,h});
const COURSES=[];
const C=o=>COURSES.push(o);

const TRACKS=[
 {id:'V',label:'Class',title:'BFM New Believers Class',short:'BFM New Believers',cred:'BFM New Believers Class Certificate',cls:true,
  desc:'For anyone who has just given their life to Jesus. Learn who you are in Christ, build daily habits with God, stand strong when life gets hard, and find your place in the family.',
  unlock:'Register for the class, then each course unlocks when you finish the one before it.',finish:'Complete all four courses in order.'},
 {id:'N',label:'Class',title:'BFM New Members Class',short:'BFM New Members',cred:'BFM New Members Class Certificate',cls:true,
  desc:'Start here if you are new to BFM. Learn the gospel, what we believe, how to build daily habits, and how to find your place in the church family.',
  unlock:'Register for the class, then each course unlocks when you finish the one before it.',finish:'Complete all five courses in order.'},
 {id:'B',label:'Class',title:'BFM Water Baptism Class',short:'BFM Water Baptism',cred:'BFM Water Baptism Class Certificate',cls:true,
  desc:'Prepare to be baptized. Understand what baptism means, who it is for, and how to share your testimony and walk in new life.',
  unlock:'Register for the class, then each course unlocks when you finish the one before it.',finish:'Complete all three courses in order, then pass the final test. Your pastor will schedule your baptism.'},
 {id:'D',label:'Class',title:'BFM Discipleship Class',short:'BFM Discipleship',cred:'BFM Discipleship Class Certificate',cls:true,
  desc:'Discipleship 101 and 201 in one class. Learn what it means to follow Jesus, then grow deeper in serving, sharing your faith, obeying God, and helping others follow Him.',
  unlock:'Opens by permission from the Academy Director. Request it below. Once approved, each course unlocks when you finish the one before it.',finish:'Complete both courses in order: DSC 101 and DSC 201.'},
 {id:'1',label:'Track 1',title:'Foundations of Leadership and Volunteering',short:'Foundations',cred:'Foundations of Leadership and Volunteering Certificate',
  desc:'Where every student begins. Calling, character, servant leadership, volunteering, and the basics of leading people and teams. It comes with printed volunteer training packets for every volunteer and for each ministry.',
  unlock:'Opens after you finish the four BFM classes (New Believers, New Members, Water Baptism, and Discipleship). Leaders already serving in a position can ask to skip each class and the Academy approves it. Then take the twelve courses in any order. Printed volunteer training packets go with this track, including two general packets for anyone who has not found a ministry yet. They are not courses and there is nothing to complete.',finish:'Complete all twelve courses.'},
 {id:'2',label:'Track 2',title:'Ministry Leadership',short:'Ministry',cred:'Ministry Leader Certificate',
  desc:'Learn how to lead people spiritually in any ministry: prayer, discipleship, shepherding, the Word, evangelism, and a healthy walk with God.',
  unlock:'Unlocks when you complete Track 1. Take the twelve courses in any order.',finish:'Complete all twelve courses.'},
 {id:'3',label:'Track 3',title:'Ministry Specializations',short:'Specializations',cred:'Ministry Specialization Certificate',
  desc:'Serve in the ministry God has called you to. Choose your ministry and complete its manual-based course on vision, structure, people, and care.',
  unlock:'Unlocks when you complete Track 2. Choose the ministry you are called to. Only that ministry opens for you; other ministries need the director’s permission.',finish:'Complete the course for at least one ministry.'},
 {id:'A',label:'Track A',title:'Administrative Church Leadership',short:'Administrative',cred:'Administrative Leadership Certificate',optional:true,
  desc:'Optional, based on interest. For people who want to serve the church in finance and administration.',
  unlock:'Open to everyone, but you need permission from the Academy Director to start. Request it below, then take the fifteen courses in any order.',finish:'Complete all fifteen courses.'},
 {id:'T',label:'Certification',title:'BFM Teacher Certification',short:'Teacher Certification',cred:'BFM Certified Teacher Certificate',optional:true,
  desc:'Optional, for anyone who wants to teach a BFM class: Sunday school, discipleship, water baptism preparation, new believers, or new members. Five courses, a teaching practicum with a mentor, and a final exam.',
  unlock:'Open to everyone, but you need permission from the Academy Director to start. Request it below, then take the five courses in order.',finish:'Complete all five courses, including the teaching practicum and the final exam.'}
];
const SPECS=[
 {k:'youth',n:'Youth',f:'Youth Ministry'},{k:'children',n:'Children’s',f:'Children’s Ministry'},{k:'men',n:'Men’s',f:'Men’s Ministry'},
 {k:'women',n:'Women’s',f:'Women’s Ministry'},{k:'outreach',n:'Outreach',f:'Outreach Ministry'},{k:'media',n:'Media & Communications',f:'Media & Communications Ministry'},
 {k:'cined',n:'Christian Education',f:'Christian Education Ministry'},{k:'dance',n:'Dance',f:'Dance Ministry'},{k:'deacon',n:'Deacon',f:'Deacon Ministry'},
 {k:'usher',n:'Usher & Hospitality',f:'Usher & Hospitality Ministry'},{k:'couples',n:'Couples',f:'Couples Ministry'},{k:'nursery',n:'Nursery',f:'Nursery Ministry'}
];

const COMPS=[
 {k:'bib',n:'Biblical Foundation'},{k:'char',n:'Character & Integrity'},{k:'team',n:'Team Leadership'},
 {k:'comm',n:'Communication'},{k:'admin',n:'Ministry Administration'},{k:'disc',n:'Discipleship'},{k:'prac',n:'Practical Experience'}
];
/* ================= TRACK 1 ================= */
C({id:'ldr-101',code:'LDR 101',track:'1',grp:'req',title:'Called to Lead',
goal:'Define biblical leadership and examine your own calling and character.',
lessons:[
L('What Biblical Leadership Is',['Mark 10:42-45','1 Peter 5:1-4'],
 'Jesus tells His disciples that the rulers of the nations lord it over people, but greatness in His kingdom is measured by service. Peter urges elders to shepherd God’s flock willingly, not for gain or control, and to be examples the flock can follow.',
 ['Leadership is influence used to serve others and move them toward God’s purposes.','A title is a stewardship, not a trophy. Jesus is the Chief Shepherd and every leader answers to Him.','People follow example far more than instruction.'],
 ['Write down the people you already influence: family, friends, classmates, coworkers, a ministry team.','List one habit that shows you serve people and one that shows you manage them.','Ask a trusted person what it feels like to be led by you.'],
 ['Who has led you well, and what made their leadership feel like service?','Where are you tempted to lead for recognition instead of for the good of others?'],
 'Write a one-sentence personal definition of leadership. Share it with your pastor or mentor and ask what they would add.'),
L('Called and Equipped',['Exodus 3:1-12','1 Corinthians 12:4-11','Ephesians 4:11-13'],
 'Moses felt unqualified, and God answered with a promise of His presence instead of a list of credentials. Paul teaches that the Spirit gives varied gifts for the common good, and Ephesians shows that leaders exist to equip the whole church for works of service.',
 ['Calling starts with God and is confirmed by the community of believers.','Gifts are given for the body, never for personal display.','Feeling unqualified is common. God’s presence is the answer, not self-confidence.'],
 ['List your spiritual gifts, passions, and life experiences in three columns.','Ask three people where they see you most useful and fruitful.','Name one skill you need to grow and one person who can teach it.'],
 ['What objection would you raise if God called you to lead, as Moses did?','Which gift do others see in you that you tend to downplay?'],
 'Complete the three-column gifts, passions, and experience inventory and review it with your mentor.'),
L('Character Before Competence',['1 Timothy 3:1-7','Psalm 78:70-72','Daniel 6:3-5'],
 'Paul’s list for overseers is mostly about character: self-control, a good reputation, a well-managed household. David shepherded Israel with integrity of heart and skillful hands. Daniel’s rivals searched for corruption in his work and found none.',
 ['Integrity means being the same person in public and in private.','Skill without character does damage at scale.','Character is built through small, private decisions repeated over time.'],
 ['Audit three areas where leaders usually fall: money, relationships, and time.','Choose an accountability partner who can ask you hard questions.','Decide now what you will never do, before pressure arrives.'],
 ['In which of the three areas would a hidden failure be most likely to show up for you?','What does your private life say about your public leadership?'],
 'Write three personal integrity commitments and give them to your accountability partner.')
],
quiz:[
Q('According to Mark 10:42-45, how does Jesus define greatness?','By serving others','By holding the highest position','By having the most followers','By teaching the most people'),
Q('Why does God answer Moses’ doubts with a promise of His presence?','God’s presence, not human ability, is what qualifies a leader','Moses had no weaknesses','God wanted Moses to work alone','Calling is based on experience'),
Q('Which statement best describes integrity?','Being the same person in public and in private','Avoiding all mistakes','Having a good reputation','Following rules only when watched')],
proj:P('Personal Calling & Character Statement','Write a two-page statement describing how you sense God’s call, the gifts you bring, and the character areas you are asking God to strengthen.',
 ['Your definition of leadership in your own words','Gifts, passions, and experiences inventory','Three integrity commitments and the name of your accountability partner'],3)});

C({id:'ldr-102',code:'LDR 102',track:'1',grp:'req',title:'Servant Leadership & Vision',
goal:'Lead like Jesus, cast a clear vision, and protect your spiritual health.',
lessons:[
L('Leading Like Jesus',['John 13:1-17','Philippians 2:3-8'],
 'On the night before the cross, Jesus wrapped a towel around His waist and washed His disciples’ feet. Paul describes the same mindset: Christ gave up status and took the form of a servant, and believers are called to value others above themselves.',
 ['Authority is exercised through sacrifice, not control.','Servant leaders do the unseen tasks and do not ask others to do what they will not.','Humility is seeing yourself accurately and others generously.'],
 ['Choose one behind-the-scenes task to do every week.','Ask each team member, How can I make your work easier?','Watch for moments you pull rank and replace them with a question.'],
 ['What task would feel beneath you, and why?','Who on your team is overlooked, and how can you serve them?'],
 'Do one hidden act of service for a team member this week. Journal what it cost you and what you noticed.'),
L('Vision and Direction',['Habakkuk 2:2-3','Proverbs 29:18','Nehemiah 2:11-18'],
 'God told Habakkuk to write the vision plainly so a runner could read it. Nehemiah inspected Jerusalem’s broken walls at night in private, then called the people to rebuild, and they answered, Let us rise up and build.',
 ['Vision begins in prayer and honest observation of a real need.','A good vision is clear, short, and repeatable.','Vision without a first step stays a dream.'],
 ['Write a vision for your area in 25 words or fewer.','Test it on three people and note what they repeat back.','Name the first three actions for the next 30 days.'],
 ['What broken wall in your church or community weighs on you?','What would change in 12 months if this vision came true?'],
 'Draft and test a 25-word vision statement for your area of service and record the feedback.'),
L('Prayer, Rest, and Spiritual Health',['Mark 1:35-38','Luke 5:15-16','Exodus 18:13-23'],
 'Even when crowds were searching for Him, Jesus withdrew early to pray. Jethro warned Moses that doing everything alone would wear him out, and he proposed that capable people share the load.',
 ['Leaders lead best from overflow, not from empty.','Rest and prayer are part of the work, not a break from it.','Delegating protects both the leader and the people who grow by serving.'],
 ['Fix one daily prayer time and one weekly day of rest.','Identify two tasks you can hand to someone else.','Name one friend who can ask how your soul is doing.'],
 ['What signs of burnout do you see in your life right now?','What are you holding that someone else could carry?'],
 'Plan a four-week rhythm of prayer, rest, and delegation and keep a short daily log.')
],
quiz:[
Q('What did Jesus model in John 13?','Serving through a humble act','Teaching with authority','Delegating tasks','Praying in secret'),
Q('Habakkuk 2:2 says to write the vision so that:','A runner can read it','It stays private','Only leaders understand it','It is never changed'),
Q('Why did Jethro advise Moses to delegate?','To spare Moses and the people from exhaustion and share the work','To remove Moses from leadership','To save money','Because Moses lacked skill')],
proj:P('Vision & Rhythm Plan','Create a one-page plan with your vision statement, 30-day action steps, and a weekly rhythm of prayer and rest.',
 ['25-word vision statement with feedback from three people','Three actions for the next 30 days','Four-week spiritual rhythm log summary'],3)});

C({id:'ldr-103',code:'LDR 103',track:'1',grp:'req',title:'Leading People & Teams',
goal:'Communicate clearly, build teams, and handle conflict in a way that honors Christ.',
lessons:[
L('Communication and Listening',['James 1:19-20','Proverbs 15:1','Proverbs 18:13'],
 'James tells believers to be quick to hear, slow to speak, and slow to anger. Proverbs says a gentle answer turns away wrath and that answering before listening brings shame.',
 ['Listening is the first act of leadership.','Clarity means saying less, more plainly, and checking that it landed.','Tone carries more than words.'],
 ['In your next conversation, repeat back what you heard before replying.','End every meeting by stating who does what by when.','Pick one channel for urgent matters and one for general updates.'],
 ['When do you tend to interrupt or defend before you understand?','What message did your team misunderstand recently, and why?'],
 'Hold two listening conversations with team members. Summarize what you learned in half a page.'),
L('Building and Empowering Teams',['Acts 6:1-7','Exodus 18:21-23','Romans 12:4-8'],
 'When a complaint arose about neglected widows, the apostles named the problem, proposed a solution, and the community chose seven trusted people to handle it. Romans reminds the church that many members, with different gifts, form one body.',
 ['Healthy teams match people to their gifts and give real responsibility.','Delegate the task and the authority together, then check in.','Celebrating others’ wins builds loyalty.'],
 ['Write role descriptions with purpose, tasks, and time needed.','Choose one responsibility to give away completely this month.','Schedule a monthly 15-minute check-in with each team member.'],
 ['What keeps you from trusting others with real responsibility?','How do you currently thank your team, and is it specific enough?'],
 'Write a one-page role description for each member of a team you lead or serve on and review it with them.'),
L('Conflict, Feedback, and Reconciliation',['Matthew 18:15-20','Ephesians 4:29-32','Proverbs 27:6'],
 'Jesus gives a path for conflict: go privately first, bring one or two others if needed, and involve the church only as a last step. Paul tells believers to speak what builds up and to forgive as Christ forgave them.',
 ['Address problems early, privately, and directly.','Feedback should be specific, kind, and aimed at the behavior.','The goal is restoration, not winning.'],
 ['Practice the pattern: name the issue, share the impact, ask a question, agree on next steps.','Never correct someone publicly when a private talk will do.','Write down who you need to forgive or ask forgiveness from.'],
 ['Is there a conversation you have been avoiding? What is the cost of waiting?','How do you react when someone corrects you?'],
 'Role-play a hard conversation with your mentor using the four-step pattern and write down what you would change.')
],
quiz:[
Q('What does James 1:19 say about listening?','Be quick to hear and slow to speak','Speak first so people know your position','Listen only to leaders','Avoid conflict by staying silent'),
Q('In Acts 6, how did the apostles handle the complaint?','They proposed a solution and let trusted people be chosen to serve','They ignored it','They did the work themselves','They removed the complaining group'),
Q('According to Matthew 18, what comes first when someone wrongs you?','Go to the person privately','Tell the congregation','Wait for them to apologize','Write a letter to the pastor')],
proj:P('Team Charter','Create a charter for a real or practice team that includes purpose, roles, communication rules, and a conflict path.',
 ['Team purpose and role descriptions','Communication rhythm and meeting rules','Conflict process based on Matthew 18'],3)});
/* ================= TRACK 2 ================= */
C({id:'min-core',code:'MIN 200',track:'2',grp:'req',title:'Ministry Leadership Core',
goal:'Understand your role as a ministry leader and run a healthy ministry team.',
lessons:[
L('The Ministry Leader’s Role',['Ephesians 4:11-16','Acts 20:28'],
 'Ephesians says leaders are given to equip God’s people so the whole body grows in maturity. Paul charges the Ephesian elders to keep watch over themselves and the flock the Holy Spirit entrusted to them.',
 ['A ministry leader serves under the pastor and shares the church’s overall vision.','Your job is to equip others, not to do everything yourself.','Watch yourself first. Your own walk sets the pace.'],
 ['Meet with your pastor to clarify expectations, authority, and reporting.','Write a one-sentence purpose for your ministry that connects to the church’s mission.','List what you do now that someone else could learn to do.'],
 ['How does your ministry serve the church’s mission, not just its own members?','Where do you need clearer expectations from your pastor?'],
 'Meet with your pastor and write a short ministry covenant stating purpose, authority, and how you will report.'),
L('Recruiting, Training, and Releasing Volunteers',['2 Timothy 2:2','Luke 10:1-9','Exodus 18:21'],
 'Paul tells Timothy to entrust what he learned to faithful people who will teach others. Jesus sent out seventy-two ahead of Him in pairs with clear instructions, and Jethro advised choosing capable, trustworthy people.',
 ['Personally invite people. Announcements rarely recruit.','Train for the task, the heart, and the policies.','Release volunteers with clear boundaries and honest thanks.'],
 ['Create a simple role card: task, time, training, and who to ask for help.','Hold a short orientation before anyone serves for the first time.','Send a personal thank-you note each quarter.'],
 ['Who around you could be invited to serve but has never been asked?','What is your plan if a key volunteer steps away?'],
 'Design a volunteer role card and recruit one new person with a personal invitation.'),
L('Planning, Calendar, and Budget',['Luke 14:28-30','Proverbs 21:5','1 Corinthians 14:40'],
 'Jesus teaches that a builder counts the cost before starting. Proverbs ties diligence to plenty, and Paul asks that everything in the church be done in a fitting and orderly way.',
 ['Plan backward from the date and the goal.','Build a 12-month calendar with the whole church calendar in view.','Every budget request needs a purpose and a plan to report back.'],
 ['Draft a 12-month calendar and share it with your pastor.','Write a simple budget: income expected, costs by event, reserve.','Keep receipts and submit them on time.'],
 ['What event on your calendar does not clearly serve your purpose?','How would a stranger know how you spent ministry funds?'],
 'Draft a 12-month ministry calendar with a budget line for each major event.'),
L('Care, Safety, and Follow-Up',['John 10:11-15','Proverbs 27:23','Luke 15:4-7'],
 'Jesus describes the good shepherd who knows His sheep and goes after the one that wandered. Proverbs urges attention to the condition of the flock.',
 ['Know the names and needs of the people you lead.','Safety is part of care: follow church policies for background checks, supervision, and reporting.','Follow up within 48 hours when someone is missing, hurting, or new.'],
 ['Keep a simple roster with contact details and prayer needs.','Learn your church’s policies on screening, two-adult supervision, and incident reports.','Set a weekly time for calls and texts to people who need care.'],
 ['Who in your ministry has quietly drifted? What is one step to reach them?','What risk in your ministry has no policy yet?'],
 'Build a care roster for your ministry and make three follow-up contacts this week.')
],
quiz:[
Q('According to Ephesians 4, why are leaders given to the church?','To equip God’s people for works of service','To make decisions for the church','To manage budgets','To represent the church publicly'),
Q('Which approach is most effective for recruiting volunteers?','A personal invitation with a clear role','A general bulletin announcement','Requiring all members to serve','Asking only those who offer'),
Q('What should a ministry leader do first when someone goes missing?','Follow up personally and soon','Remove them from the roster','Wait for them to return','Ask the pastor to handle it')],
proj:P('Ministry Plan Packet','Prepare a packet for your ministry including a covenant with your pastor, role cards, a 12-month calendar with budget, and a care roster.',
 ['Ministry covenant reviewed by your pastor','Volunteer role cards and a training plan','12-month calendar, budget, and care roster'],4)});

/* ================= TRACK 3 ================= */
C({id:'dpt-core',code:'MIN 300',track:'3',grp:'core',title:'Department Leadership Core',
goal:'Move from leading a team to leading leaders and overseeing an entire church department.',
lessons:[
L('From Ministry Leader to Department Leader',['Numbers 27:15-23','Exodus 18:21-23','Luke 16:10'],
 'Moses asked God to appoint someone over the congregation so they would not be like sheep without a shepherd, and Joshua was commissioned publicly. Jethro’s advice created layers of leaders over thousands, hundreds, fifties, and tens. Jesus says whoever is faithful with little will be faithful with much.',
 ['A department leader multiplies leaders instead of doing ministry personally.','Your results now come through other people.','Keep a small span of care: each leader should have a few people they can coach well.'],
 ['Map your department: who leads what, who reports to whom.','Move from doing tasks to coaching leaders and schedule a coaching rhythm.','Identify what you need to stop doing.'],
 ['Which tasks do you cling to out of habit, not need?','Who is ready for more responsibility?'],
 'Draw a department org chart and a one-page plan for who you will coach.'),
L('Strategy, Goals, and Measuring Fruit',['Proverbs 15:22','John 15:1-8','Luke 14:28'],
 'Proverbs says plans fail without counsel but succeed with many advisers. Jesus teaches that branches abiding in the vine bear much fruit, and the Father prunes so they bear more.',
 ['Strategy starts with purpose and defines what faithful fruit looks like.','Set a few goals: spiritual growth, participation, leadership development, and care.','Measure to learn and improve, not to compare or boast.'],
 ['Write three to five department goals with measures and dates.','Track a small dashboard each quarter: attendance, new leaders, follow-up rate, stories.','Hold an annual review with your pastor.'],
 ['What fruit does God want from your department?','What number could mislead you if you looked at it alone?'],
 'Write a one-year strategy with goals, measures, and a quarterly review schedule.'),
L('Developing Leaders and Succession',['2 Timothy 2:2','Acts 13:1-3','Joshua 1:1-9'],
 'Paul passes his teaching to Timothy and expects it to continue to the next generation. The church at Antioch fasted, prayed, and sent out Barnabas and Saul. God told Joshua to be strong and courageous as he stepped into Moses’ place.',
 ['Develop leaders by choosing, teaching, trying, and debriefing.','Succession starts on day one: always be training your replacement.','Release leaders with blessing and keep them connected.'],
 ['Identify a leader to develop and a development plan for six months.','Use the model: I do, we do, you do, you teach.','Debrief after each new responsibility with three questions.'],
 ['Who is your Timothy, and who is your Barnabas?','What would happen to your department if you left tomorrow?'],
 'Create a leadership development plan for two emerging leaders.'),
L('Collaboration, Budget, and Church Alignment',['1 Corinthians 12:12-27','Ephesians 4:3','Philippians 2:1-4'],
 'Paul says the body has many parts and no part can say to another, I do not need you. Believers are urged to keep the unity of the Spirit and to consider others’ interests as well as their own.',
 ['Departments serve the whole church. Avoid silos.','Align calendars, budgets, and communication with other departments and the pastor.','Competition for resources gives way to shared vision.'],
 ['Meet quarterly with other department leaders to share calendars and needs.','Submit a budget proposal with purpose, plan, and measures.','Send a monthly update to the pastor.'],
 ['Where does your department compete instead of cooperate?','How can another department help you reach your goals?'],
 'Host a department leaders’ meeting to align calendars and identify two joint efforts.')
],
quiz:[
Q('What changes most when moving from ministry leader to department leader?','You achieve results through other leaders','You do more tasks yourself','You work alone','You stop planning'),
Q('What is the purpose of measuring fruit?','Learning and improving faithfully','Comparing departments','Pleasing leadership','Setting quotas'),
Q('What does 2 Timothy 2:2 illustrate?','Multiplying leaders across generations','Competition among leaders','Delegating small tasks','Short-term planning')],
proj:P('Department Strategy Packet','Prepare a packet with an org chart, a one-year strategy, a leadership development plan, and a collaboration plan.',
 ['Org chart and coaching plan','One-year strategy with measures','Leader development and collaboration plan'],4)});

C({id:'dpt-youth',code:'MIN 310',track:'3',grp:'spec',key:'youth',title:'Youth Department Leadership',
goal:'Lead a youth department with a clear pathway, trained leaders, and strong family partnerships.',
lessons:[
L('Designing a Student Pathway',['Luke 2:52','Ephesians 4:11-13','Psalm 78:5-7'],
 'Luke says Jesus grew in wisdom, stature, and favor with God and people, a picture of whole-person development. Ephesians describes equipping the saints toward maturity, and Psalm 78 stresses passing faith on to each generation.',
 ['A pathway moves students from invitation to belonging, growth, and service.','Define what a graduating senior should know, believe, and do.','Align middle school and high school ministries so students do not fall through gaps.'],
 ['Draw the pathway: outreach, large group, small group, mentoring, serving.','Write three to five outcomes for each stage.','Plan the transition into adult church life.'],
 ['Where do students most often drop out of your ministry?','What does a mature 18-year-old look like in your church?'],
 'Map a middle-school-to-adult-church pathway with outcomes at each stage.'),
L('Leading Youth Leaders and Volunteers',['Titus 1:5','2 Timothy 2:2','Acts 15:36-41'],
 'Paul left Titus in Crete to appoint elders in every town. He told Timothy to entrust truth to faithful people. In Acts 15, Paul and Barnabas disagreed sharply over John Mark, a reminder that leaders need grace and clear processes when they disagree.',
 ['Recruit adults who love students, are spiritually mature, and are screened.','Train on policy, relationships, and care for the hurting.','Coach leaders regularly and resolve conflict early.'],
 ['Create a leader handbook and an annual training calendar.','Hold monthly leader huddles for prayer and problem-solving.','Plan a quarterly appreciation moment.'],
 ['Which leaders are tired and need care?','What training have you skipped that is now urgent?'],
 'Prepare a youth leader handbook outline and a training calendar.'),
L('Safeguarding, Policy, and Family Partnership',['Proverbs 22:3','Deuteronomy 6:6-9','Psalm 82:3'],
 'Proverbs says the prudent see danger and take refuge. Deuteronomy puts discipleship in the home first, and Psalm 82 commands defending the weak.',
 ['Policy protects students, leaders, and the church’s witness.','Set clear rules for transportation, communication, overnight events, and reporting.','Equip parents with resources and open communication.'],
 ['Review the youth policy with all leaders and parents each year.','Create an incident report process and a parent communication plan.','Provide a parent resource night each semester.'],
 ['Where is your policy unclear or unenforced?','How will you rebuild trust if something goes wrong?'],
 'Review your youth policies against a checklist and propose updates to your pastor.')
],
quiz:[
Q('What is the purpose of a student pathway?','To move students toward belonging, growth, and service','To keep students busy','To increase attendance only','To replace small groups'),
Q('What should be included in youth leader training?','Policy, relationships, and care','Games only','Fundraising','Social media tips'),
Q('How should parents be involved in the youth department?','As equipped and informed partners','They should be left out','They should be asked to leave','They should be contacted only in crises')],
proj:P('Youth Department Blueprint','Create a blueprint with a student pathway, leader handbook, policy review, and parent engagement plan.',
 ['Student pathway map with outcomes','Leader handbook outline and training calendar','Policy review and parent communication plan'],4)});

C({id:'dpt-children',code:'MIN 320',track:'3',grp:'spec',key:'children',title:'Children’s Department Leadership',
goal:'Lead a children’s department with age-level pathways, strong teams, and rigorous child safety.',
lessons:[
L('Age-Level Pathway and Curriculum',['Deuteronomy 6:6-9','Luke 2:52','Mark 10:14'],
 'Moses calls for teaching God’s words throughout daily life. Luke shows Jesus growing in wisdom, and Jesus welcomes children without hesitation.',
 ['Divide ministry by age: nursery, preschool, early elementary, upper elementary.','Choose curriculum that is biblically faithful, age-appropriate, and teachable by volunteers.','Plan a yearly scope so children hear the whole story of Scripture.'],
 ['Compare two curricula against a checklist for doctrine, age fit, and ease of use.','Map the year with seasons: Advent, Easter, summer.','Create a family take-home plan.'],
 ['What will a child know about God after six years in your ministry?','Where do gaps exist between age groups?'],
 'Draft a three-year scope and sequence for one age group.'),
L('Building Teams and Training Teachers',['2 Timothy 2:15','James 3:1','Exodus 31:1-6'],
 'Paul tells Timothy to handle the word of truth correctly. James notes teachers will be judged more strictly, and Exodus shows God equipping skilled craftsmen for His work.',
 ['Recruit teachers, helpers, and support roles such as check-in and snack teams.','Train on teaching skills, classroom management, and gospel clarity.','Observe, encourage, and coach teachers regularly.'],
 ['Create a two-hour teacher training with a practice lesson.','Schedule classroom observations with kind feedback.','Rotate teachers to prevent burnout.'],
 ['How are your teachers growing spiritually?','What feedback have you been hesitant to give?'],
 'Build a teacher training agenda and observe one classroom with a feedback form.'),
L('Child Safety Systems and Parent Communication',['Matthew 18:6','Psalm 82:3','Proverbs 14:15'],
 'Jesus warns severely about harming a little one. Psalm 82 calls for defending the weak, and Proverbs says the simple believe anything but the prudent give thought to their steps.',
 ['Safety is a system: screening, training, supervision, check-in, reporting.','Review policies yearly and after any incident.','Communicate with parents about curriculum, events, and concerns.'],
 ['Audit screening, ratios, check-in, and supervision.','Train staff on recognizing and reporting abuse as required by law.','Send a monthly parent newsletter.'],
 ['What would happen in your ministry if a child reported abuse?','How do parents currently learn what their children are learning?'],
 'Complete a safety systems audit and prepare a parent communication calendar.')
],
quiz:[
Q('Why use an age-level pathway?','To match teaching to developmental needs','For convenience','To reduce volunteers','To simplify scheduling'),
Q('What is essential in teacher development?','Training, observation, and coaching','Occasional feedback','Only recruitment','Changing curriculum often'),
Q('What defines a child safety system?','Screening, training, supervision, check-in, and reporting working together','A written policy only','Trust in long-time volunteers','An annual review only')],
proj:P('Children’s Department Blueprint','Prepare a blueprint with an age-level pathway, teacher training plan, safety audit, and parent communication calendar.',
 ['Age-level pathway and scope','Teacher training agenda and observation form','Safety audit results and parent communication calendar'],4)});

C({id:'dpt-men',code:'MIN 330',track:'3',grp:'spec',key:'men',title:'Men’s Department Leadership',
goal:'Lead a men’s department that disciples men through groups, events, and service.',
lessons:[
L('A Discipleship Pathway for Men',['Matthew 28:19-20','2 Timothy 2:2','Luke 6:40'],
 'Jesus commissions His followers to make disciples and teach them to obey all He commanded. Paul urges multiplication through faithful people, and Jesus notes that a fully trained disciple will be like his teacher.',
 ['Create a clear path: connect, grow, serve, lead.','Offer entry points for men at different levels of faith.','Develop group leaders who can multiply groups.'],
 ['Map the men in your church by stage: new believer, growing, serving, leading.','Choose a two-year Bible and life curriculum.','Set a goal for new groups each year.'],
 ['Which men are missing from your current gatherings?','What stops a new man from taking a next step?'],
 'Draft a two-year discipleship pathway for men with entry points and next steps.'),
L('Retreats, Events, and Service',['Mark 6:30-32','Nehemiah 4:14-23','Galatians 6:9-10'],
 'Jesus invited His disciples to rest and be with Him. Nehemiah mobilized families to work and to guard the wall together. Paul encourages doing good to everyone as opportunity arises.',
 ['Events should lead to long-term relationships, not just one night.','Retreats provide space for rest, honest conversation, and prayer.','Service projects build brotherhood and show the church’s love.'],
 ['Plan a retreat with sessions, free time, worship, and small groups.','Choose two service projects each year.','Follow up with attendees within a week.'],
 ['What do your events accomplish beyond the event?','How can men serve the neighborhood together?'],
 'Plan one retreat and one service project with budget and follow-up.'),
L('Mentoring Network and Succession',['Proverbs 13:20','1 Kings 19:19-21','Hebrews 13:7'],
 'Proverbs says walking with the wise makes one wise. Elisha followed Elijah and served him before succeeding him, and Hebrews calls believers to remember their leaders and imitate their faith.',
 ['A mentoring network pairs experienced men with those who need guidance.','Identify and train the next men’s leaders.','Honor those who have served for years.'],
 ['Create a mentor roster and guidelines.','Prepare successors for every key role.','Hold an annual recognition night.'],
 ['Who is preparing to take over for you?','How do you honor older men who still have much to give?'],
 'Build a mentor roster and succession plan for key roles.')
],
quiz:[
Q('What is the aim of a men’s discipleship pathway?','Moving men toward maturity and multiplication','Large attendance','Social connection only','Entertainment'),
Q('What should follow a men’s event?','Follow-up that connects men to next steps','Nothing','Another event right away','A survey only'),
Q('Why plan for succession?','To ensure continued leadership and growth','Because leaders may leave soon','To reduce your workload','To recognize seniority')],
proj:P('Men’s Department Blueprint','Create a blueprint with a discipleship pathway, an event and service calendar, and a mentor and succession plan.',
 ['Two-year discipleship pathway','Retreat and service plan with budget','Mentor roster and succession plan'],4)});

C({id:'dpt-women',code:'MIN 340',track:'3',grp:'spec',key:'women',title:'Women’s Department Leadership',
goal:'Lead a women’s department that disciples women of every season and develops women leaders.',
lessons:[
L('A Discipleship Pathway for Women',['Titus 2:3-5','Acts 16:13-15','Proverbs 31:26'],
 'Paul gives older women a role in teaching and encouraging younger women. Lydia opened her heart and home after hearing the gospel by the river, and Proverbs describes wisdom and kindness in a woman’s teaching.',
 ['Offer entry points for different seasons of life and cultures.','Pair Bible study with community and practical help.','Make room for women to lead and teach.'],
 ['Survey women’s needs and availability.','Offer day and evening study times.','Provide childcare if possible.'],
 ['Which women are not being served by your current schedule?','How does your ministry reflect the diversity of the church?'],
 'Survey women in your church and draft a pathway with three entry points.'),
L('Leading Women Leaders and Mentors',['Exodus 15:20-21','Judges 4:4-9','Romans 16:12'],
 'Miriam led women in worship after the Red Sea. Deborah led Israel as a prophet and judge, and Paul greets Tryphena, Tryphosa, and Persis for working hard in the Lord.',
 ['Identify and train women with gifts for teaching, hospitality, administration, and care.','Give clear roles, authority, and support.','Coach women leaders regularly and address conflict early.'],
 ['Hold leader gatherings for prayer and training.','Create a mentoring structure for new leaders.','Recognize women’s contributions publicly.'],
 ['Who is being overlooked for leadership?','Where do you need to give more authority?'],
 'Set up a monthly leader gathering with training and prayer and report outcomes.'),
L('Care Networks and Events',['Galatians 6:2','Acts 6:1-3','James 1:27'],
 'Paul says to carry one another’s burdens. The Jerusalem church organized to meet the needs of widows, and James defines pure religion as caring for orphans and widows in distress.',
 ['Organize care teams for meals, visits, and practical help.','Design events with purpose, a welcome plan, and a next step.','Keep confidentiality and respect boundaries.'],
 ['Create a care request process and a team roster.','Plan a calendar with a mix of fellowship, study, and service.','Debrief each event with your team.'],
 ['Who in your church is suffering quietly?','How do your events lead women to deeper relationships?'],
 'Establish a care network with a roster and process and test it with one real need.')
],
quiz:[
Q('What is the focus of Titus 2:3-5?','Older women teaching and encouraging younger women','Social events','Leadership structure','Financial planning'),
Q('How should women leaders be developed?','With clear roles, coaching, and support','Occasionally','Without authority','Only through large events'),
Q('What defines an effective care network?','Organized teams, a clear process, and confidentiality','Informal help','A single leader','An annual event')],
proj:P('Women’s Department Blueprint','Prepare a blueprint with a discipleship pathway, a leader development plan, and a care network and event calendar.',
 ['Survey results and pathway','Leader development plan','Care network process and event calendar'],4)});

C({id:'dpt-outreach',code:'MIN 350',track:'3',grp:'spec',key:'outreach',title:'Outreach Department Leadership',
goal:'Lead an outreach department with community partnerships, an evangelism strategy, and a follow-up system.',
lessons:[
L('Community Partnerships and Assessment',['Jeremiah 29:7','Nehemiah 2:17-18','Acts 17:22-28'],
 'Jeremiah told exiles to seek the city’s welfare. Nehemiah pointed to a shared problem and invited others to rebuild together. Paul met Athens where it was, referencing their own culture and altars as a starting point.',
 ['Assess community needs with data and conversations.','Build partnerships with schools, agencies, and businesses.','Align projects with real needs.'],
 ['Gather neighborhood data and list local organizations.','Meet leaders of three organizations and ask how you can help.','Write a one-page community profile.'],
 ['Who is already doing good work that you can support?','What cultural bridges can your church build?'],
 'Complete a community profile and meet with two potential partners.'),
L('Evangelism Strategy and the Follow-Up Pipeline',['Matthew 28:19-20','Acts 2:41-47','Luke 15:4-7'],
 'Jesus commissions His followers to make disciples. The early church devoted itself to teaching, fellowship, breaking bread, and prayer, and new believers were included. The shepherd searching for one lost sheep shows persistence.',
 ['Design a pipeline: contact, follow-up, connection, discipleship.','Assign responsibility for each stage.','Train the whole church in simple, authentic evangelism.'],
 ['Map each step from first contact to small-group involvement.','Create a follow-up script and timeline.','Hold quarterly evangelism training.'],
 ['Where do people fall out of your pipeline?','Who owns follow-up?'],
 'Design a follow-up pipeline with owners and timelines.'),
L('Mobilizing Volunteers and Measuring Impact',['Nehemiah 3:1-12','Luke 10:1-2','Proverbs 14:23'],
 'Nehemiah 3 shows families and groups each repairing a section of the wall. Jesus asks for prayer for more workers, and Proverbs says that all hard work brings a profit.',
 ['Give volunteers a clear section of the work.','Measure outcomes: people served, follow-ups, connections, baptisms, and stories.','Share impact with the church to build momentum.'],
 ['Create a volunteer roster and role cards.','Choose five metrics and track them each quarter.','Share one story each month with the congregation.'],
 ['Which metrics reflect real fruit?','How do you celebrate and sustain your volunteers?'],
 'Develop a volunteer plan and impact dashboard with five metrics.')
],
quiz:[
Q('What is the first step in building community partnerships?','Assessing needs and listening','Launching events','Asking for funds','Posting online'),
Q('What does a follow-up pipeline include?','Defined stages with owners and timelines','A single contact','Occasional calls','Event reminders'),
Q('Why measure outcomes in outreach?','To learn, improve, and tell the story','To compare churches','To set quotas','To please leadership')],
proj:P('Outreach Department Blueprint','Create a blueprint with a community profile, partnership plan, follow-up pipeline, and volunteer and impact plan.',
 ['Community profile and partnerships','Follow-up pipeline with owners','Volunteer plan and impact metrics'],4)});

C({id:'dpt-media',code:'MIN 360',track:'3',grp:'spec',key:'media',title:'Media & Communications Department Leadership',
goal:'Lead a media department with a clear strategy, trained production teams, and responsible digital care.',
lessons:[
L('Communications Strategy',['Proverbs 15:22','Habakkuk 2:2','1 Corinthians 14:8-9'],
 'Proverbs says plans succeed with many advisers. Habakkuk says to write the vision plainly, and Paul says an unclear trumpet call cannot prepare anyone for battle.',
 ['A strategy ties messages, audiences, channels, and timing together.','Create a communications calendar that aligns with the church calendar.','Establish approval workflows and a brand guide.'],
 ['Write audience profiles and key messages for the year.','Build a shared calendar for all departments.','Create a one-page brand guide with colors, fonts, and tone.'],
 ['What does your church say about itself without words?','How do departments currently request media help?'],
 'Draft an annual communications strategy and brand guide.'),
L('Production Teams, Equipment, and Workflow',['Exodus 35:30-35','1 Corinthians 14:40','Colossians 3:23'],
 'God filled Bezalel and Oholiab with skill for craftsmanship and teaching others. Paul asks that church gatherings be orderly, and Colossians calls for wholehearted work.',
 ['Build teams by role: audio, video, graphics, streaming, and social.','Document workflows and keep equipment organized and maintained.','Train backup operators for every role.'],
 ['Create role descriptions and a training schedule.','Maintain an equipment inventory and replacement plan.','Hold a monthly team review.'],
 ['Which role is a single point of failure?','How are you caring for the spiritual health of volunteers?'],
 'Document your production workflow and create a rotation schedule with backups.'),
L('Brand, Privacy, and Digital Care',['Proverbs 22:1','Matthew 7:12','Ephesians 4:15'],
 'Proverbs says a good name is more desirable than great riches. The golden rule applies to how we use people’s information, and Paul says to speak the truth in love.',
 ['Protect data: donor, member, and prayer information must be secure.','Respond to online questions and criticism with truth and care.','Use analytics to improve and not to pressure.'],
 ['Limit access and use strong passwords with two-factor authentication.','Create a response guide for comments and messages.','Review analytics monthly.'],
 ['Who has access to sensitive information, and do they need it?','How can digital channels offer real pastoral care?'],
 'Create a data privacy checklist and a comment response guide.')
],
quiz:[
Q('What does a communications strategy align?','Messages, audiences, channels, and timing','Platforms only','Fonts','Equipment'),
Q('Why train backup operators?','To prevent single points of failure','To reduce cost','To increase volunteer numbers','To enable promotions'),
Q('What is a key digital care practice?','Protecting sensitive data and responding with care','Posting everything','Ignoring comments','Using anonymous accounts')],
proj:P('Media Department Blueprint','Create a blueprint with a communications strategy, production workflow, and digital privacy and response guide.',
 ['Strategy and brand guide','Production workflow and rotation schedule','Privacy checklist and response guide'],4)});
/* ================= TRACK A ================= */
C({id:'adm-401',code:'ADM 401',track:'A',grp:'req',title:'Stewardship & Church Finance',
goal:'Handle the church’s money with biblical stewardship, clear controls, and honest reporting.',
lessons:[
L('Biblical Stewardship',['1 Corinthians 4:2','Luke 16:10-12','2 Corinthians 8:20-21'],
 'Paul says those entrusted with something must be found faithful. Jesus connects faithfulness in small things to faithfulness in greater things. Paul took care to handle a large gift so that no one could find fault, aiming to do right in the sight of the Lord and of people.',
 ['Church money belongs to God and is held in trust.','Faithfulness includes transparency and good records.','Financial leaders protect both the church and themselves by following clear processes.'],
 ['Read the church’s financial policies and ask about gaps.','Learn how giving, restricted funds, and expenses are recorded.','Write a personal stewardship commitment.'],
 ['What does it mean to hold money in trust?','How could this church be more transparent?'],
 'Write a one-page stewardship statement and share it with your pastor.'),
L('Budgets, Giving Records, and Internal Controls',['Proverbs 27:23-24','Proverbs 21:5','Acts 6:3'],
 'Proverbs urges knowing the condition of your flocks because riches do not last forever. Diligence leads to plenty, and the apostles asked the church to choose trustworthy people for the task of distribution.',
 ['A budget is a plan for ministry, built with leaders and approved by the right body.','Use internal controls: two people count offerings, deposits are made promptly, and the person who approves payments is not the one who records them.','Keep accurate giving records and confidential donor information.'],
 ['Draft a budget with income, expenses, and reserves.','Write a counting and deposit procedure.','Reconcile bank statements monthly.'],
 ['Where does one person have too much control?','What would a skeptical auditor ask about your process?'],
 'Draft a counting and deposit procedure and a monthly reconciliation checklist.'),
L('Reporting and Transparency',['Nehemiah 13:13','Romans 12:17','Proverbs 11:1'],
 'Nehemiah appointed treasurers who were considered faithful to distribute supplies to their fellow Levites. Paul urges taking thought for what is honorable in the sight of all, and Proverbs says honest weights delight the Lord.',
 ['Regular reports build trust: monthly summaries to leaders and annual reports to the church.','Explain numbers in plain language.','Invite independent review or an audit.'],
 ['Create a one-page monthly financial summary.','Prepare an annual report with income, expenses, and ministry highlights.','Schedule an independent review.'],
 ['How would members describe their trust in church finances?','What question would be hardest to answer today?'],
 'Prepare a sample monthly report and a draft annual report outline.')
],
quiz:[
Q('What does 1 Corinthians 4:2 require of stewards?','Faithfulness','Success','Popularity','Skill'),
Q('Which is an example of an internal control?','Two people count offerings and record them together','One person counts and deposits alone','Cash kept in the office','Verbal approvals only'),
Q('Why share regular financial reports?','To build trust and accountability','For compliance only','To compare with other churches','To reduce giving')],
proj:P('Church Finance Handbook','Create a handbook with a stewardship statement, a budget, counting and deposit procedures, and a monthly report template.',
 ['Stewardship statement and budget draft','Counting, deposit, and reconciliation procedures','Monthly report template'],4)});

C({id:'adm-402',code:'ADM 402',track:'A',grp:'req',title:'Church Administration & Operations',
goal:'Build systems, schedules, and records that let ministry leaders focus on people.',
lessons:[
L('Order, Systems, and Servant Administration',['1 Corinthians 14:40','Acts 6:1-4','Romans 12:6-8'],
 'Paul asks that everything be done decently and in order. The apostles organized help so the Word could continue to be taught and the widows served. Romans lists administration among spiritual gifts to be used with diligence.',
 ['Administration is ministry that frees others to minister.','Good systems are simple, documented, and shared.','Service attitude matters: be responsive, patient, and clear.'],
 ['List recurring tasks and who owns them.','Create checklists for weekly and annual routines.','Set response times for requests.'],
 ['Which tasks depend on one person’s memory?','How do you handle urgent requests that disrupt your plan?'],
 'Document five recurring tasks as step-by-step checklists.'),
L('Facilities, Scheduling, and Operations',['Proverbs 24:3-4','Nehemiah 4:6','Luke 14:28'],
 'Proverbs says a house is built by wisdom and its rooms filled by knowledge. Nehemiah shows steady work on the wall with people committed to the task, and Jesus advises counting the cost before building.',
 ['A shared facility calendar prevents conflict.','Maintain safety: inspections, emergency plans, and keys.','Plan maintenance and repairs with a budget.'],
 ['Create a room request process and a calendar.','Keep a list of vendors and maintenance schedules.','Run annual fire and emergency drills.'],
 ['What problems come from unclear room use?','What safety risks are you aware of but have not addressed?'],
 'Create a facility request form and an annual maintenance checklist.'),
L('Staff, Volunteers, and Records',['Colossians 4:1','1 Timothy 5:17-18','Proverbs 27:23'],
 'Paul tells masters to treat servants justly and fairly. He also says elders who work well deserve honor and that a worker is worthy of wages. Knowing the state of your flock calls for careful records.',
 ['Fair treatment of staff includes clear roles, pay, and boundaries.','Keep membership, attendance, and volunteer records organized and secure.','Plan for transitions with documented processes.'],
 ['Write job descriptions and a volunteer handbook.','Set a records retention and backup plan.','Create an onboarding checklist for new staff and volunteers.'],
 ['How do you care for the people who serve behind the scenes?','What would be lost if a key records keeper left?'],
 'Write an onboarding checklist and a records backup plan.')
],
quiz:[
Q('What is the purpose of administration in ministry?','To free others to minister','To control decisions','To reduce costs','To create more rules'),
Q('Which practice helps prevent facility conflicts?','A shared calendar with a request process','Informal requests','Open-door use','Private scheduling'),
Q('Why document processes?','To make work repeatable and transferable','To satisfy auditors','To create paperwork','To limit access')],
proj:P('Administrative Operations Manual','Assemble a manual with checklists, a facility request process, and an onboarding and records plan.',
 ['Five documented checklists','Facility request form and maintenance plan','Onboarding checklist and records plan'],4)});

C({id:'adm-403',code:'ADM 403',track:'A',grp:'req',title:'Governance, Compliance & Records',
goal:'Support church leadership with sound governance, compliance, and careful confidentiality. This course is not legal or tax advice. Confirm specifics with a qualified professional.',
lessons:[
L('Church Governance and Accountability',['Acts 15:1-31','Proverbs 11:14','Hebrews 13:17'],
 'The Jerusalem council gathered apostles and elders, heard testimony and Scripture, and reached a decision the church received with joy. Proverbs says there is safety in many advisers, and Hebrews calls leaders to watch over souls as those who will give an account.',
 ['Know your church’s governing documents and who has authority for what.','Keep minutes and record decisions.','Accountability protects leaders and members.'],
 ['Read your constitution or bylaws and summarize decision rights.','Create a template for meeting agendas and minutes.','Maintain an organized archive of approved decisions.'],
 ['Who decides what in your church, and is that clear to everyone?','How do you handle disagreement with decisions?'],
 'Summarize your church’s governance structure on one page and create a minutes template.'),
L('Legal and Financial Compliance',['Romans 13:1-7','Mark 12:17','Proverbs 11:1'],
 'Paul teaches believers to be good citizens and give what is owed. Jesus says to give to Caesar what belongs to Caesar and to God what belongs to God. Proverbs says honest scales are a delight to the Lord.',
 ['Follow applicable laws for nonprofits, employment, payroll, and reporting.','Provide accurate giving statements and follow retention guidelines.','Consult a qualified attorney or accountant for specific questions.'],
 ['Create a compliance calendar of annual filings and deadlines.','Confirm who handles payroll and tax reporting.','Keep copies of all required documents.'],
 ['What deadlines have been missed or are at risk?','Where do you need professional advice?'],
 'Build a compliance calendar with owners and deadlines and review it with your pastor and treasurer.'),
L('Risk Management and Confidentiality',['Proverbs 11:13','1 Timothy 3:8-10','Proverbs 22:3'],
 'Proverbs says a trustworthy person keeps a confidence, while a gossip betrays one. Paul says deacons must first be tested and found above reproach, and Proverbs says the prudent see danger and take refuge.',
 ['Review insurance coverage, safety policies, and emergency plans.','Protect confidential information: counseling, benevolence, giving, and personnel matters.','Have a response plan for incidents and crises.'],
 ['Review insurance annually.','Limit access to sensitive files and train staff on confidentiality.','Write an incident response plan with contacts.'],
 ['What information are you handling that requires more protection?','What is your plan if a serious incident occurs?'],
 'Draft a confidentiality agreement and an incident response plan.')
],
quiz:[
Q('What does Proverbs 11:14 say about advisers?','There is safety in many advisers','They limit growth','They slow decisions','They are unnecessary'),
Q('What is the best response to a specific legal or tax question?','Consult a qualified professional','Make your best guess','Ignore it','Ask a volunteer'),
Q('Which information requires confidentiality?','Counseling, benevolence, giving, and personnel details','Event schedules','Sermon titles','Public announcements')],
proj:P('Governance & Compliance Binder','Prepare a binder with a governance summary, a compliance calendar, and confidentiality and incident response documents.',
 ['Governance summary and minutes template','Compliance calendar with owners','Confidentiality agreement and incident response plan'],4)});
/* ===== NEW TRACK 1 COURSES (LDR 104-112) ===== */
C({id:"ldr-104",code:"LDR 104",track:"1",grp:"req",title:"Spiritual Disciplines for Leaders",
goal:"Build daily habits of prayer, Scripture, fasting, and worship that sustain your leadership.",
lessons:[
L("Prayer and the Word",["Psalm 1:1-3","Luke 11:1-4"],
 "Psalm 1 pictures a person who delights in God’s instruction as a tree planted by streams, bearing fruit in season. The disciples watched Jesus pray and asked Him to teach them how.",
 ["Daily time with God is the root system of a leader’s public work.","Prayer is conversation, not performance. Start simple and stay consistent."],
 ["Pick a time, place, and plan for fifteen minutes of Scripture and prayer.","Keep a short prayer list and record the answers you see."],
 ["What usually crowds out your time with God?","What would a faithful fifteen minutes look like this week?"],
 "Keep a seven-day log of your time in Scripture and prayer and note one thing you learned."),
L("Fasting, Worship, and Rest",["Matthew 6:16-18","Psalm 95:1-7"],
 "Jesus assumes His followers will fast and teaches that it is done for the Father, not for show. Psalm 95 calls God’s people to come before Him with thanksgiving and to bow down in worship.",
 ["Fasting trains the body to follow the spirit and sharpens dependence on God.","Worship keeps a leader’s heart pointed at God and not at results."],
 ["Try a one-meal fast with prayer, and talk to your pastor first if you have any health concerns.","Plan one unhurried time of worship each week away from your phone."],
 ["What are you most dependent on besides God?","How does worship change the way you lead?"],
 "Plan and complete a simple fast or a focused worship hour, then write a short reflection.")
],
quiz:[
Q("What does Psalm 1 compare a person who delights in God’s instruction to?","A tree planted by streams that bears fruit","A mountain that cannot be moved","A lamp on a stand","A shepherd with a staff"),
Q("How does Jesus teach His followers to fast?","Quietly, for the Father and not for show","Publicly, to inspire others","Only on holy days","Never"),
Q("What is the best foundation for a leader’s public work?","Consistent private time with God","Natural talent","A large platform","Detailed planning")],
proj:P("Personal Discipline Plan","Create a four-week plan with a daily time, a Scripture reading plan, a prayer list, and one fast or worship retreat.",
 ["Daily time, place, and reading plan","Prayer list with space for answers","Four-week check-in notes with your mentor"],2)});

C({id:"ldr-105",code:"LDR 105",track:"1",grp:"req",title:"Understanding the Bible",
goal:"Study Scripture carefully so you can teach it faithfully.",
lessons:[
L("Observe, Interpret, Apply",["Nehemiah 8:1-8","2 Timothy 3:16-17"],
 "When Ezra read the Law, the Levites helped the people understand by giving the sense of what was read. Paul says all Scripture is God-breathed and useful for teaching, correcting, and training in righteousness.",
 ["Ask three questions: What does it say? What does it mean? What should I do?","Context comes first: who wrote it, to whom, and why."],
 ["Choose a short passage and write down five observations.","Check your understanding in a study Bible or trusted commentary."],
 ["Which passage have you quoted without knowing its context?","What command in Scripture do you need to obey this week?"],
 "Work through a short passage such as Philippians 2:1-11 using observe, interpret, and apply, and write one page."),
L("Reading the Whole Story",["Luke 24:25-27","Acts 17:11"],
 "On the road to Emmaus Jesus explained how all the Scriptures pointed to Him. The Bereans received Paul’s message eagerly and examined the Scriptures daily to see whether it was true.",
 ["The Bible is one story that centers on Christ: creation, fall, redemption, restoration.","Test every teaching against Scripture, including your own."],
 ["Learn the big sections of the Bible: Law, history, wisdom, prophets, Gospels, letters.","Read one book start to finish this month."],
 ["Where do you tend to read the Bible only in pieces?","How do you handle a teaching that seems to conflict with Scripture?"],
 "Draw a simple map of the Bible’s main sections and write one sentence about how each points to Jesus.")
],
quiz:[
Q("What three questions guide Bible study in this course?","What does it say, what does it mean, what should I do","Who, when, and where","Why, how, and how long","Read, memorize, and recite"),
Q("What did the Bereans do with Paul’s message?","Examined the Scriptures daily to see if it was true","Accepted it without question","Rejected it","Waited for approval from leaders"),
Q("According to 2 Timothy 3:16, Scripture is useful for:","Teaching, correcting, and training in righteousness","Debating only","Private use only","Historical interest only")],
proj:P("Passage Study & Teaching Outline","Study one passage carefully and prepare a 15-minute teaching outline.",
 ["Observation, interpretation, and application notes","One-page teaching outline","Feedback from a mentor"],3)});

C({id:"ldr-106",code:"LDR 106",track:"1",grp:"req",title:"Discipling Others",
goal:"Help another person grow in faith through relationship, example, and simple tools.",
lessons:[
L("The Jesus Pattern",["Mark 3:13-15","John 1:35-39"],
 "Jesus appointed twelve to be with Him and then sent them out. When two disciples asked where He was staying, He said come and see, and they spent the day with Him.",
 ["Discipleship is walking with someone, not delivering a class.","Be with people first, then send them."],
 ["Pray for one or two people God wants you to invest in.","Invite them to share a meal and a simple Bible conversation."],
 ["Who is walking with you in faith right now?","What stops you from inviting someone to follow your life closely?"],
 "Begin a six-week discipleship rhythm with one person: a meal, Scripture, and prayer."),
L("Teach, Model, Release",["Philippians 4:9","2 Timothy 2:2"],
 "Paul tells the Philippians to put into practice what they learned, received, heard, and saw in him. He tells Timothy to pass truth along to faithful people who will teach others also.",
 ["People learn by hearing and seeing: I do, we do, you do.","Success is a disciple who disciples others."],
 ["Write a simple growth plan with three goals for the person you disciple.","Review progress every month and celebrate steps forward."],
 ["What is one habit you would be glad for someone to copy?","What would releasing your disciple look like?"],
 "Write a growth plan with three goals and review it with the person you are discipling.")
],
quiz:[
Q("What did Jesus do when He appointed the twelve?","Called them to be with Him and then sent them out","Gave them a written exam","Sent them out immediately","Asked them to teach classes"),
Q("What does 2 Timothy 2:2 describe?","Passing truth to faithful people who teach others","Private study","Starting a new church","Avoiding leadership"),
Q("What is the best measure of discipleship success?","A disciple who disciples others","Attendance numbers","Knowledge of facts","Years of involvement")],
proj:P("Discipleship Journal","Keep a six-week journal of meeting with someone you are discipling.",
 ["Meeting notes for six weeks","Growth plan with three goals","Reflection on what you learned about yourself"],4)});

C({id:"ldr-107",code:"LDR 107",track:"1",grp:"req",title:"Time, Priorities & Self-Leadership",
goal:"Manage your time, energy, and commitments so you can serve faithfully without burning out.",
lessons:[
L("Stewarding Time",["Ephesians 5:15-17","Psalm 90:12"],
 "Paul urges believers to make the most of every opportunity and to understand what the Lord’s will is. Moses prays that God would teach us to number our days so that we may gain a heart of wisdom.",
 ["Time is a stewardship. Your calendar shows your real priorities.","Plan first for the important, not only the urgent."],
 ["Track your time for one week in thirty-minute blocks.","Block time for God, family, work, rest, and ministry before filling the rest."],
 ["Where does your time go that you did not choose?","What good thing do you need to say no to?"],
 "Complete a one-week time audit and rewrite your weekly schedule."),
L("Boundaries, Rest, and Saying No",["Luke 4:42-44","Mark 6:30-32"],
 "Jesus left a crowd that wanted Him to stay because He had other towns to reach. He also called His tired disciples to come away and rest.",
 ["A clear no protects a better yes.","Rest is obedience, not laziness."],
 ["Write a short list of commitments you will keep and a list you will decline.","Plan one regular day of rest and protect it."],
 ["What expectations are you carrying that no one gave you?","Who can help hold you accountable to your limits?"],
 "Write your personal boundaries and share them with a mentor or family member.")
],
quiz:[
Q("What does Psalm 90:12 ask God to teach?","To number our days","To build bigger barns","To speak boldly","To avoid trouble"),
Q("Why did Jesus leave a crowd that wanted Him to stay?","He had other towns to reach","He was tired of people","He wanted to avoid conflict","He had finished teaching"),
Q("What does a one-week time audit show?","Where your time actually goes","Who your friends are","What others expect","How much you earn")],
proj:P("Personal Time & Priorities Plan","Build a plan that protects time for God, family, work, rest, and ministry.",
 ["One-week time audit","New weekly schedule with protected time","Boundaries list shared with an accountability partner"],3)});

C({id:"ldr-108",code:"LDR 108",track:"1",grp:"req",title:"Teaching & Public Speaking",
goal:"Communicate God’s Word clearly and confidently to individuals, groups, and congregations.",
lessons:[
L("Preparing a Message",["Ezra 7:10","Colossians 4:2-4"],
 "Ezra set his heart to study the Law of the Lord, to practice it, and to teach it. Paul asked for prayer that God would open a door for the message so that he could proclaim it clearly.",
 ["A good message begins in study and prayer, not slides.","Build around one main idea and support it with Scripture and a story."],
 ["Write the main idea in one sentence.","Outline three supporting points and one application."],
 ["What is the one thing your listeners must remember?","What is your biggest fear when speaking?"],
 "Prepare a five-minute devotional with a main idea, one passage, one story, and one application."),
L("Delivering with Clarity and Humility",["1 Corinthians 2:1-5","Nehemiah 8:8"],
 "Paul did not rely on impressive speech but on the Spirit’s power, so that faith would rest on God’s power. In Nehemiah 8 the teachers gave the sense of the reading so the people understood.",
 ["Speak plainly and look at people. The goal is understanding, not performance.","Practice out loud and ask for feedback."],
 ["Practice your message twice aloud and time it.","Invite two listeners to give honest feedback."],
 ["How do you know when your message is being understood?","How will you handle feedback without getting defensive?"],
 "Deliver your devotional to a small group and collect written feedback.")
],
quiz:[
Q("What was Ezra’s approach in Ezra 7:10?","He studied, practiced, and then taught the Law","He taught first and studied later","He avoided teaching","He delegated study to others"),
Q("What should a message be built around?","One main idea","Many ideas","A long story","A list of quotations"),
Q("What did Paul rely on in 1 Corinthians 2?","The Spirit’s power","Persuasive speech","His education","Large crowds")],
proj:P("Short Teaching Package","Prepare and deliver a short teaching and collect feedback.",
 ["Written outline and notes","Recorded or live delivery","Feedback summary and next steps"],3)});

C({id:"ldr-109",code:"LDR 109",track:"1",grp:"req",title:"Leading Meetings & Projects",
goal:"Plan, run, and follow through on meetings and ministry projects.",
lessons:[
L("Planning and Running Effective Meetings",["Proverbs 15:22","Acts 15:6-12"],
 "Proverbs says plans fail for lack of counsel but succeed with many advisers. At the Jerusalem council the leaders gathered, heard from Peter, Barnabas, and Paul, and weighed the matter together.",
 ["Every meeting needs a purpose, an agenda, and a decision or next step.","Invite input and then close with clear actions."],
 ["Send an agenda two days ahead with a purpose line.","End by listing who will do what by when and send notes within 24 hours."],
 ["Which meetings in your life could be a short message instead?","Who is not speaking in your meetings but should be?"],
 "Plan and lead one meeting with an agenda, notes, and an action list."),
L("Managing a Project from Idea to Debrief",["Nehemiah 2:17-18","Luke 14:28-30"],
 "Nehemiah described the problem, shared how God had helped him, and the people said let us start rebuilding. Jesus advises counting the cost before building.",
 ["Define the goal, budget, team, and timeline before starting.","Debrief afterward to capture what you learned."],
 ["Use a one-page project plan: goal, tasks, owners, dates, budget.","Hold a short debrief with three questions: what worked, what did not, what next."],
 ["What project did you start without counting the cost?","How will you know the project succeeded?"],
 "Create a one-page plan for a real or practice project and run a debrief after it finishes.")
],
quiz:[
Q("What should every meeting have?","A purpose, an agenda, and next steps","Long discussion","Refreshments","Unlimited time"),
Q("What does Luke 14:28 advise before building?","Counting the cost","Hiring workers","Buying materials","Announcing the plan"),
Q("What is the purpose of a debrief?","To capture lessons for next time","To assign blame","To end the project","To celebrate only")],
proj:P("Meeting & Project Toolkit","Build a toolkit you can reuse for every meeting and project you lead.",
 ["Meeting agenda and notes template","One-page project plan","Debrief summary"],3)});

C({id:"ldr-110",code:"LDR 110",track:"1",grp:"req",title:"Core Beliefs of the Christian Faith",
goal:"Understand and explain the foundational beliefs every Christian leader should hold with confidence.",
lessons:[
L("God, Jesus, and the Spirit",["Matthew 28:19","John 1:1-14"],
 "Jesus sends the church to baptize in the name of the Father, the Son, and the Holy Spirit. John opens with the Word who was with God and was God, and who became flesh and lived among us.",
 ["Christians confess one God in three persons: Father, Son, and Holy Spirit.","Jesus is fully God and fully human, the center of the gospel."],
 ["Write a short statement of what you believe about God, Jesus, and the Spirit.","Practice explaining the Trinity simply to a friend."],
 ["Which belief is hardest for you to explain?","How does your view of Jesus shape the way you lead?"],
 "Write a one-page statement of faith and review it with your pastor."),
L("Salvation, the Church, and Hope",["Ephesians 2:8-10","1 Corinthians 15:3-4"],
 "Paul teaches that salvation is by grace through faith, a gift of God, and that we are created for good works. He reminds the Corinthians of the gospel he received: Christ died for our sins, was buried, and was raised on the third day.",
 ["Salvation is a gift received by faith, not earned by works.","The church is God’s people on mission, awaiting Christ’s return."],
 ["Learn a simple way to share the gospel in under three minutes.","List the core beliefs your church teaches and where they come from in Scripture."],
 ["Where do you rely on works to feel accepted by God?","What gives you hope when leading feels heavy?"],
 "Practice the three-minute gospel with two people and record their questions.")
],
quiz:[
Q("According to Ephesians 2:8-9, how is a person saved?","By grace through faith as a gift of God","By works","By church membership","By good intentions"),
Q("What does John 1:14 say about Jesus?","The Word became flesh and lived among us","He was a prophet only","He was an angel","He was a teacher only"),
Q("What does the Trinity describe?","One God in three persons","Three separate gods","A title for Jesus","An idea about the church")],
proj:P("Statement of Faith & Gospel Presentation","Put your core beliefs in writing and practice sharing the gospel.",
 ["Personal statement of faith","Three-minute gospel outline","Pastor’s feedback on both"],3)});

C({id:"ldr-111",code:"LDR 111",track:"1",grp:"req",title:"Cultural Intelligence & Serving Bushwick",
goal:"Understand the people, languages, and cultures of your community and lead with respect.",
lessons:[
L("Seeing Your Neighbors",["Acts 17:22-28","1 Corinthians 9:19-23"],
 "Paul stood in Athens and began with what the people already knew, pointing to their own altars and poets. He told the Corinthians he became all things to all people so that he might save some.",
 ["Learn people’s stories before offering answers.","Adapt your approach without changing the gospel."],
 ["Spend an hour listening in a neighborhood setting such as a park, laundromat, or shop.","Learn to greet people in two languages spoken near your church."],
 ["Whose story in your neighborhood have you never asked about?","What assumptions do you carry about people different from you?"],
 "Interview two neighbors about their story and what they love about the community."),
L("Welcoming Every Family",["Galatians 3:26-28","Revelation 7:9-10"],
 "Paul says that in Christ the divisions that rank people no longer define them. John sees a multitude from every nation, tribe, people, and language worshiping together.",
 ["The church is a family of many cultures, languages, and ages.","Hospitality means making space, not only opening a door."],
 ["Review your welcome materials for language and clarity.","Pair new families with a host family who can help them connect."],
 ["Who might feel like an outsider in your ministry?","What would change if your church looked like Revelation 7?"],
 "Audit one ministry for accessibility and welcome and propose three improvements.")
],
quiz:[
Q("How did Paul begin his message in Athens?","With what the people already knew","With a rebuke","With a list of rules","With a miracle"),
Q("What does Revelation 7:9 describe?","People from every nation, tribe, and language worshiping together","A single nation worshiping","A council of leaders","A battle"),
Q("What does real hospitality involve?","Making space for people","Hosting events only","Serving food","Inviting only friends")],
proj:P("Neighborhood Welcome Plan","Learn your neighbors and make your ministry easier to join.",
 ["Two neighbor interviews","Welcome audit with three improvements","Plan to host or pair one new family"],3)});

C({id:"ldr-112",code:"LDR 112",track:"1",grp:"req",title:"Leadership Practicum",
goal:"Apply what you have learned by serving in a real ministry role under a mentor’s guidance.",
lessons:[
L("Serving Under Authority",["Luke 7:1-10","Hebrews 13:17"],
 "The centurion understood authority: he was under authority and had authority over others, and Jesus marveled at his faith. Hebrews asks believers to respond well to leaders who watch over their souls.",
 ["Good leaders know how to follow first.","Honest communication with your mentor protects both of you."],
 ["Agree on goals, hours, and reporting with your mentor.","Schedule a check-in every two weeks."],
 ["How do you respond when you disagree with a decision?","What do you want your mentor to help you see?"],
 "Sign a practicum agreement with your mentor that lists goals, hours, and check-in dates."),
L("Reflecting on Experience",["Proverbs 20:5","James 1:22-25"],
 "Proverbs says the purposes of the heart are deep waters but a person of understanding draws them out. James warns against hearing the word without doing it, like someone who looks in a mirror and forgets what they saw.",
 ["Experience becomes growth through honest reflection.","Record what you did, what you learned, and what you will change."],
 ["Write a short reflection after each service day.","Ask your mentor for specific feedback on strengths and growth areas."],
 ["What surprised you in this practicum?","What will you do differently going forward?"],
 "Complete at least ten hours of service and write a two-page reflection.")
],
quiz:[
Q("What does the centurion in Luke 7 demonstrate?","Understanding of authority and faith in Jesus’ word","Fear of Rome","A desire for a miracle show","A lack of faith"),
Q("Why reflect on experience?","It turns experience into growth","It fills time","It is required by law","It replaces service"),
Q("What does James 1:22 tell us?","Be doers of the word, not hearers only","Study more","Speak more","Wait for instructions")],
proj:P("Practicum Report","Serve at least ten hours in a ministry and report what you learned.",
 ["Signed practicum agreement","Ten-hour service log","Two-page reflection and mentor feedback"],10)});
/* ===== NEW TRACK 2 COURSES ===== */
C({id:"min-care",code:"MIN 201",track:"2",grp:"req",title:"Pastoral Care & Prayer Ministry",
goal:"Care for people in crisis, grief, and ordinary struggles with compassion and wisdom, and know when to refer.",
lessons:[
L("Listening and Praying with People",["Romans 12:15","James 5:13-16"],
 "Paul calls believers to rejoice with those who rejoice and weep with those who weep. James tells the sick to call for the elders to pray, and says the prayer offered in faith will make the sick person well.",
 ["Presence and listening matter more than answers.","Pray with people, keep confidences, and follow up."],
 ["Use a simple pattern: listen, reflect back, pray, plan a follow-up.","Never promise secrecy when someone may be in danger."],
 ["How do you respond when someone’s pain makes you uncomfortable?","What do you do with the advice you want to give?"],
 "Practice a care conversation with a partner and ask for feedback."),
L("Crisis, Grief, and Knowing When to Refer",["2 Corinthians 1:3-4","Proverbs 11:14"],
 "Paul says God comforts us in our troubles so that we can comfort others with the same comfort. Proverbs says there is safety in many advisers.",
 ["Know the limits of your role. You are not a counselor or a doctor.","Refer to pastors, licensed professionals, or emergency services when safety is at risk."],
 ["Build a referral list with pastors, counselors, and community resources.","If someone may harm themselves or others, contact emergency services right away."],
 ["What kinds of situations are beyond your training?","Who will you call when you are unsure?"],
 "Build a referral list for your ministry and review it with your pastor.")
],
quiz:[
Q("What does Romans 12:15 call believers to do?","Rejoice with those who rejoice and weep with those who weep","Fix every problem","Stay away from pain","Offer advice quickly"),
Q("When should a ministry leader refer someone?","When the situation is beyond the leader’s role or safety is at risk","Never","Only for minor issues","Only if asked"),
Q("What should you do if someone may harm themselves?","Contact emergency services and involve pastoral leadership","Keep it secret","Wait and see","Offer advice only")],
proj:P("Care Team Handbook","Prepare a handbook that equips your team to care well and refer wisely.",
 ["Care conversation pattern","Referral list","Confidentiality and safety guidelines"],3)});

C({id:"min-teach",code:"MIN 202",track:"2",grp:"req",title:"Teaching & Facilitating Groups",
goal:"Lead a small group or class where people learn, share, and apply Scripture.",
lessons:[
L("Preparing a Group Study",["Acts 2:42","Deuteronomy 6:6-7"],
 "The early believers devoted themselves to the apostles’ teaching, to fellowship, to breaking bread, and to prayer. Moses told Israel to talk about God’s words at home and on the road.",
 ["Good groups balance Scripture, relationship, and prayer.","Prepare questions, not just content."],
 ["Choose a passage and write five open questions.","Set ground rules for respect and confidentiality."],
 ["How do you handle someone who dominates the conversation?","What question could open your group’s heart?"],
 "Prepare a 45-minute group study plan with questions and a prayer time."),
L("Facilitating Conversation",["Proverbs 20:5","Luke 24:13-32"],
 "Proverbs says the purposes of the heart are deep waters that a person of understanding draws out. On the road to Emmaus Jesus asked questions and listened before He explained the Scriptures.",
 ["Ask, listen, and guide. Do not lecture.","Close with a clear application and next step."],
 ["Use follow-up questions such as: What makes you say that?","End each meeting with one practical step for the week."],
 ["What does your body language say to quiet people?","How will you follow up with absent members?"],
 "Lead your group study and ask for feedback on how it went.")
],
quiz:[
Q("What did the early church devote themselves to in Acts 2:42?","Teaching, fellowship, breaking bread, and prayer","Building projects","Public speaking","Political action"),
Q("What does a good facilitator do?","Asks, listens, and guides","Lectures","Avoids questions","Controls the conversation"),
Q("How should a group meeting end?","With one practical application","With a list of problems","Without prayer","With announcements only")],
proj:P("Group Study Series","Build and lead a short group study series.",
 ["Four-week study outline","Question bank","Feedback summary from participants"],3)});

/* ===== NEW TRACK 3 COURSES ===== */
C({id:"dpt-org",code:"MIN 301",track:"3",grp:"core",title:"Organizational Health & Conflict",
goal:"Build a healthy department culture and resolve conflict before it divides the team.",
lessons:[
L("Culture, Trust, and Communication",["Ephesians 4:1-6","Proverbs 15:22"],
 "Paul urges believers to be humble, gentle, and patient, bearing with one another in love and keeping the unity of the Spirit. Proverbs says plans succeed with many advisers.",
 ["Culture is what you repeat and tolerate.","Trust grows when leaders are honest, consistent, and kind."],
 ["Write three values and what each looks like in behavior.","Hold regular check-ins with department leaders."],
 ["What behavior are you tolerating that harms your culture?","How do people learn what you value?"],
 "Write your department values and share them with your leaders."),
L("Resolving Conflict and Leading Through Change",["Matthew 18:15-17","Acts 15:36-41"],
 "Jesus gives steps for dealing with sin between believers, aiming to win a brother. Paul and Barnabas disagreed sharply and parted ways, yet the mission continued.",
 ["Address conflict early and privately.","Explain why change is needed and involve people."],
 ["Use a conflict plan: private talk, a mediator, then the pastor.","Announce changes with the reason and the timeline."],
 ["What conflict are you avoiding?","How do you help people who resist change?"],
 "Create a conflict process and a communication plan for one upcoming change.")
],
quiz:[
Q("What does Ephesians 4 ask of believers?","Humility, gentleness, and patience in unity","Competition","Silence","Independence"),
Q("What is the first step in Matthew 18?","Talk privately with the person","Tell the church","Wait for it to pass","Write a report"),
Q("Why involve people in change?","Ownership and understanding grow","It is required","It is faster","To avoid blame")],
proj:P("Healthy Department Playbook","Write down how your department will stay healthy and handle conflict.",
 ["Department values","Conflict process","Change communication plan"],4)});

C({id:"dpt-plan",code:"MIN 302",track:"3",grp:"core",title:"Vision, Budgets & Reporting",
goal:"Turn vision into plans, budgets, and clear reports that serve the whole church.",
lessons:[
L("From Vision to Annual Plan",["Proverbs 16:3","Habakkuk 2:2-3"],
 "Proverbs says to commit your work to the Lord and your plans will be established. Habakkuk is told to write the vision and wait for its time.",
 ["Plans are tools for obedience, not substitutes for prayer.","Break vision into goals, steps, and owners."],
 ["Draft three annual goals with measures.","Assign an owner and a date to each step."],
 ["What goals have you set that no one owns?","How will you adjust the plan when things change?"],
 "Draft an annual plan with goals, steps, owners, and dates."),
L("Budgeting and Reporting with Integrity",["2 Corinthians 8:20-21","Luke 16:10-12"],
 "Paul arranged the handling of a large gift carefully so that no one could criticize him. Jesus says faithfulness in little leads to trust with much.",
 ["Spend according to the plan and keep receipts.","Report regularly to your pastor and the finance team."],
 ["Build a simple budget tied to your goals.","Submit a quarterly report with results and lessons."],
 ["How would your spending look to an outsider?","What could you stop funding?"],
 "Prepare a department budget and one quarterly report.")
],
quiz:[
Q("What does Proverbs 16:3 say?","Commit your work to the Lord","Avoid planning","Plan alone","Wait for money"),
Q("Why keep receipts and reports?","They support accountability","They fill folders","They are optional","They slow work"),
Q("What turns vision into action?","Goals, owners, and dates","More meetings","Slogans","Delays")],
proj:P("Department Plan & Report Packet","Prepare the plan, budget, and report that your department will use all year.",
 ["Annual plan","Budget","Quarterly report"],4)});

C({id:"dpt-youth2",code:"MIN 311",track:"3",grp:"spec",key:"youth",title:"Youth Department: Leader Pipeline & Succession",
goal:"Build a pipeline of student and adult leaders so the youth department thrives beyond any one person.",
lessons:[
L("Identifying and Training the Next Leaders",["2 Timothy 2:2","Acts 16:1-3"],
 "Paul entrusts truth to faithful people who will teach others. In Acts 16 Paul met Timothy, a young disciple well spoken of by the believers, and invited him to join the mission.",
 ["Look for faithfulness and availability, not only talent.","Give leaders a path: observe, assist, lead, mentor."],
 ["List five emerging leaders and a next step for each.","Create a leadership training calendar."],
 ["Who is ready for more responsibility?","What is slowing down leader development?"],
 "Create a leader pipeline chart with names, stages, and next steps."),
L("Succession and Transition",["Numbers 27:15-23","Deuteronomy 31:7-8"],
 "Moses asked God for a leader to succeed him, and Joshua was commissioned publicly. Moses encouraged Joshua to be strong and courageous before all Israel.",
 ["Plan for succession before you need it.","Bless and release new leaders publicly."],
 ["Write a transition plan with timelines and responsibilities.","Hold a commissioning moment."],
 ["What would happen if you left tomorrow?","How can you honor outgoing leaders?"],
 "Draft a succession plan for the youth department.")
],
quiz:[
Q("What does 2 Timothy 2:2 describe?","Multiplying leaders","Avoiding leadership","Private study","Debating"),
Q("Why plan succession early?","So leadership transitions are healthy","Because leaders always quit","To reduce work","To compete"),
Q("What should a leader pipeline include?","Clear stages and next steps","Only training","Only events","Only volunteers")],
proj:P("Youth Leader Pipeline Plan","Build the pipeline and the succession plan for your youth department.",
 ["Pipeline chart","Training calendar","Succession plan"],4)});

C({id:"dpt-children2",code:"MIN 321",track:"3",grp:"spec",key:"children",title:"Children’s Department: Family Engagement & Annual Planning",
goal:"Plan a year of children’s ministry that partners with families and supports teachers.",
lessons:[
L("Annual Scope and Seasons",["Psalm 78:4-7","Ecclesiastes 3:1"],
 "Psalm 78 stresses telling the next generation the praiseworthy deeds of the Lord. Ecclesiastes says there is a time for everything under heaven.",
 ["Plan around the church year and school calendar.","Balance teaching, events, and rest."],
 ["Map the year: major holidays, summer, and school breaks.","Budget for supplies and training."],
 ["Where does your calendar overload families?","What season needs more attention?"],
 "Draft an annual calendar for the children’s department."),
L("Engaging Families Beyond Sunday",["Proverbs 22:6","Ephesians 6:4"],
 "Proverbs says to train up a child in the way he should go. Paul urges parents to bring children up in the training and instruction of the Lord.",
 ["Equip parents with resources and encouragement.","Create low-pressure ways for families to connect."],
 ["Offer a quarterly family event with a faith conversation.","Send monthly updates and prayer requests."],
 ["How do you hear from parents?","What barriers keep families from engaging?"],
 "Plan two family events and a communication schedule.")
],
quiz:[
Q("What does Psalm 78 emphasize?","Telling the next generation about God’s deeds","Hiding history","Avoiding children","Short lessons"),
Q("What helps families most?","Resources and encouragement","Pressure","Complex programs","Silence"),
Q("How should the annual plan be built?","Around the church and school calendar","Randomly","Around holidays only","Around summer only")],
proj:P("Children’s Department Annual Plan","Create a year-long plan for your department.",
 ["Annual calendar","Family event plans","Communication schedule"],4)});

C({id:"dpt-men2",code:"MIN 331",track:"3",grp:"spec",key:"men",title:"Men’s Department: Marriage, Fatherhood & Community Impact",
goal:"Strengthen men as husbands and fathers and lead men to serve the wider community.",
lessons:[
L("Strengthening Marriages and Fathering",["Ephesians 5:25-33","Proverbs 22:6"],
 "Paul calls husbands to love their wives as Christ loved the church. Proverbs encourages training children in the way they should go.",
 ["Healthy homes strengthen the church.","Offer practical teaching and community for husbands and fathers."],
 ["Host a marriage and fatherhood workshop.","Connect couples with mentor couples."],
 ["What support do men in your church lack?","How do you honor wives and families in your events?"],
 "Plan a workshop for husbands and fathers and invite mentors."),
L("Mobilizing Men for Community Impact",["Micah 6:8","James 1:27"],
 "Micah says God requires justice, mercy, and walking humbly with Him. James describes pure religion as caring for orphans and widows in their distress.",
 ["Men can mentor boys, repair homes, and support families in need.","Partner with local organizations."],
 ["Identify two community partners for service.","Set an annual impact goal."],
 ["What needs in your neighborhood fit your men’s gifts?","How will you share results with the church?"],
 "Create a community impact plan with partners and goals.")
],
quiz:[
Q("How does Paul describe a husband’s love?","As Christ loved the church","As authority","As distance","As silence"),
Q("What does Micah 6:8 require?","Justice, mercy, and humble walking with God","Sacrifices only","Strength","Wealth"),
Q("Why partner with community organizations?","To meet needs more effectively","To avoid work","To gain publicity","To limit service")],
proj:P("Men’s Department Impact Plan","Plan the workshops and community service for your men’s department.",
 ["Workshop outline","Mentor couple plan","Community impact plan"],4)});

C({id:"dpt-women2",code:"MIN 341",track:"3",grp:"spec",key:"women",title:"Women’s Department: Conferences, Care & Multiplication",
goal:"Plan conferences and care systems that multiply women leaders across the church.",
lessons:[
L("Planning a Women’s Conference",["Nehemiah 8:1-3","Hebrews 10:24-25"],
 "In Nehemiah 8 the people gathered as one and listened attentively to the reading of the Law. Hebrews urges believers to meet together and encourage one another.",
 ["A conference needs a purpose, a team, a budget, and a follow-up plan.","Design for different life stages and languages."],
 ["Write a purpose statement and choose a theme.","Build a timeline starting six months out."],
 ["Who is likely to be left out?","What lasting fruit do you hope to see?"],
 "Draft a conference plan with budget, timeline, and roles."),
L("Multiplying Leaders and Care Networks",["Titus 2:3-5","Acts 18:26"],
 "Paul encourages older women to teach and train younger women. Priscilla and Aquila took Apollos aside to explain the way of God more accurately.",
 ["Mentoring multiplies leaders.","Care networks make sure no woman is forgotten."],
 ["Create a mentor map linking leaders and new leaders.","Train care captains for each ministry area."],
 ["Who is ready to lead next?","How will you honor women who have served for years?"],
 "Create a mentor map and a care network structure.")
],
quiz:[
Q("What did Nehemiah 8 describe?","People gathering to listen attentively to God’s Word","A building project","A meal","A military campaign"),
Q("What does mentoring do?","Multiplies leaders","Replaces teaching","Ends service","Creates competition"),
Q("Why follow up after a conference?","To produce lasting fruit","To collect donations","To close the event","To advertise")],
proj:P("Women’s Conference & Mentor Plan","Plan a conference and the mentoring structure that follows it.",
 ["Conference plan","Mentor map","Care network structure"],4)});

C({id:"dpt-outreach2",code:"MIN 351",track:"3",grp:"spec",key:"outreach",title:"Outreach Department: Missions & Global Partnerships",
goal:"Lead the church in supporting missions locally and globally with wisdom and accountability.",
lessons:[
L("A Missions Vision for the Church",["Matthew 24:14","Acts 13:1-3"],
 "Jesus says the gospel of the kingdom will be preached in the whole world as a testimony to all nations. The church at Antioch worshiped and fasted, and the Spirit set apart Barnabas and Saul.",
 ["Missions begins with prayer and listening.","Partner with trusted workers and agencies."],
 ["Create a missions prayer calendar.","Ask partners what help they actually need."],
 ["Where is God calling your church to partner?","How do you keep missions visible?"],
 "Draft a one-page missions vision and prayer calendar."),
L("Supporting Missionaries and Short-Term Teams",["3 John 5-8","Philippians 4:15-17"],
 "John commends believers who support traveling workers so that they may be fellow workers for the truth. The Philippians partnered with Paul in giving and receiving.",
 ["Support workers with prayer, funds, and care.","Prepare short-term teams to serve humbly and safely."],
 ["Create a missionary care plan.","Develop team training and a risk plan."],
 ["How will you ensure short-term trips help and do not harm?","What does accountability look like?"],
 "Create a missions support plan with budget and accountability measures.")
],
quiz:[
Q("What does Matthew 24:14 say?","The gospel will be preached to all nations","The end is near","Missions is optional","Only leaders go"),
Q("What helps missions partners most?","Prayer, funds, and care","Occasional visits","Gifts without conversation","Advertising"),
Q("Why train short-term teams?","To serve humbly and safely","To fill seats","To save money","To gain publicity")],
proj:P("Missions Strategy Brief","Write the vision, partner list, and accountability plan for your church’s missions work.",
 ["Missions vision and calendar","Partner list","Support and accountability plan"],4)});

C({id:"dpt-media2",code:"MIN 361",track:"3",grp:"spec",key:"media",title:"Media Department: Digital Discipleship & Analytics",
goal:"Use digital tools to disciple people and measure what matters.",
lessons:[
L("Digital Discipleship",["Matthew 28:19-20","Acts 17:11"],
 "Jesus sends His followers to make disciples of all nations and to teach them. The Bereans examined the Scriptures daily.",
 ["Media can invite people into relationships and next steps.","Offer content that teaches and connects."],
 ["Create a plan: sermon follow-up, devotionals, and prayer requests.","Link online viewers to a real person."],
 ["What next step do online visitors take?","How do you care for people who only watch online?"],
 "Design a digital discipleship pathway with next steps."),
L("Measuring What Matters",["Luke 14:28","Proverbs 14:15"],
 "Jesus advises counting the cost before building. Proverbs says the prudent give thought to their steps.",
 ["Choose a few meaningful measures such as follow-up requests and group sign-ups.","Use data to serve people, not to pressure them."],
 ["Set up a monthly dashboard with five metrics.","Review results with pastoral staff."],
 ["What numbers tempt you to compare?","How will you protect privacy?"],
 "Build a one-page dashboard and review it with your pastor.")
],
quiz:[
Q("What is the goal of digital discipleship?","Move people toward relationships and growth","Increase views","Replace church","Sell content"),
Q("What should metrics be used for?","Serving people better","Pressuring staff","Competition","Advertising"),
Q("What does Luke 14:28 teach?","Count the cost","Move quickly","Avoid planning","Use data only")],
proj:P("Digital Discipleship Plan","Design the pathway and measures for your digital ministry.",
 ["Digital pathway","Metrics dashboard","Privacy guidelines"],4)});
/* ===== NEW TRACK A COURSES (ADM 404-415) ===== */
C({id:"adm-404",code:"ADM 404",track:"A",grp:"req",title:"Bookkeeping & Financial Reporting Basics",
goal:"Record, reconcile, and report church finances accurately.",
lessons:[
L("Recording Income and Expenses",["Proverbs 27:23-24","Luke 16:10"],
 "Proverbs urges knowing the condition of your flocks. Jesus says whoever is faithful in little will be faithful in much.",
 ["Every dollar needs a record: source, purpose, and approval.","Use a consistent chart of accounts and fund tracking."],
 ["Set up categories for income, expenses, and restricted funds.","Enter transactions weekly and file receipts."],
 ["What would break if you missed a month?","How are restricted gifts tracked?"],
 "Record a sample month of transactions using a simple ledger or spreadsheet."),
L("Reconciling and Reporting",["Nehemiah 7:1-2","Romans 12:17"],
 "Nehemiah put a trustworthy man in charge because he was faithful and feared God more than most. Paul urges taking thought for what is honorable in the sight of everyone.",
 ["Reconcile bank statements monthly and investigate differences.","Produce a monthly statement of income and expenses."],
 ["Reconcile one bank statement and explain any differences.","Prepare a one-page report for leadership."],
 ["Who reviews your work?","What questions would a board ask?"],
 "Reconcile a sample bank statement and write a one-page report.")
],
quiz:[
Q("What does every transaction need?","A record with source, purpose, and approval","A verbal note","Cash only","No documentation"),
Q("How often should bank accounts be reconciled?","Monthly","Yearly","Never","Only when a problem appears"),
Q("Why report to leadership?","Transparency and accountability","Habit","Competition","Advertising")],
proj:P("Monthly Financial Package","Produce a full month of records, a reconciliation, and a report.",
 ["Sample ledger","Reconciliation","One-page report"],4)});

C({id:"adm-405",code:"ADM 405",track:"A",grp:"req",title:"Budgeting & Forecasting for Ministries",
goal:"Build budgets and forecasts that support the church’s mission.",
lessons:[
L("Building a Ministry Budget",["Luke 14:28-30","Proverbs 21:5"],
 "Jesus describes counting the cost before building a tower. Proverbs says the plans of the diligent lead to plenty.",
 ["Start with mission and priorities, then costs.","Include reserves and unexpected costs."],
 ["Gather ministry requests with purpose and cost.","Compare them to last year’s actuals."],
 ["How do you decide between good options?","What reserves does your church hold?"],
 "Draft a mock annual budget from sample ministry requests."),
L("Forecasting and Adjusting",["Proverbs 16:9","Genesis 41:34-36"],
 "Proverbs says a person plans their way but the Lord establishes their steps. Joseph advised storing grain in the good years to prepare for the lean ones.",
 ["Forecast income trends and plan for seasonal changes.","Review the budget quarterly and adjust."],
 ["Create a 12-month cash flow forecast.","Hold a quarterly review with the pastor and the finance team."],
 ["How will you respond to a shortfall?","What does faithful saving look like?"],
 "Create a 12-month cash flow forecast and a quarterly review checklist.")
],
quiz:[
Q("What do you start with when building a budget?","Mission and priorities","Last year’s total","Expected income only","Equipment lists"),
Q("Why keep reserves?","To handle surprises","To avoid giving","To invest","To impress"),
Q("How often should budgets be reviewed?","Quarterly","Never","Once","Only at year end")],
proj:P("Budget & Forecast Workbook","Build a budget and a forecast you could hand to a finance team.",
 ["Annual budget","Cash flow forecast","Quarterly review checklist"],4)});

C({id:"adm-406",code:"ADM 406",track:"A",grp:"req",title:"Payroll, Benevolence & Expense Policies",
goal:"Create fair, clear policies for paying staff, helping people in need, and approving expenses. This course is not legal or tax advice. Confirm specifics with a qualified professional.",
lessons:[
L("Paying Staff Fairly and Lawfully",["1 Timothy 5:17-18","Leviticus 19:13"],
 "Paul says elders who lead well are worthy of double honor and that the worker deserves his wages. Leviticus says not to hold back the wages of a hired worker overnight.",
 ["Written agreements and timely payment protect everyone.","Know which requirements apply to employees and contractors, and use a qualified professional."],
 ["Gather job descriptions, pay schedules, and records.","Ask your accountant or payroll provider to review your process."],
 ["Are expectations for staff clear and fair?","Who checks payroll before it is paid?"],
 "Draft a payroll process checklist and review it with a qualified professional."),
L("Benevolence and Expense Approval",["Acts 6:1-3","Proverbs 19:17"],
 "The early church organized to care for widows fairly and chose trustworthy people to oversee it. Proverbs says whoever is kind to the poor lends to the Lord.",
 ["Set criteria, limits, and confidentiality for benevolence.","Require approvals and receipts for expenses."],
 ["Write a benevolence policy with criteria and limits.","Create an expense request form with approvals."],
 ["How will you treat requests consistently?","How will you protect dignity?"],
 "Write a benevolence policy and an expense form.")
],
quiz:[
Q("What does Leviticus 19:13 say about wages?","Do not hold them back","Delay them when needed","Pay in gifts","Pay later"),
Q("What should a benevolence policy include?","Criteria, limits, and confidentiality","Public lists","Cash only","No approval"),
Q("Who should review payroll practices?","A qualified professional","Anyone","No one","A volunteer only")],
proj:P("Policy Handbook: Payroll, Benevolence & Expenses","Write the three policies and the forms that go with them.",
 ["Payroll process checklist","Benevolence policy","Expense form and approval path"],4)});

C({id:"adm-407",code:"ADM 407",track:"A",grp:"req",title:"Giving Systems, Donor Care & Online Giving",
goal:"Run secure giving systems and care for donors with gratitude and integrity.",
lessons:[
L("Receiving and Recording Gifts",["2 Corinthians 9:6-8","Matthew 6:1-4"],
 "Paul says each should give what they have decided in their heart, not reluctantly or under compulsion, for God loves a cheerful giver. Jesus teaches giving quietly and not for show.",
 ["Handle gifts with two-person controls and prompt deposits.","Use clear records and year-end statements."],
 ["Document offering counting and deposit steps.","Create a giving statement schedule."],
 ["How do you respect donors’ privacy?","What is your process when a gift is designated?"],
 "Document the offering and deposit procedure and the year-end statement process."),
L("Online Giving and Gratitude",["Philippians 4:14-19","1 Chronicles 29:14"],
 "Paul thanks the Philippians for sharing in his troubles and for their gifts. David acknowledges that everything comes from God and is given back to Him.",
 ["Choose secure platforms and limit access.","Thank donors personally and report impact."],
 ["Review online giving platform settings and permissions.","Write a thank-you plan for first-time and regular donors."],
 ["How do you tell the story of impact?","Who has access to donor data?"],
 "Create an online giving checklist and a donor thank-you plan.")
],
quiz:[
Q("What does 2 Corinthians 9:7 say God loves?","A cheerful giver","A large giver","A public giver","A regular giver"),
Q("What protects offerings?","Two-person controls","A single counter","No records","Keeping cash in the office"),
Q("How should donors be treated?","With gratitude and privacy","As numbers","Publicly","Only when giving")],
proj:P("Giving & Donor Care Guide","Document how gifts are received, recorded, and acknowledged.",
 ["Offering procedure","Online giving checklist","Donor thank-you plan"],4)});

C({id:"adm-408",code:"ADM 408",track:"A",grp:"req",title:"Facilities & Property Management",
goal:"Keep church buildings safe, clean, and ready for ministry.",
lessons:[
L("Maintenance, Safety, and Security",["Proverbs 24:3-4","Nehemiah 4:9"],
 "Proverbs says a house is built by wisdom and its rooms are filled with rare and beautiful treasures. Nehemiah’s builders prayed and set a guard day and night.",
 ["Preventive maintenance saves money.","Safety plans include fire, medical, weather, and security."],
 ["Create a maintenance calendar and a vendor list.","Run annual safety drills."],
 ["What repairs are overdue?","Who has keys and codes?"],
 "Create a facility maintenance and safety calendar."),
L("Scheduling and Stewarding Space",["1 Corinthians 14:40","Luke 14:28"],
 "Paul asks that everything be done decently and in order. Jesus advises counting the cost before building.",
 ["A shared calendar prevents conflict.","Set rules for setup, cleanup, and rentals."],
 ["Create a room request process and a use policy.","Review insurance requirements for outside groups."],
 ["How do you decide who uses the space?","What does good stewardship of property look like?"],
 "Write a facility use policy and a room request form.")
],
quiz:[
Q("What does preventive maintenance do?","Saves money and prevents problems","Costs more","Delays repairs","Replaces inspections"),
Q("Why keep a shared calendar?","To prevent conflicts","To fill time","To limit use","For decoration"),
Q("What should a safety plan include?","Fire, medical, weather, and security","Fire only","Security only","No plan")],
proj:P("Facility Operations Binder","Assemble the documents that keep your building running well.",
 ["Maintenance and safety calendar","Facility use policy","Vendor and key list"],4)});

C({id:"adm-409",code:"ADM 409",track:"A",grp:"req",title:"Church Technology & Records Management",
goal:"Manage church data, software, and records securely and consistently.",
lessons:[
L("Church Management Software and Data",["Proverbs 11:13","Matthew 7:12"],
 "Proverbs says a trustworthy person keeps a confidence. Jesus’ golden rule applies to how we handle people’s information.",
 ["Collect only the data you need and protect it.","Use roles so people see only what they must."],
 ["List what data you collect and who can access it.","Set up strong passwords and two-factor authentication."],
 ["What data would hurt someone if exposed?","Who removes access when a volunteer leaves?"],
 "Create a data inventory and access list."),
L("Backups, Retention, and Transitions",["Proverbs 27:23","1 Corinthians 14:40"],
 "Proverbs urges knowing the condition of your flocks. Paul asks that everything be done in order.",
 ["Back up data and test restoring it.","Keep documentation so others can take over."],
 ["Schedule automatic backups and test a restore.","Write a transition checklist for staff changes."],
 ["What would you lose if the office computer failed?","Who else knows the passwords?"],
 "Write a backup and retention plan.")
],
quiz:[
Q("What principle guides data collection?","Collect only what you need","Collect everything","Share widely","Keep indefinitely"),
Q("Why test restores?","To make sure backups work","For practice","To save time","To delete data"),
Q("When should a volunteer’s access end?","When they leave the role","Never","After a year","Only when asked")],
proj:P("Records & Data Protection Plan","Document how the church protects and keeps its records.",
 ["Data inventory","Backup plan","Access and transition checklist"],4)});

C({id:"adm-410",code:"ADM 410",track:"A",grp:"req",title:"Human Resources & Volunteer Management",
goal:"Recruit, onboard, support, and care for staff and volunteers.",
lessons:[
L("Recruiting and Onboarding",["Exodus 18:21","Acts 6:3"],
 "Jethro advised choosing capable people who fear God, are trustworthy, and hate dishonest gain. The apostles asked the church to choose people known for the Spirit and wisdom.",
 ["Clear role descriptions and screening protect everyone.","Onboarding shapes the experience."],
 ["Write role descriptions and an application.","Create an onboarding checklist."],
 ["How do you screen volunteers for sensitive roles?","What does a new volunteer need in week one?"],
 "Create a volunteer application and an onboarding checklist."),
L("Supporting, Evaluating, and Thanking",["1 Thessalonians 5:12-13","Colossians 4:1"],
 "Paul asks believers to respect and esteem those who labor among them. He also tells masters to provide what is right and fair to their servants.",
 ["Regular check-ins prevent burnout.","Evaluate with kindness and clarity."],
 ["Hold annual reviews for staff and key volunteers.","Plan appreciation moments."],
 ["How do you handle poor performance?","What makes people feel valued?"],
 "Create an evaluation form and an appreciation plan.")
],
quiz:[
Q("What protects everyone in recruiting?","Clear role descriptions and screening","Verbal agreements","Open invitations","No process"),
Q("Why hold regular check-ins?","To prevent burnout","To add meetings","To judge","To collect data"),
Q("How should evaluation be done?","Kindly and clearly","Harshly","Rarely","Secretly")],
proj:P("Volunteer & Staff Care System","Build the forms and routines that keep your people supported.",
 ["Application and onboarding checklist","Evaluation form","Appreciation plan"],4)});

C({id:"adm-411",code:"ADM 411",track:"A",grp:"req",title:"Risk, Insurance & Safeguarding Administration",
goal:"Administer safeguarding, insurance, and incident procedures that protect people and the church.",
lessons:[
L("Safeguarding Systems",["Psalm 82:3","Proverbs 22:3"],
 "Psalm 82 calls God’s people to defend the weak and the fatherless. Proverbs says the prudent see danger and take refuge.",
 ["Policies must be written, trained, and enforced.","Screen and supervise those working with children and vulnerable adults."],
 ["Review the safeguarding policy with all workers each year.","Track screening dates and training."],
 ["Where does policy depend on trust alone?","Who receives concerns?"],
 "Create a screening and training tracker."),
L("Insurance and Incident Response",["Proverbs 27:12","Luke 14:28"],
 "Proverbs says the prudent see danger and take refuge, but the simple keep going and pay the penalty. Jesus advises counting the cost before building.",
 ["Review coverage annually with a qualified agent.","Document incidents and follow your response plan."],
 ["Create an incident report form and response steps.","Keep a list of insurance policies and renewal dates."],
 ["What incidents are most likely in your church?","Who is the first call?"],
 "Create an incident response plan and a policy list.")
],
quiz:[
Q("What must safeguarding policies be?","Written, trained, and enforced","Optional","Verbal","Secret"),
Q("How often should insurance be reviewed?","Annually","Never","Every five years","After a claim only"),
Q("What should happen after an incident?","Document it and follow the response plan","Ignore it","Wait","Discuss it informally")],
proj:P("Safeguarding & Risk Binder","Assemble the trackers, forms, and plans that protect your church.",
 ["Screening tracker","Incident response plan","Insurance list"],4)});

C({id:"adm-412",code:"ADM 412",track:"A",grp:"req",title:"Event & Conference Administration",
goal:"Plan and run events and conferences with excellence and accountability.",
lessons:[
L("Planning Events",["1 Corinthians 14:40","Luke 14:28-30"],
 "Paul asks that everything be done in a fitting and orderly way. Jesus advises counting the cost before building.",
 ["Define purpose, audience, budget, and timeline first.","Assign owners to each task."],
 ["Build a planning timeline from the event date backward.","Create a budget with a contingency."],
 ["What outcome defines success?","Who will run the day-of schedule?"],
 "Create an event plan with timeline, budget, and roles."),
L("Registration, Logistics, and Debrief",["Nehemiah 3:1-12","Proverbs 15:22"],
 "Nehemiah 3 shows many groups each repairing a section of the wall. Proverbs says plans succeed with many advisers.",
 ["Make registration simple and communication clear.","Debrief with data and stories."],
 ["Set up registration, check-in, and signage.","Hold a debrief within a week."],
 ["What will frustrate guests?","What will you change next time?"],
 "Create registration and logistics checklists and a debrief form.")
],
quiz:[
Q("What should you define first when planning an event?","Purpose and audience","Menu","Decorations","Seating"),
Q("Why assign owners?","So tasks are completed","For credit","For blame","For reports"),
Q("When should you debrief?","Soon after the event","Never","Next year","Only if there were problems")],
proj:P("Event Administration Toolkit","Build a toolkit you can reuse for every event.",
 ["Event plan","Logistics checklists","Debrief form"],4)});

C({id:"adm-413",code:"ADM 413",track:"A",grp:"req",title:"Church Policies, Bylaws & Board Support",
goal:"Support leaders by keeping policies, bylaws, and board records current and clear.",
lessons:[
L("Writing and Maintaining Policies",["Proverbs 11:14","Acts 15:28"],
 "Proverbs says there is safety in many advisers. The Jerusalem leaders wrote a letter saying it seemed good to the Holy Spirit and to them.",
 ["Policies should be clear, short, and approved by the right body.","Review policies on a schedule."],
 ["Create a policy index with owners and review dates.","Use a standard template."],
 ["Which policies are outdated?","Who approves changes?"],
 "Create a policy index and a template."),
L("Supporting the Board or Leadership Team",["Exodus 18:19-23","Hebrews 13:17"],
 "Jethro advised Moses to teach the people, choose capable leaders, and share the load. Hebrews calls leaders to keep watch over souls.",
 ["Prepare agendas and packets and capture decisions.","Follow up on action items."],
 ["Prepare a board packet template.","Track action items after each meeting."],
 ["How do you help leaders make good decisions?","What would make meetings more effective?"],
 "Create a board packet template and an action tracker.")
],
quiz:[
Q("What should policies be?","Clear, short, and approved","Long and detailed","Verbal","Hidden"),
Q("What does a meeting packet do?","Helps leaders prepare","Delays meetings","Replaces discussion","Reduces records"),
Q("Why track action items?","To ensure follow-through","To assign blame","To fill files","To avoid meetings")],
proj:P("Policy & Board Support Kit","Create the templates that keep your leaders prepared.",
 ["Policy index and template","Board packet template","Action tracker"],4)});

C({id:"adm-414",code:"ADM 414",track:"A",grp:"req",title:"Office Administration & Hospitality",
goal:"Run the church office with order, kindness, and clear communication.",
lessons:[
L("Front Desk, Phones, and Communication",["Proverbs 15:1","Hebrews 13:2"],
 "Proverbs says a gentle answer turns away wrath. Hebrews encourages hospitality to strangers.",
 ["The office is often the first impression of the church.","Use scripts and a clear process for requests."],
 ["Create a greeting script and a request log.","Respond to messages within a set time."],
 ["How do you handle a frustrated caller?","What information is confidential?"],
 "Create a front desk guide with scripts and a request log."),
L("Systems and Support for Ministry Leaders",["Romans 12:6-8","Colossians 3:23"],
 "Paul lists leading and serving among the gifts to be used with diligence. Colossians encourages work done wholeheartedly for the Lord.",
 ["Provide templates and systems to help leaders.","Keep supplies, keys, and forms organized."],
 ["Create templates for flyers, forms, and reports.","Schedule a monthly check-in with ministry leaders."],
 ["What tasks do leaders repeat that you could simplify?","How do you handle competing requests?"],
 "Create a ministry leader support packet.")
],
quiz:[
Q("Why do scripts help at the front desk?","They give clear, kind responses","They replace listening","They reduce hospitality","They hide information"),
Q("How does Colossians 3:23 describe good work?","Wholeheartedly, as for the Lord","Quickly","Only when noticed","Only when paid"),
Q("What helps ministry leaders most?","Templates and systems","More meetings","Fewer resources","Strict rules")],
proj:P("Office Handbook","Write the handbook that lets anyone run the front office well.",
 ["Front desk guide","Request log","Leader support packet"],4)});

C({id:"adm-415",code:"ADM 415",track:"A",grp:"req",title:"Administration Capstone: Church Operations Review",
goal:"Apply everything you have learned by reviewing one area of church operations and recommending improvements.",
lessons:[
L("Reviewing an Area of Operations",["Lamentations 3:40","Proverbs 14:15"],
 "Lamentations calls the people to examine and test their ways and return to the Lord. Proverbs says the prudent give thought to their steps.",
 ["Choose one area such as finance, facilities, or records.","Gather facts through interviews and documents."],
 ["Define scope, questions, and a timeline.","Interview three people and review five documents."],
 ["What do you hope to improve?","How will you share findings kindly?"],
 "Write a scope and interview plan for your review."),
L("Presenting Recommendations",["Proverbs 15:22","Ephesians 4:15"],
 "Proverbs says plans succeed with many advisers. Paul urges speaking the truth in love.",
 ["Present findings with evidence and respect.","Offer priorities, owners, and timelines."],
 ["Prepare a two-page report and a short presentation.","Ask leadership for feedback and a decision."],
 ["What recommendation will be hardest to deliver?","How will you follow up?"],
 "Present your recommendations to your pastor or board.")
],
quiz:[
Q("What should a review begin with?","A defined scope","Opinions","A budget request","A final report"),
Q("How should findings be presented?","With evidence and respect","Quickly","Privately only","Without recommendations"),
Q("What makes recommendations useful?","Priorities, owners, and timelines","Length","Complexity","Anonymity")],
proj:P("Operations Review Report","Review one area of church operations and recommend improvements.",
 ["Scope and interview plan","Two-page findings and recommendations","Presentation and feedback summary"],8)});
/* ================= NEW MEMBERS CLASS (track N) ================= */
C({id:"nmc-101",code:"NMC 101",track:"N",grp:"req",title:"Welcome to the Family",
goal:"Understand why the church is a family, what BFM exists to do, and how you belong here.",
lessons:[
L("Why the Church Is a Family",["Ephesians 2:19-22","1 Timothy 3:15","Acts 2:42-47"],
 "Paul tells believers they are no longer strangers but members of God’s household, built together on the foundation of Christ. The first church in Jerusalem shared teaching, meals, prayer, and their lives, and the Lord added to their number daily.",
 ["The church is not a building or an event. It is God’s household, and every believer has a place in it.","Belonging comes before performing. You are welcomed because of Christ, not because of what you can do.","A healthy family shares teaching, prayer, meals, and burdens, not only a Sunday hour."],
 ["Write down what you hoped to find in a church home and what you are afraid of.","Introduce yourself to at least three people this month and learn one thing about each.","Ask someone who has been here a while what the church family has meant to them."],
 ["What does it mean to you that God calls the church His household?","What makes it hard for you to feel like you belong, and what would help?"],
 "Attend a service and one other gathering this month, then write down who welcomed you and who you would like to know better."),
L("Our Mission: Reach, Teach, Equip",["Matthew 28:18-20","Ephesians 4:11-13","Luke 19:10"],
 "Jesus sends His followers to make disciples by going, baptizing, and teaching them to obey all He commanded. Ephesians says leaders are given to equip God’s people for works of service so that the whole body grows up in Christ.",
 ["To reach is to go to people with the love and message of Jesus, inside and outside the walls of the church.","To teach is to ground people in the truth of God’s Word so they can know Him and obey Him.","To equip is to help every person find and walk boldly in their calling. Ministry belongs to the whole church, not only to leaders."],
 ["Name one person you could reach with an invitation or an act of kindness this month.","Choose one truth from Scripture you want to understand better and ask your pastor where to start.","Write down one way you would like to be equipped for service."],
 ["Which of the three, reach, teach, or equip, feels most natural to you? Which feels hardest?","Who reached you with the gospel, and how can you do the same for someone else?"],
 "Write a short prayer asking God to show you where you fit in the church’s work of reaching, teaching, and equipping."),
L("Belonging in Bushwick",["Jeremiah 29:4-7","Matthew 5:13-16","Acts 17:26-27"],
 "God told the exiles in Babylon to build homes, plant gardens, and seek the peace of the city where He had placed them. Jesus calls His followers salt and light, whose good works lead people to praise the Father. Paul says God determined the places where people would live so that they would seek Him.",
 ["God placed you in this neighborhood on purpose. Your block, building, and workplace are your mission field.","Seeking the good of the city means serving it through prayer, presence, and practical help.","Good works are not a substitute for the gospel. They open doors for it."],
 ["Take a prayer walk through your block and pray for the people and places you pass.","Learn the names of three neighbors or local business owners.","Find out one real need in the community that the church could help meet."],
 ["What do you love about your neighborhood? What breaks your heart about it?","How could you be salt and light in the place you spend most of your time?"],
 "Complete a prayer walk and write a one-page note listing what you saw, who you prayed for, and one way you could serve.")
],
quiz:[
Q("How does Ephesians 2:19-22 describe believers?","As members of God’s household","As guests of the church","As employees of the church","As spectators"),
Q("What happened among the first believers in Acts 2:42-47?","They devoted themselves to teaching, fellowship, meals, and prayer","They avoided each other","They met only once a year","They kept the gospel secret"),
Q("According to Ephesians 4:11-13, why does God give leaders to the church?","To equip God’s people for works of service","To make decisions for everyone","To keep the church small","To replace the need for personal faith"),
Q("What did God tell the exiles to do in Jeremiah 29:4-7?","Seek the peace of the city where He had placed them","Leave the city immediately","Ignore their neighbors","Wait without building anything"),
Q("What is the role of good works in Matthew 5:16?","They lead people to praise the Father","They earn salvation","They replace prayer","They are optional for believers")],
proj:P("My Welcome Notes","Document your first steps into the church family and your first look at the neighborhood God has called you to love.",
 ["A list of three people you met and one thing you learned about each","Notes from a service or gathering you attended","A prayer-walk summary with one community need you noticed","A short paragraph on what you hope to receive and give here"],2,2)
});
C({id:"nmc-102",code:"NMC 102",track:"N",grp:"req",title:"Salvation and New Life",
goal:"Understand the gospel, respond to it with confidence, and begin growing as a new creation.",
lessons:[
L("The Good News",["Romans 3:23","Romans 6:23","John 3:16","Ephesians 2:8-9"],
 "Scripture teaches that everyone has sinned and fallen short of God’s glory, and that the wages of sin is death. God loved the world so much that He gave His Son, and salvation is a gift received by grace through faith, not earned by good works.",
 ["Sin separates every person from God. No amount of effort can close the gap.","Jesus died in our place and rose again so that forgiveness and eternal life are offered freely.","Salvation is a gift of grace. We receive it by faith and cannot earn it."],
 ["Write the gospel in your own words in four or five sentences.","Memorize John 3:16 and Ephesians 2:8-9.","Ask yourself honestly whether you are trusting Christ or your own record."],
 ["Which part of the gospel is easiest for you to believe, and which is hardest?","Why do you think people try to earn God’s approval?"],
 "Practice explaining the gospel to a friend or mentor in under two minutes, then ask for their feedback."),
L("Repentance, Faith, and Assurance",["Acts 3:19","Romans 10:9-10","1 John 5:11-13"],
 "Peter calls people to repent and turn to God so that their sins may be wiped out. Paul says that if you confess Jesus as Lord and believe that God raised Him from the dead, you will be saved. John writes so that believers may know they have eternal life.",
 ["Repentance is a change of mind and direction. It means turning from sin and toward God.","Faith is trusting Jesus personally as Savior and Lord, not only agreeing with facts about Him.","God wants you to have assurance. Doubt is not unforgivable, and the answer to doubt is the promise of His Word."],
 ["Spend time in prayer confessing anything you are holding back and thanking God for forgiveness.","Write down the date or season you first trusted Christ, or a prayer of commitment if you have not yet.","Share your story or your questions with your pastor or a mature believer."],
 ["What does turning toward God look like in your daily life right now?","What gives you assurance, and what makes you doubt?"],
 "Write a short personal statement of faith and share it with your pastor or class leader."),
L("Growing as a New Creation",["2 Corinthians 5:17","Philippians 1:6","Galatians 5:16-25"],
 "Paul says that anyone in Christ is a new creation and the old has gone. He is confident that God who began a good work will carry it to completion. Walking by the Spirit produces fruit like love, joy, peace, patience, and self-control, and replaces the works of the flesh.",
 ["Salvation begins a new life. Change is the fruit of grace, not the price of it.","Growth is a process. God is patient and finishes what He starts.","The Holy Spirit produces Christ-like character in those who walk with Him daily."],
 ["Name one old habit you want God to change and one new habit you want to build.","Read Galatians 5:22-23 and circle the fruit you most need this season.","Tell a trusted friend what you are working on and ask them to pray."],
 ["Where have you already seen God change you?","What does walking by the Spirit look like on an ordinary day?"],
 "Choose one fruit of the Spirit to focus on for two weeks and keep a short daily note of how you practiced it.")
],
quiz:[
Q("How does Ephesians 2:8-9 say we are saved?","By grace through faith, as a gift of God","By good works","By church attendance","By family background"),
Q("What does the word repentance mean in the Bible?","A change of mind and direction toward God","Feeling sad for a moment","Making a promise to be perfect","Joining a church"),
Q("According to Romans 10:9-10, what leads to salvation?","Confessing Jesus as Lord and believing God raised Him from the dead","Following a list of rules","Being born into a Christian family","Giving money to the church"),
Q("Why did John write 1 John 5:11-13?","So believers may know they have eternal life","To give new rules for worship","To describe church leadership","To warn against all doubt"),
Q("What does 2 Corinthians 5:17 say about anyone in Christ?","They are a new creation","They will never struggle","They no longer need the church","They must earn new status")],
proj:P("My Faith Story","Write and share your testimony of salvation, or your honest journey toward it, and set a growth goal.",
 ["A one-page written story of how you came to trust Christ or where you are in that journey","The gospel in your own words","A growth goal tied to one fruit of the Spirit","A note on who you shared this with and what they said"],2,2)
});
C({id:"nmc-103",code:"NMC 103",track:"N",grp:"req",title:"What We Believe",
goal:"Learn the core Christian beliefs about the Bible, God, Jesus, and the Holy Spirit.",
lessons:[
L("The Bible and the Trinity",["2 Timothy 3:16-17","Matthew 28:19","John 1:1-14"],
 "Paul says all Scripture is God-breathed and useful for teaching, correcting, and training in righteousness. Jesus commands baptism in the name of the Father, the Son, and the Holy Spirit. John opens his Gospel by showing that the Word was with God and was God, and became flesh.",
 ["The Bible is God’s inspired Word. It is the final authority for what we believe and how we live.","There is one God who exists eternally as Father, Son, and Holy Spirit.","God is knowable. He has revealed Himself in Scripture and most fully in Jesus Christ."],
 ["Read the first chapter of John slowly and write down what it says about Jesus.","Begin a simple Bible reading plan and read a little every day this week.","Write one question about God you would like to ask your pastor."],
 ["Why does it matter that the Bible is God’s Word and not only human wisdom?","Which truth about God do you find hardest to understand?"],
 "Read John 1:1-18 and write a short summary of what it teaches about who Jesus is."),
L("Jesus Christ: Savior, Lord, and Coming King",["Philippians 2:5-11","Acts 1:9-11","1 Thessalonians 4:16-18"],
 "Paul describes Jesus who, though God, humbled Himself to die on a cross, and whom God has exalted so that every knee will bow. The angels promised the disciples that Jesus will return in the same way they saw Him go. Paul encourages believers with the hope of the Lord’s return.",
 ["Jesus is fully God and fully man. He lived a sinless life and died as our substitute.","He rose bodily from the dead and now reigns as Lord over all.","He will return, and the hope of His coming shapes how we live today."],
 ["Memorize Philippians 2:10-11.","Write down areas of your life where you have called Jesus Savior but not yet Lord.","Share the hope of Christ’s return with someone who needs encouragement."],
 ["What does it mean for Jesus to be Lord of your schedule, money, and relationships?","How does knowing Jesus is coming back change how you view today?"],
 "Write a short prayer of surrender naming one area where you will let Jesus lead this month."),
L("The Holy Spirit and Holy Living",["John 14:15-26","Acts 2:1-4","1 Peter 1:14-16"],
 "Jesus promises that the Father will send the Helper, the Spirit of truth, to be with believers forever and teach them. At Pentecost the Spirit filled the disciples and the church was empowered to witness. Peter calls believers to be holy in all they do because God is holy.",
 ["The Holy Spirit is God present with us. He teaches, comforts, convicts, and empowers.","Holiness means being set apart for God. It shows in character, choices, and love, not only in rules.","Every believer needs the Spirit’s help daily. Ask your pastor how our church teaches about the Spirit’s filling and gifts."],
 ["Pray each morning this week, asking the Spirit to guide and empower you.","Name one area of your life where you sense God calling you to a higher standard.","Ask your pastor how our church understands the Spirit’s baptism and gifts, and write down what you learn."],
 ["When have you sensed the Holy Spirit guiding or convicting you?","What does it look like to be set apart for God in your workplace or school?"],
 "Ask your pastor or class leader to explain how our church teaches about the Holy Spirit, and write a half-page summary.")
],
quiz:[
Q("What does 2 Timothy 3:16 say about Scripture?","It is God-breathed and useful for teaching and training","It is only history","It is mostly symbolic","It is less important than tradition"),
Q("Which phrase best describes the Christian view of God?","One God in three persons: Father, Son, and Holy Spirit","Three separate gods","A distant force","One God who has no relationship with people"),
Q("According to Philippians 2:5-11, what did Jesus do?","Humbled Himself to the point of death on a cross and was exalted by God","Avoided suffering","Gave up His divine nature","Left no example to follow"),
Q("What did the angels promise in Acts 1:9-11?","Jesus will return in the same way He ascended","Jesus will never return","The disciples should stop waiting","The church would end"),
Q("Why does Peter call believers to holiness in 1 Peter 1:14-16?","Because God Himself is holy","To earn salvation","To impress others","To separate from all people")],
proj:P("My Beliefs Notebook","Create a short notebook of what you are learning about the Bible, Jesus, and the Holy Spirit, including questions to take to your pastor.",
 ["Three bullet points on what you believe about the Bible and God","Three bullet points on who Jesus is and what He did","A paragraph on the Holy Spirit after you talk with your pastor","A list of at least three questions you still have"],2,2)
});
C({id:"nmc-104",code:"NMC 104",track:"N",grp:"req",title:"Spiritual Habits for Daily Life",
goal:"Build simple, lasting habits of prayer, Scripture, worship, and fellowship.",
lessons:[
L("Learning to Pray",["Matthew 6:5-13","Philippians 4:6-7","Luke 18:1-8"],
 "Jesus teaches that prayer is not for show. It is a conversation with the Father, who knows what we need. Paul says to bring everything to God with thanksgiving instead of being anxious, and Jesus tells a parable to show the value of persistent prayer.",
 ["Prayer is talking and listening to a loving Father. It does not require special words.","The Lord’s Prayer gives a pattern: honor God, seek His kingdom, ask for needs, seek forgiveness, and ask for protection.","Persistence in prayer builds trust and keeps us dependent on God."],
 ["Choose a daily time and place for ten minutes of prayer.","Pray through the Lord’s Prayer slowly, putting each line in your own words.","Keep a small list of requests and note the answers you see."],
 ["What makes prayer easy or hard for you?","What would you like to say to God today if no one were listening?"],
 "Pray daily for seven days using the Lord’s Prayer as a pattern and record one thing you noticed."),
L("Living in the Word",["Psalm 119:9-16","Joshua 1:8","Acts 17:11"],
 "The psalmist asks how a young person can stay on God’s path and answers that it is by living according to His word. God told Joshua to meditate on His Word day and night. The believers in Berea examined the Scriptures daily to see whether what they heard was true.",
 ["Scripture is how God shapes our thinking and guards us from sin.","Reading, memorizing, and meditating on God’s Word each build faith.","Test everything you hear against the Bible, including sermons and social media."],
 ["Read one chapter of a Gospel each day for a week.","Memorize one verse this week and say it out loud at least once a day.","Write down one thing the passage says about God, one about people, and one you should do."],
 ["How does God’s Word guide your decisions?","What keeps you from reading the Bible consistently?"],
 "Complete a seven-day reading plan in the Gospel of Mark and write one insight from each day."),
L("Worship and Fellowship",["Hebrews 10:24-25","Psalm 100","Acts 2:42"],
 "Hebrews urges believers to meet together, encourage one another, and spur each other toward love and good deeds. Psalm 100 invites everyone to enter God’s presence with thanksgiving and praise. The early church devoted itself to the apostles’ teaching, fellowship, the breaking of bread, and prayer.",
 ["Worship is a lifestyle of gratitude and obedience that is expressed together on Sundays.","We need other believers. Faith grows in community and withers in isolation.","Fellowship means sharing life, not only attending the same meeting."],
 ["Commit to attending services regularly and arrive a few minutes early to greet people.","Join a small group, class, or team and attend at least three times.","Reach out to one person each week with encouragement."],
 ["What does worship look like for you outside of a service?","Who encourages you in your faith, and who could you encourage?"],
 "Choose one small group or ministry gathering to join and write about your first visit.")
],
quiz:[
Q("According to Matthew 6:5-13, how should we pray?","Sincerely to our Father without trying to impress others","Only with long words","Only in public","Only on special days"),
Q("What does Philippians 4:6-7 say to do with anxiety?","Bring everything to God in prayer with thanksgiving","Ignore it","Handle it alone","Wait until it passes"),
Q("What did the believers in Berea do according to Acts 17:11?","Examined the Scriptures daily to check what they heard","Accepted every teaching","Avoided the Scriptures","Read once a year"),
Q("Why does Hebrews 10:24-25 urge believers to meet together?","To encourage each other toward love and good deeds","To follow tradition","To compete in service","To avoid being alone at home"),
Q("Which habit is described in Acts 2:42?","Devotion to teaching, fellowship, breaking bread, and prayer","Silent meetings only","Weekly fasting only","Avoiding public worship")],
proj:P("My 30-Day Habit Plan","Build a simple 30-day plan for prayer, Scripture, and fellowship, then report on how it went.",
 ["A written plan with time, place, and reading plan","A prayer list with dates and answers","A note about the small group or ministry gathering you attended","A one-page reflection on what changed after two weeks"],3,3)
});
C({id:"nmc-105",code:"NMC 105",track:"N",grp:"req",title:"Membership, Giving, and Serving",
goal:"Understand what church membership means and find your place to give and serve.",
lessons:[
L("What Membership Means",["Acts 2:42-47","Romans 12:4-5","Hebrews 13:17"],
 "The early church was a committed community that shared life together. Paul says we are many members of one body, each belonging to the others. Hebrews asks believers to respond to their leaders with trust so that their work can be a joy.",
 ["Membership is a covenant of love. It is a commitment to a local family to worship, grow, serve, and be accountable.","The body needs every member. No one is unimportant, and no one can say they do not need the others.","Healthy accountability and healthy leadership protect and strengthen the church."],
 ["Read the church’s statement of faith and membership expectations with your pastor.","Write down what you are willing to commit to as a member and what you need from the church.","Talk with your pastor about any concerns or questions before joining."],
 ["What does commitment to a church family look like in your life?","How do you respond to accountability and correction?"],
 "Meet with your pastor or class leader to talk through membership and write down what you committed to."),
L("Giving and Stewardship",["Malachi 3:10","2 Corinthians 9:6-8","Luke 16:10-12"],
 "God invites His people to bring their tithes to the storehouse and to trust Him. Paul teaches that giving should be generous, cheerful, and from the heart. Jesus teaches that faithfulness with small things prepares us for greater responsibility.",
 ["Everything we have belongs to God. We are stewards, not owners.","Giving is an act of worship and trust. It should be done cheerfully, not under pressure.","Faithful stewardship includes time, talents, and treasure, not only money."],
 ["Review your budget and decide prayerfully how you will give regularly.","Ask your pastor how the church uses tithes and offerings.","List one way you can give your time or a skill this month."],
 ["How does your view of money affect your trust in God?","What would joyful, planned giving look like for you?"],
 "Write a simple giving and stewardship plan covering time, talents, and treasure, and review it with someone you trust."),
L("Finding Your Place to Serve",["1 Peter 4:10-11","Romans 12:6-8","Galatians 6:9-10"],
 "Peter says each believer has received a gift and should use it to serve others as a faithful steward of God’s grace. Paul lists different gifts and encourages using them with generosity, diligence, and cheerfulness. He urges believers not to grow weary in doing good, especially toward the family of believers.",
 ["Every believer is gifted and called to serve. There are no spectators in God’s family.","Serving is how we grow. You discover your gifts by using them.","Start small and be faithful. God opens bigger doors for those who serve well where they are."],
 ["Make a list of your gifts, skills, and passions and ask others what they see in you.","Visit two ministry teams and ask what they need.","Commit to serve in one area for at least three months."],
 ["Which kind of service gives you energy? Which drains you?","What is one need in the church you could help meet right now?"],
 "Choose a ministry team to join, attend a meeting, and write down your first serving commitment.")
],
quiz:[
Q("What does Romans 12:4-5 teach about the church?","We are many members of one body and belong to each other","Only leaders matter","Members are independent","Gifts are given only to a few"),
Q("How does 2 Corinthians 9:6-8 describe giving?","Generous and cheerful, from the heart","Reluctant and required","Only for large amounts","A private matter with no purpose"),
Q("What principle does Jesus teach in Luke 16:10-12?","Faithfulness with little prepares us for more","Small things do not matter","Money is evil","Only large gifts count"),
Q("According to 1 Peter 4:10-11, how should gifts be used?","To serve others as faithful stewards of God’s grace","For personal reputation","Only in private","Only by pastors"),
Q("What does Galatians 6:9-10 encourage?","Not growing weary in doing good, especially for the family of believers","Resting from service","Serving only strangers","Waiting for recognition")],
proj:P("My Membership and Serving Plan","Write your commitment to the church family and a first serving plan, then share it with your pastor.",
 ["A one-page membership commitment in your own words","A giving and stewardship plan covering time, talents, and treasure","The name of the ministry team you will join and the first meeting you attended","A note from your pastor or class leader confirming you reviewed this together"],3,3)
});
/* ================= WATER BAPTISM CLASS (track B) ================= */
C({id:"bap-101",code:"BAP 101",track:"B",grp:"req",title:"What Baptism Means",
goal:"Understand what the Bible teaches about water baptism and why Jesus commands it.",
lessons:[
L("Jesus, Our Example",["Matthew 3:13-17","Matthew 28:18-20","Mark 16:15-16"],
 "Jesus Himself was baptized by John to fulfill all righteousness, and the Father spoke His approval as the Spirit descended on Him. At the end of His earthly ministry He commanded His followers to make disciples, baptizing them in the name of the Father, the Son, and the Holy Spirit.",
 ["Jesus was baptized, and He commands His followers to be baptized. Baptism is an act of obedience and identification with Him.","Baptism follows faith. It is part of the Great Commission and the normal next step after believing.","The Father, Son, and Holy Spirit are all present at Jesus’ baptism, showing the unity of God."],
 ["Read Matthew 3:13-17 slowly and write down what stands out to you.","Pray and ask God to show you whether you are ready to obey Him in baptism.","Tell a trusted friend or your pastor you are considering baptism."],
 ["Why do you think Jesus was baptized even though He had no sin?","What feelings come up when you think about being baptized?"],
 "Write a short paragraph on why you want to be baptized and share it with your pastor or class leader."),
L("A Picture of the Gospel",["Romans 6:3-11","Colossians 2:12","1 Corinthians 15:3-4"],
 "Paul explains that baptism pictures the gospel itself. When believers go under the water they identify with Christ’s death and burial, and when they come up they identify with His resurrection and walk in newness of life. Our old self was crucified with Him so that we would no longer be slaves to sin.",
 ["Going under the water pictures death and burial with Christ. Coming up pictures new life.","Baptism is a public declaration that the old life is finished and a new life has begun.","The water does not save us. It shows what Jesus has already done for us by grace through faith."],
 ["Read Romans 6:3-11 aloud and underline each phrase about dying and rising.","List one thing from your old life you want to leave behind.","List one way you want to walk in new life after baptism."],
 ["What does it mean to you that you are united with Christ in His death and resurrection?","What old habit or identity are you ready to leave behind?"],
 "Draw or write a simple two-column chart of old life and new life, and share it with your pastor."),
L("Baptism in the Early Church",["Acts 2:37-41","Acts 8:34-39","Acts 16:30-34"],
 "On the day of Pentecost, people who believed Peter’s message were baptized and about three thousand were added to the church. The Ethiopian official believed and asked to be baptized right away. The Philippian jailer and his household believed and were baptized that same night.",
 ["In Acts, people were baptized quickly after believing. Baptism was not delayed or treated as optional.","Baptism joins a person publicly to the community of believers.","People of every background were baptized: crowds, officials, and families."],
 ["Read the three stories in Acts and note how soon each person was baptized after believing.","Think about what is holding you back from being baptized and pray about it.","Ask a baptized believer to share their story with you."],
 ["What stands out to you about how quickly the early believers were baptized?","How might baptism strengthen your faith in this season?"],
 "Interview one person who has been baptized and write down three things you learned from their story.")
],
quiz:[
Q("What did the Father say when Jesus was baptized in Matthew 3:17?","This is My Son, whom I love; with Him I am well pleased","You must repent","Go and make disciples","Be baptized for your sins"),
Q("In Matthew 28:19, in whose name are believers to be baptized?","The Father, the Son, and the Holy Spirit","Peter and Paul","The church","John the Baptist"),
Q("What does going under the water picture in Romans 6:3-11?","Death and burial with Christ","Washing away dirt","Joining a club","A reward for good behavior"),
Q("What does coming up out of the water picture?","Rising with Christ to walk in new life","Leaving the church","Waiting for judgment","Finishing a class"),
Q("What did the Ethiopian official do in Acts 8:34-39 after believing?","Asked to be baptized right away","Waited a year","Declined baptism","Returned to his old life")],
proj:P("Why I Want to Be Baptized","Write your own explanation of what baptism means and why you are ready to obey Christ in it.",
 ["A one-page statement in your own words on what baptism pictures","Three Scriptures you used and what each says","A note on one person you talked with about baptism","A prayer asking God to prepare your heart"],2,2)
});
C({id:"bap-102",code:"BAP 102",track:"B",grp:"req",title:"Faith, Repentance, and Readiness",
goal:"Understand who should be baptized, what repentance and faith involve, and how to answer common questions.",
lessons:[
L("Who Should Be Baptized",["Acts 8:36-37","Acts 10:44-48","Mark 16:16"],
 "Philip told the Ethiopian official that he could be baptized if he believed with all his heart. In the house of Cornelius, those who heard the message and received the Holy Spirit were baptized. Jesus joins belief and baptism in His great commission.",
 ["Baptism is for those who have personally believed in Jesus Christ as Savior and Lord.","Age and background do not matter. Faith in Jesus does.","If you have trusted Christ, baptism is the next step of obedience."],
 ["Write down the moment or season you decided to follow Jesus.","Confirm with your pastor that you are ready and talk through any questions.","Choose one person you would like to invite to your baptism."],
 ["How do you know you have personally trusted Christ?","What would help you feel ready to be baptized?"],
 "Meet with your pastor or class leader to share your testimony and confirm your readiness."),
L("Repentance and a Clean Conscience",["Acts 2:38","1 Peter 3:21","Ephesians 2:8-9"],
 "Peter tells the crowd to repent and be baptized in the name of Jesus Christ for the forgiveness of their sins. Peter also describes baptism as the pledge of a good conscience toward God through the resurrection of Jesus. Paul reminds us that we are saved by grace through faith, not by works.",
 ["Repentance is a change of heart and direction. It goes together with faith and baptism.","Baptism is an appeal to God for a clear conscience. It is an outward response to inward faith.","We are saved by grace through faith. Baptism does not earn salvation. It expresses it."],
 ["Spend time in prayer confessing any sin you have not yet brought to God.","Make things right with anyone you can before your baptism.","Write down one area where you want a fresh start."],
 ["Is there anything you need to confess or make right before you are baptized?","How does it feel to know that salvation is by grace and not by works?"],
 "Write a prayer of repentance and thanksgiving to read on the day of your baptism."),
L("Common Questions",["Luke 23:39-43","Romans 6:12-14","Galatians 3:26-27"],
 "Jesus told the repentant thief on the cross that he would be with Him in paradise, showing that salvation does not depend on a ceremony. Paul says sin should not reign in our bodies, because we are not under law but under grace. He also says that all who were baptized into Christ have clothed themselves with Christ.",
 ["Baptism is a command of Christ, but salvation is a gift received by faith.","If you were baptized before you believed, or have questions about your earlier baptism, talk with your pastor about what our church teaches.","Baptism is a beginning. It marks the start of a life of growth, not the end of the journey."],
 ["Write down any questions you have about baptism and bring them to your pastor.","Ask your pastor how our church handles baptism for those baptized earlier in life.","Read Galatians 3:26-27 and write down what it means to be clothed with Christ."],
 ["What questions or fears do you still have about baptism?","What does it mean to you to be clothed with Christ?"],
 "Prepare a short list of questions and meet with your pastor to talk through each one.")
],
quiz:[
Q("Who is baptism for, according to Acts 8:36-37?","Those who believe in Jesus with all their heart","Only adults over thirty","Anyone who attends church","Only church leaders"),
Q("What does Acts 2:38 call people to do?","Repent and be baptized in the name of Jesus Christ","Wait a year","Follow rules","Give money"),
Q("How does 1 Peter 3:21 describe baptism?","The pledge of a good conscience toward God","A way to earn salvation","A required payment","An optional tradition"),
Q("How are we saved according to Ephesians 2:8-9?","By grace through faith, not by works","By baptism alone","By being good enough","By church membership"),
Q("What did Jesus tell the repentant thief in Luke 23:43?","Today you will be with Me in paradise","You must be baptized first","Wait until judgment","Your faith is not enough")],
proj:P("My Readiness Interview","Complete a conversation with your pastor or class leader about your faith and readiness, and write down what you learned.",
 ["A list of your questions about baptism","Notes from your conversation with your pastor","A written prayer of repentance and thanksgiving","A short note on whether you feel ready and why"],2,2)
});
C({id:"bap-103",code:"BAP 103",track:"B",grp:"req",title:"Your Baptism Day and Beyond",
goal:"Prepare your testimony, know what to expect, and plan to walk in your new life.",
lessons:[
L("Sharing Your Testimony",["Psalm 66:16","Mark 5:18-20","Acts 26:1-23"],
 "The psalmist invites everyone who fears God to come and hear what He has done for his soul. Jesus told the healed man to go home and tell his family how much the Lord had done for him. Paul told his own story to King Agrippa in three parts: his life before Christ, how he met Jesus, and his life after.",
 ["A testimony is a simple story of what God has done in your life.","Use three parts: your life before Christ, how you met Him, and what has changed since.","Keep it short, honest, and focused on Jesus, not on yourself."],
 ["Write your testimony in three short paragraphs: before, how you met Jesus, and after.","Practice saying it aloud in about two minutes.","Share it with a friend and ask what stood out."],
 ["What is the most important thing God has done in your life?","Who in your life needs to hear your story?"],
 "Write and rehearse a two-minute testimony and share it with your class leader."),
L("What to Expect on Baptism Day",["Matthew 28:19","Acts 8:38","Colossians 2:12"],
 "Jesus commands baptism in the name of the Father, the Son, and the Holy Spirit. In Acts, Philip and the Ethiopian official went down into the water and came up out of it. Paul says believers are buried with Christ in baptism and raised with Him through faith in God’s power.",
 ["Baptism is by immersion: you go down into the water and come up out of it. Your pastor will explain the details.","You will be baptized in the name of the Father, the Son, and the Holy Spirit. You may be asked to share your testimony.","Plan what to wear, what to bring, and whom to invite. Ask your pastor for any church guidelines."],
 ["Ask your pastor for the date, time, and instructions for baptism day.","Prepare a change of clothes, a towel, and a plan for after the service.","Invite family and friends to celebrate with you."],
 ["What are you looking forward to about your baptism?","What would help you feel calm and prepared on the day?"],
 "Create a checklist for baptism day, including your testimony, clothes, guests, and a prayer."),
L("Walking in New Life",["Romans 6:4","Colossians 3:1-10","Galatians 3:27"],
 "Paul says we were buried with Christ so that we too may live a new life. He tells believers to set their hearts on things above and to put off the old self with its practices and put on the new self, which is being renewed in knowledge. All who were baptized into Christ have clothed themselves with Christ.",
 ["Baptism is a beginning. The new life it pictures must be lived out day by day.","Put off sins and habits that belong to the old life, and put on compassion, kindness, humility, and love.","Stay close to the church family. Growth happens in community."],
 ["Write down three habits you will put off and three you will put on after your baptism.","Choose a mentor who will check in with you for the next ninety days.","Set a reminder to celebrate the anniversary of your baptism each year."],
 ["What would it look like to live in newness of life in your home, school, or work?","Who will help you stay on track after your baptism?"],
 "Write a ninety-day plan for walking in new life, including a mentor and weekly goals.")
],
quiz:[
Q("According to Mark 5:18-20, what did Jesus tell the healed man to do?","Go home and tell how much the Lord had done for him","Keep it secret","Follow Jesus immediately","Pay for his healing"),
Q("Which three parts does Paul’s testimony in Acts 26 follow?","Life before Christ, meeting Jesus, and life after","Rules, rituals, and rewards","Past, future, and prophecy","Family, work, and home"),
Q("What does Acts 8:38 describe?","Philip and the official going down into the water and coming up","A sermon by the river","A meal after the service","A vow of silence"),
Q("What does Romans 6:4 say we were buried with Christ to do?","Walk in newness of life","Avoid people","Earn salvation","Stay silent"),
Q("What should believers do with the old self according to Colossians 3:1-10?","Put it off and put on the new self","Hide it","Reuse it","Ignore it")],
proj:P("My Testimony and Baptism Plan","Prepare your two-minute testimony, your baptism day checklist, and a ninety-day plan for walking in new life.",
 ["A written two-minute testimony in three parts","A baptism-day checklist with date, guests, and clothing","A ninety-day plan with a named mentor","A short prayer you will pray before baptism"],3,3)
});
/* ================= NEW BELIEVERS CLASS (track V) ================= */
C({id:"nbc-101",code:"NBC 101",track:"V",grp:"req",title:"Born Again: Your New Identity",
goal:"Understand what happened when you believed and who you are now in Christ.",
lessons:[
L("What Happened When You Believed",["John 3:1-8","2 Corinthians 5:17","Colossians 1:13-14"],
 "Jesus told Nicodemus that no one can see the kingdom of God unless they are born again by water and the Spirit. Paul says that anyone in Christ is a new creation, and that God has rescued believers from the dominion of darkness and brought them into the kingdom of His Son.",
 ["Being born again is a spiritual birth. God gives new life by His Spirit when a person trusts Christ.","Your sins are forgiven. The debt has been paid by Jesus, and God does not hold it against you.","You have been moved from one kingdom to another. Your citizenship is now in God’s kingdom."],
 ["Write down the date or season you decided to follow Jesus and what led up to it.","Thank God out loud for three specific things He has already changed in you.","Tell one trusted person that you have given your life to Christ."],
 ["What has felt different in your life since you believed?","What questions do you have about what happened when you trusted Christ?"],
 "Write a half-page account of your decision to follow Jesus and share it with your pastor or class leader."),
L("Who You Are in Christ",["Ephesians 1:3-14","1 John 3:1-3","Romans 8:14-17"],
 "Paul says believers have been chosen, adopted, redeemed, forgiven, and sealed with the Holy Spirit. John marvels at the love the Father has lavished on us so that we are called children of God. Paul adds that those led by the Spirit are children of God and heirs with Christ.",
 ["You are a child of God. You were adopted into His family and are fully loved.","You are forgiven, chosen, and sealed with the Holy Spirit as a guarantee of what is coming.","Your identity rests on what God says about you, not on your past, your feelings, or other people’s opinions."],
 ["Read Ephesians 1:3-14 and underline every phrase that describes what God has done for you.","Write three sentences beginning with 'In Christ I am...' using what you found.","Replace one negative thought about yourself with a truth from Scripture this week."],
 ["Which statement about your identity in Christ is hardest to believe?","How would your week look different if you lived as a loved child of God?"],
 "Create a one-page identity card listing five truths about who you are in Christ, each with a Scripture reference."),
L("Assurance and Dealing with Doubt",["John 10:27-30","Romans 8:31-39","1 John 1:9"],
 "Jesus says His sheep hear His voice and no one can snatch them out of His hand. Paul asks who can separate us from the love of Christ and answers that nothing in all creation can. John promises that if we confess our sins, God is faithful and just to forgive us and cleanse us.",
 ["Your salvation rests on Christ’s promise and power, not on how strong your feelings are today.","Doubts are normal for new believers. Bring them to God and to mature believers instead of hiding them.","When you fail, confess quickly and receive forgiveness. Do not stay away from God out of shame."],
 ["Memorize Romans 8:38-39 this week.","Write down any doubts or questions you have and bring them to your pastor.","Practice a short daily confession and thanksgiving, even when you do not feel anything."],
 ["What makes you doubt your salvation, and what does Scripture say in response?","How do you usually respond when you fall short, and how does 1 John 1:9 change that?"],
 "Write your doubts and fears on one side of a page and the matching promises from Scripture on the other side.")
],
quiz:[
Q("What did Jesus tell Nicodemus in John 3:1-8?","A person must be born again to see the kingdom of God","A person must keep every rule","A person must be a teacher","A person must be baptized by John"),
Q("What does 2 Corinthians 5:17 say about anyone in Christ?","They are a new creation","They are guaranteed no struggles","They no longer need others","They must earn their place"),
Q("How does 1 John 3:1 describe the Father’s love?","He has lavished it on us so that we are called children of God","He loves only the perfect","He loves us only when we obey","He loves us less when we fail"),
Q("What can separate believers from the love of Christ according to Romans 8:38-39?","Nothing in all creation","Sin they committed before believing","Doubt","Hard times"),
Q("What does 1 John 1:9 promise?","If we confess our sins, God is faithful and just to forgive and cleanse us","God forgives only once","God forgives only small sins","We must earn forgiveness")],
proj:P("My Identity Card","Create a card that records your decision to follow Jesus and five truths about who you are in Christ.",
 ["A short written account of your decision to follow Jesus","Five I-am-in-Christ statements with Scripture references","A list of doubts paired with promises from the Bible","A note on who you shared this with and how they responded"],2,2)
});
C({id:"nbc-102",code:"NBC 102",track:"V",grp:"req",title:"Walking With God Daily",
goal:"Learn simple ways to talk with God, hear from Him in Scripture, and obey what you learn.",
lessons:[
L("Talking With God",["Luke 11:1-13","Matthew 6:6","1 Thessalonians 5:16-18"],
 "The disciples asked Jesus to teach them to pray, and He gave them a simple model and encouraged them to ask, seek, and knock. He taught to pray in private to the Father who sees. Paul urges believers to pray continually and to give thanks in all circumstances.",
 ["Prayer is simply talking with your Father. You do not need special words or perfect sentences.","Set a regular time and place for prayer, and also pray throughout the day.","Include thanksgiving, honesty about your needs, and time to be quiet and listen."],
 ["Choose a time and place and pray for ten minutes every day this week.","Use the pattern: thank God, confess, ask for others, ask for yourself.","Keep a list of prayers and write the date when God answers."],
 ["What is the hardest part of praying for you right now?","What would you say to God today if you spoke honestly?"],
 "Pray daily for seven days using the thank, confess, ask pattern and write one line each day about what you noticed."),
L("Hearing From God in His Word",["Psalm 119:105","2 Timothy 2:15","1 Peter 2:2"],
 "The psalmist says God’s word is a lamp to his feet and a light to his path. Paul tells Timothy to handle the word of truth correctly, and Peter urges new believers to crave pure spiritual milk so they can grow up in their salvation.",
 ["The Bible is how God speaks clearly and reliably. It will never contradict itself or lead you into sin.","Start with the Gospels, especially John or Mark, to get to know Jesus.","Read with three questions: What does it say? What does it mean? What should I do?"],
 ["Read one chapter of the Gospel of John each day and write one sentence about it.","Get a Bible you can read easily and mark verses that stand out.","Ask your pastor for a good reading plan for new believers."],
 ["What has God shown you in your reading so far?","What gets in the way of reading the Bible regularly?"],
 "Read the first five chapters of John and write what each chapter teaches you about Jesus."),
L("Learning to Obey",["John 14:15-21","James 1:22-25","Luke 6:46-49"],
 "Jesus says that those who love Him keep His commands, and He promises to send the Spirit to help. James urges believers to do what the word says and not merely listen. Jesus compares the person who hears and obeys to a builder who laid a deep foundation on rock.",
 ["Obedience is how love for Jesus shows up. It is a response to grace, not a way to earn it.","Start with the clear things: forgive, tell the truth, be generous, stay close to God.","Small acts of obedience build a strong foundation that holds up under pressure."],
 ["Write down one thing God has told you in His Word that you have not yet done.","Do that one thing this week and tell someone what happened.","Ask the Holy Spirit each morning to help you obey."],
 ["What is one command from Scripture you find hard to obey, and why?","How have you seen obedience bring peace or fruit in your life?"],
 "Choose three clear commands from the Gospel of John, practice them for a week, and write what happened.")
],
quiz:[
Q("What does Jesus teach in Matthew 6:6 about prayer?","Pray in private to your Father who sees","Pray only in groups","Pray only with long words","Pray only in church"),
Q("What does 1 Thessalonians 5:16-18 say about prayer?","Pray continually and give thanks in all circumstances","Pray only in emergencies","Pray once a week","Pray only when you feel like it"),
Q("What does Psalm 119:105 say God’s word is?","A lamp to our feet and a light to our path","A list of puzzles","A book only for leaders","Only history"),
Q("Where is a good place for a new believer to begin reading?","The Gospels, such as John or Mark","Only the prophets","Only the book of Revelation","A different book each day"),
Q("What does James 1:22 say about God’s word?","Do what it says and do not merely listen","Memorize it only","Debate it often","Keep it private")],
proj:P("My Daily Walk Plan","Build and test a seven-day plan for prayer, Bible reading, and one act of obedience.",
 ["A daily plan with time, place, and reading","A prayer journal covering seven days","A short note about one act of obedience and what happened","A reflection on what you learned about walking with God"],2,2)
});
C({id:"nbc-103",code:"NBC 103",track:"V",grp:"req",title:"Standing Strong",
goal:"Prepare for temptation, learn to get back up after failure, and make wise choices about old patterns.",
lessons:[
L("Temptation and Spiritual Battle",["Matthew 4:1-11","Ephesians 6:10-18","James 4:7"],
 "Jesus was tempted in the wilderness and answered each temptation with Scripture. Paul tells believers to put on the full armor of God so they can stand against the devil’s schemes. James says to submit to God, resist the devil, and he will flee.",
 ["Temptation is not sin. Giving in to it is. Even Jesus was tempted.","Scripture is your best weapon. Know it so you can answer lies with truth.","You are not alone. Prayer, the Word, and trusted believers help you stand."],
 ["Memorize one verse for the area where you are most tempted.","Name your top three triggers and make a plan for each.","Ask a mature believer to check in with you each week."],
 ["Where do you feel the most pressure to go back to old habits?","Which piece of the armor of God do you most need right now?"],
 "Write a simple temptation plan listing your triggers, a verse for each, and a person you will call."),
L("Confession, Forgiveness, and Getting Back Up",["1 John 1:9","Proverbs 24:16","Psalm 51:1-12"],
 "John promises that confession leads to cleansing, and Proverbs says the righteous fall seven times and rise again. David prays for mercy and a clean heart after his sin, trusting God to restore the joy of his salvation.",
 ["Failure is not the end. God invites you to come back right away, not after you clean yourself up.","True confession is specific, honest, and quick. Hiding sin makes it grow.","Forgiveness is complete, and God restores joy. Accept it and move forward."],
 ["Pray through Psalm 51 slowly and make it your own prayer.","If you have wronged someone, ask their forgiveness this week.","Find a trusted person to talk to when you fall."],
 ["What keeps you from confessing quickly?","What would it look like to accept God’s forgiveness fully?"],
 "Write your own prayer of confession and restoration based on Psalm 51 and keep it where you can find it."),
L("Making Wise Choices About the Past",["1 Corinthians 15:33","Galatians 5:1","Romans 12:1-2"],
 "Paul warns that bad company corrupts good character. He reminds believers that Christ has set them free and they should not go back to slavery. He urges them to offer their bodies as living sacrifices and be transformed by the renewing of their minds.",
 ["Some friendships, places, and habits will pull you backward. Make wise changes, with love and without cutting off people who need you.","Freedom is a gift to protect. Stay close to people who help you grow.","Transformation happens as your mind is renewed by God’s Word, not only by trying harder."],
 ["List relationships and habits that help you grow and those that pull you down.","Take one concrete step to put distance between you and a harmful influence.","Add one healthy relationship or habit this month."],
 ["Which relationship or habit needs wise boundaries right now?","Who in your life will cheer for your new life in Christ?"],
 "Make a short two-column list of influences that help you grow and those that hold you back, and choose one step to take.")
],
quiz:[
Q("How did Jesus answer temptation in Matthew 4?","With Scripture","By avoiding people","By ignoring the devil","By arguing"),
Q("According to James 4:7, what should believers do?","Submit to God and resist the devil","Fight in their own strength","Wait for temptation to pass","Hide from people"),
Q("What does Proverbs 24:16 say about the righteous?","They fall and rise again","They never fall","They give up after one failure","They hide their failures"),
Q("What does 1 John 1:9 promise?","Confession brings forgiveness and cleansing","Confession is not needed","Confession must be public","God forgives only once"),
Q("What does Romans 12:2 say leads to transformation?","The renewing of your mind","Trying harder in your own strength","Avoiding all people","Memorizing rules only")],
proj:P("My Standing Strong Plan","Write a plan for resisting temptation, restoring after failure, and building healthy influences.",
 ["A list of triggers with a verse and a plan for each","A prayer of confession and restoration in your own words","A list of helpful and harmful influences with one step you will take","The name of the person who will check in with you"],2,2)
});
C({id:"nbc-104",code:"NBC 104",track:"V",grp:"req",title:"Your New Family and Next Steps",
goal:"Connect with the church, share your faith with those closest to you, and take your next steps.",
lessons:[
L("Why You Need the Church",["Hebrews 10:24-25","Acts 2:42-47","Ephesians 4:15-16"],
 "Hebrews urges believers to keep meeting together and encouraging one another. The early church devoted itself to teaching, fellowship, meals, and prayer. Paul says the whole body grows and builds itself up in love as each part does its work.",
 ["God designed faith to grow in community. You cannot follow Jesus well alone.","The church family gives teaching, prayer, accountability, and friendship.","Every believer has something to give. Your presence and gifts matter."],
 ["Attend services consistently for the next month.","Join a small group, class, or team and attend at least three times.","Introduce yourself to someone new each week."],
 ["What do you hope to receive from the church family, and what can you give?","What makes it hard for you to get close to other believers?"],
 "Join one group or class this month and write down what you noticed at your first visit."),
L("Sharing Your Faith With Family and Friends",["Mark 5:19","John 1:40-46","1 Peter 3:15"],
 "Jesus told a healed man to go home to his family and tell them how much the Lord had done for him. Andrew told his brother Simon, and Philip invited Nathanael to come and see. Peter urges believers to be ready to give a gentle and respectful answer for the hope they have.",
 ["Your story is powerful. Share what God has done for you simply and honestly.","Invite people to come and see. You do not have to have every answer.","Live in a way that makes people curious, and answer with gentleness and respect."],
 ["Write your testimony in three parts: before, how you met Jesus, and after.","Pray for three people by name and look for a chance to talk or invite them.","Invite one person to a service or event this month."],
 ["Who in your life most needs to hear what God has done for you?","What worries you about sharing your faith?"],
 "Write and practice a two-minute testimony and share it with someone you trust."),
L("Your Next Steps",["Acts 2:38-41","Matthew 28:19-20","1 Peter 4:10"],
 "On Pentecost those who believed were baptized and added to the church. Jesus commands His followers to make disciples, baptizing them and teaching them to obey. Peter says each believer should use their gift to serve others as a faithful steward.",
 ["Baptism is your public step of obedience. Our Water Baptism Class prepares you for it.","Membership is a commitment to a local family. Our New Members Class walks you through it.","Serving is how you grow and help others. Start small and stay faithful."],
 ["Talk with your pastor about baptism and when to begin the Water Baptism Class.","Plan to start the New Members Class and ask when it begins.","Choose one place to serve this season."],
 ["Which next step are you most ready to take, and which feels hardest?","Who can walk with you through these steps?"],
 "Write a three-step plan for baptism, membership, and serving, and share it with your pastor.")
],
quiz:[
Q("What does Hebrews 10:24-25 encourage believers to do?","Keep meeting together and encourage one another","Pray alone","Avoid large gatherings","Rely only on their own study"),
Q("What did Jesus tell the healed man in Mark 5:19?","Go home to your family and tell them what the Lord has done","Keep quiet about it","Follow Him immediately","Pay for his healing"),
Q("What does 1 Peter 3:15 say to do?","Be ready to give a gentle and respectful answer for your hope","Argue until others agree","Keep your faith private","Avoid hard questions"),
Q("What happened to those who believed in Acts 2:38-41?","They were baptized and added to the church","They waited a year","They left Jerusalem","They avoided one another"),
Q("What does 1 Peter 4:10 say to do with gifts?","Use them to serve others as faithful stewards","Keep them private","Compare them with others","Wait to be asked")],
proj:P("My Next Steps Plan","Write a plan for connecting, sharing your faith, and taking your next steps in baptism, membership, and serving.",
 ["The group or class you joined and your first impression","A written two-minute testimony","A three-step plan for baptism, membership, and serving","A note from your pastor confirming you talked through your plan"],3,3)
});
/* ================= TRACK 2 (spiritual leadership in any ministry) ================= */
C({id:'min-prayer',code:'MIN 203',track:'2',grp:'req',title:'Leading Through Prayer & the Spiritual Disciplines',
goal:'Lead your team from a life of prayer and build habits that keep your own walk with God strong.',
lessons:[
L('A Leader Who Prays First',['Luke 6:12-13','Nehemiah 1:4-11','Colossians 4:2'],
 'Before choosing the twelve, Jesus spent the night in prayer. Nehemiah wept, fasted, and prayed before he ever spoke to the king. Paul urges believers to devote themselves to prayer, staying watchful and thankful.',
 ['Prayer comes before planning, not after it.','A leader who prays models dependence on God for the whole team.','Prayer is a conversation: speaking, listening, and obeying.'],
 ['Set a daily time and place to pray for your ministry by name.','Open every meeting with real prayer, not a formality.','Keep a prayer journal and record answers.'],
 ['What decision are you making right now that you have not fully prayed about?','How does your team know that you pray for them?'],
 'Start a prayer list for each person on your team and pray over it for seven days.'),
L('Disciplines That Sustain a Leader',['Matthew 6:1-18','Psalm 119:9-16','1 Timothy 4:7-8'],
 'Jesus assumes His followers will give, pray, and fast, and He warns against doing them for applause. The psalmist hides God’s word in his heart to stay pure. Paul tells Timothy to train himself for godliness, which has value in every way.',
 ['Disciplines are tools that open us to God, not ways to earn His love.','Scripture, prayer, fasting, and worship build steady character over time.','Private habits decide how well you lead in public.'],
 ['Choose one discipline to strengthen this month and write a simple plan.','Memorize one passage a week for four weeks.','Fast one meal a week for a specific prayer need, if your health allows.'],
 ['Which discipline feels weakest in your life, and why?','What distracts you most from time with God?'],
 'Write a one-page personal rhythm of Scripture, prayer, and worship, and share it with your accountability partner.')
],
quiz:[
Q('Why did Jesus spend the night in prayer before choosing the twelve?','He depended on the Father for guidance','He had nothing else to do','He wanted to avoid the crowds','He was waiting for permission from the leaders'),
Q('What is the purpose of spiritual disciplines?','To open us to God and shape our character','To earn God’s love','To impress others','To replace church attendance'),
Q('What should a leader do at the start of ministry meetings?','Pray sincerely and seek God’s direction','Skip prayer to save time','Pray only on Sundays','Let someone else always pray')],
proj:P('My Leader’s Prayer Rhythm','Create a prayer plan for yourself and your team that you can follow for one month.',
 ['Daily prayer plan with times and places','Prayer list for each team member','A short note on what changed after four weeks'],3)});

C({id:'min-disciple',code:'MIN 204',track:'2',grp:'req',title:'Discipling & Mentoring People',
goal:'Help others follow Jesus through intentional relationships, clear next steps, and patient mentoring.',
lessons:[
L('The Heart of Making Disciples',['Matthew 28:18-20','2 Timothy 2:2','1 Thessalonians 2:7-8'],
 'Jesus commands His followers to make disciples, teaching them to obey everything He commanded. Paul tells Timothy to pass on what he learned to faithful people who will teach others. In Thessalonica, Paul shared not only the gospel but his own life.',
 ['Discipleship is relational: you share life, not only information.','The goal is a person who follows Jesus and helps others do the same.','Multiplication means training people who train people.'],
 ['Pick one or two people to invest in over the next six months.','Meet regularly and keep each meeting simple: Word, prayer, and a next step.','Share your own struggles and growth honestly.'],
 ['Who invested in you spiritually, and what did they do that mattered?','Who could you invite to walk with you this season?'],
 'Choose someone to disciple and plan your first three meetings.'),
L('Mentoring Step by Step',['Exodus 18:17-23','Acts 18:24-26','Proverbs 27:17'],
 'Jethro told Moses to share the load and train capable leaders. Priscilla and Aquila took Apollos aside and explained the way of God more accurately. Proverbs says iron sharpens iron, and one person sharpens another.',
 ['Good mentors listen first and ask questions before giving answers.','Give clear, small steps that match the person’s level.','Affirm what is growing and correct gently with the truth.'],
 ['Write a simple growth plan with one belief, one habit, and one act of service.','Ask “What is God teaching you?” at every meeting.','Review progress every month and adjust the plan.'],
 ['Where do you tend to talk too much when you mentor?','What step would help the person you are mentoring most right now?'],
 'Write a six-month growth plan for one person you are mentoring.')
],
quiz:[
Q('What is the goal of discipleship?','A person who follows Jesus and helps others do the same','A large class','Completing a book','Church membership only'),
Q('How should a mentor begin a meeting?','By listening and asking questions','By giving a long lecture','By criticizing mistakes','By skipping the check-in'),
Q('What does 2 Timothy 2:2 emphasize?','Passing truth to faithful people who teach others','Keeping knowledge private','Leading alone','Avoiding new leaders')],
proj:P('Discipleship Plan','Design a six-month plan to disciple one or two people, including meeting rhythm, content, and next steps.',
 ['Names or roles of the people you will invest in','Meeting rhythm and simple agenda','Six-month growth steps with check-in dates'],3)});

C({id:'min-shepherd',code:'MIN 205',track:'2',grp:'req',title:'Shepherding Hearts: Encouragement, Counsel & Restoration',
goal:'Care for people with compassion, speak truth in love, and help those who have stumbled find restoration.',
lessons:[
L('Encouragement and Listening',['Romans 12:15','Proverbs 18:13','Hebrews 10:24-25'],
 'Paul tells believers to rejoice with those who rejoice and weep with those who weep. Proverbs warns that answering before listening is folly. Hebrews calls us to spur one another on and to keep meeting together.',
 ['Presence and listening often help more than advice.','Encouragement names what God is doing in a person.','Follow up: one message or call can change a hard week.'],
 ['Practice listening without interrupting for five minutes.','Send three encouraging notes each week.','Keep a simple care list and follow up on it.'],
 ['Who on your team needs encouragement right now?','When have you given advice before you really listened?'],
 'Write and send three encouragement notes this week, then reflect on the responses.'),
L('Truth, Boundaries, and Referral',['Ephesians 4:15','Galatians 6:1-2','Proverbs 11:14'],
 'Paul describes speaking the truth in love so the body grows up in Christ. He tells spiritual people to restore a stumbling brother gently, watching themselves, and to carry one another’s burdens. Proverbs says there is safety in many advisers.',
 ['Truth without love wounds, and love without truth fails.','Know the limits of your role and refer serious needs to pastors and professionals.','Protect confidentiality, except where safety requires telling others.'],
 ['Learn who to call for crisis, abuse, and mental-health needs.','Always work in pairs or open settings for counseling-type conversations.','Pray with the person, but do not promise secrecy you cannot keep.'],
 ['What situations are beyond your role and need a pastor or professional?','How can you stay gentle when you must say something hard?'],
 'Write a one-page referral guide for common needs, with names and phone numbers approved by your pastor.'),
L('Restoration After Failure',['John 21:15-19','Psalm 51:10-13','2 Corinthians 2:6-8'],
 'Jesus restored Peter after his denial and gave him a renewed call to feed His sheep. David asked God for a clean heart and then promised to teach transgressors God’s ways. Paul urged the church to forgive and comfort a repentant person so he would not be overwhelmed.',
 ['Restoration includes repentance, forgiveness, and a path forward.','Discipline should aim at healing, not humiliation.','A restored person can serve again when the process is wise and the pastor agrees.'],
 ['Learn your church’s restoration process and who leads it.','Walk alongside a person with regular check-ins and prayer.','Celebrate steps of growth, not only completion.'],
 ['What would help you extend grace and keep high standards?','Who walked with you after a failure?'],
 'Draft a simple restoration pathway and review it with your pastor.')
],
quiz:[
Q('What does Ephesians 4:15 teach about speaking?','Speak truth in love','Speak only when asked','Avoid hard conversations','Speak with sharp words'),
Q('When should a leader refer someone for help?','When needs are beyond the leader’s role or training','Never','Only when the person asks twice','Only after the problem ends'),
Q('What is the aim of restoration?','Healing and a renewed walk with God','Public shame','Quick replacement of the person','Ignoring the failure')],
proj:P('Care and Referral Guide','Create a care guide for your ministry that includes follow-up routines, boundaries, referral contacts, and a restoration pathway.',
 ['Follow-up routine and care roster','Boundaries and confidentiality guidelines','Referral contacts and restoration pathway reviewed by your pastor'],4)});

C({id:'min-word',code:'MIN 206',track:'2',grp:'req',title:'Leading Others in the Word & Worship',
goal:'Open the Scriptures with your team and lead them into God’s presence with clarity and reverence.',
lessons:[
L('Opening the Word with Others',['Nehemiah 8:1-8','Acts 17:11','2 Timothy 3:16-17'],
 'Ezra and the Levites read the law clearly and gave the sense so the people understood. The Bereans examined the Scriptures daily to see if what Paul said was true. Paul says all Scripture is God-breathed and useful for teaching, correcting, and training.',
 ['Read the passage first, then ask what it says before asking what it means.','Help people understand in context and apply it to real life.','Invite questions and answer from Scripture, not opinion.'],
 ['Use three questions: What does it say? What does it mean? What will I do?','Prepare by reading the passage several times and noting the surrounding verses.','Close with prayer and one practical step.'],
 ['What makes it hard for your group to apply the Bible?','What passage has shaped you most, and how do you share it?'],
 'Lead a short Bible conversation with your team using the three questions and ask for feedback.'),
L('Leading Others into Worship',['John 4:23-24','Psalm 100','Hebrews 13:15'],
 'Jesus says the Father seeks worshipers who worship in spirit and truth. Psalm 100 invites everyone to come into His presence with thanksgiving. Hebrews calls believers to offer a sacrifice of praise, the fruit of lips that confess His name.',
 ['Worship is a whole-life response to who God is.','Leaders point people to Jesus, not to themselves.','Preparation includes prayer, repentance, and clear communication.'],
 ['Prepare your heart before leading: confess, pray, and rest in His grace.','Choose songs and Scriptures that fit the moment and are easy to follow.','Invite people to respond with prayer, thanksgiving, or testimony.'],
 ['What distracts you or your team when worship begins?','How do you help someone who feels far from God to draw near?'],
 'Plan a ten-minute worship moment for your team with Scripture, song, and prayer.')
],
quiz:[
Q('What question helps a group understand a passage first?','What does it say?','What do I feel?','What do experts say?','What is popular?'),
Q('What does Jesus say true worshipers do?','Worship in spirit and truth','Worship only in a building','Worship by tradition alone','Worship in silence only'),
Q('Who is the focus of leading worship?','Jesus','The leader','The musicians','The congregation’s preferences')],
proj:P('Word and Worship Plan','Prepare a short devotional and worship moment for your ministry team and lead it.',
 ['Passage, three discussion questions, and application step','Worship plan with Scripture, songs, and prayer','Feedback from two participants and what you will adjust'],3)});

C({id:'min-evang',code:'MIN 207',track:'2',grp:'req',title:'Evangelism & Making Disciples Through Your Ministry',
goal:'Share the gospel naturally and help your ministry become a place where people meet Jesus.',
lessons:[
L('Sharing the Good News',['Romans 10:14-15','1 Peter 3:15','Acts 8:26-35'],
 'Paul asks how people can believe in One they have not heard and how they can hear without someone telling them. Peter tells believers to always be ready to give a gentle and respectful answer for their hope. Philip joined the Ethiopian official in his chariot and explained the good news from the Scripture he was reading.',
 ['Evangelism begins with prayer, love, and listening.','Know your story: before Jesus, how you met Him, and what changed.','Invite people to respond and offer a next step.'],
 ['Write your three-minute testimony and practice telling it.','Pray daily for three people who do not know Jesus.','Learn a simple gospel outline from Scripture.'],
 ['Who has God placed in your path who needs to hear the gospel?','What fear holds you back, and what would help?'],
 'Write your testimony and share it with one person this week.'),
L('Making Your Ministry Welcoming',['Luke 14:12-14','Romans 15:7','Acts 2:42-47'],
 'Jesus urges inviting the poor, the crippled, and the overlooked rather than only those who can repay. Paul says to accept one another as Christ accepted us. The early church devoted themselves to teaching, fellowship, breaking bread, and prayer, and the Lord added to their number.',
 ['A welcoming ministry greets, includes, and follows up.','First impressions matter, but belonging takes relationship.','Connect visitors to a next step: a small group, a meal, or a serving team.'],
 ['Create a simple greeting and follow-up plan for guests.','Train your team to notice and include newcomers.','Track guests and contact each one within 48 hours.'],
 ['What would a first-time guest feel in your ministry?','How can you help someone move from guest to member?'],
 'Design a guest follow-up plan with timing, messages, and next steps.')
],
quiz:[
Q('What does 1 Peter 3:15 tell believers to be ready to do?','Give a gentle and respectful answer for their hope','Argue until others agree','Avoid conversations','Memorize debates'),
Q('What is a good first step after a guest visits?','Contact them within a couple of days','Wait for them to call','Ignore them','Ask them to give'),
Q('What did the early church devote themselves to?','Teaching, fellowship, breaking bread, and prayer','Only teaching','Only service projects','Fundraising')],
proj:P('Evangelism and Welcome Plan','Create a plan to share the gospel and welcome guests through your ministry.',
 ['Your testimony in writing','Guest welcome and follow-up plan','Three prayer targets and a plan for invitations'],3)});

C({id:'min-team',code:'MIN 208',track:'2',grp:'req',title:'Building & Mobilizing a Spirit-Led Serving Team',
goal:'Recruit, train, and release a healthy team that serves with joy and unity.',
lessons:[
L('Recruiting and Releasing People',['Exodus 18:21','Acts 6:1-7','Ephesians 4:11-13'],
 'Jethro advised choosing capable people who fear God and hate dishonest gain. In Acts 6, the apostles had the church choose seven full of the Spirit and wisdom so that the word of God spread. Ephesians says leaders equip the saints for works of service.',
 ['Look for character first, then gifts and availability.','Give clear roles, expectations, and permission to lead.','Release people to serve, then support and encourage them.'],
 ['Write a short job description for each role on your team.','Ask people to pray about serving rather than pressuring them.','Pair new volunteers with an experienced mentor.'],
 ['What tasks are you holding onto that someone else could do?','How do you help people discover where they fit?'],
 'Write role descriptions for three key positions on your team.'),
L('Keeping the Team Healthy',['Philippians 2:1-4','Romans 12:9-13','Galatians 6:9'],
 'Paul asks for unity, humility, and looking to the interests of others. He urges sincere love, devotion, and serving the Lord with zeal. He also encourages believers not to grow weary in doing good.',
 ['Healthy teams share prayer, appreciation, and honest conversation.','Address conflict early, privately, and with grace.','Watch for burnout and give people rest.'],
 ['Hold a monthly team huddle with prayer and testimonies.','Thank people specifically and often.','Plan a rest season so volunteers do not burn out.'],
 ['Who on your team is tired and needs care?','What conflict have you been avoiding?'],
 'Plan a team appreciation moment and a rest season for your volunteers.')
],
quiz:[
Q('What should you look for first in a team member?','Character, then gifts and availability','Popularity','Free time only','A large friend group'),
Q('What did the apostles do in Acts 6?','Had the church choose Spirit-filled people to serve','Handled everything themselves','Closed the ministry','Ignored the need'),
Q('How should conflict be handled on a team?','Early, privately, and with grace','Publicly at once','By ignoring it','By removing people without talking')],
proj:P('Serving Team Blueprint','Build a plan to recruit, train, and care for a serving team.',
 ['Role descriptions and recruiting plan','Onboarding and training outline','Care and appreciation calendar'],4)});

C({id:'min-discern',code:'MIN 209',track:'2',grp:'req',title:'Discernment, Spiritual Warfare & Protecting the Flock',
goal:'Stand on Scripture, discern what is true, and protect the people you lead with wisdom and prayer.',
lessons:[
L('Discernment and Sound Teaching',['1 John 4:1-3','Acts 20:28-31','Hebrews 5:14'],
 'John tells believers to test the spirits to see whether they are from God. Paul warns the Ephesian elders to keep watch over themselves and the flock because false teachers will arise. Hebrews says mature believers have trained themselves by constant practice to tell good from evil.',
 ['Test every teaching against Scripture.','Know the basics of what your church believes so you can spot error.','Respond to error with humility and truth, and involve your pastor.'],
 ['Review your church’s statement of beliefs with your pastor.','Compare a teaching you hear this week with Scripture.','Pray for wisdom and discernment before major decisions.'],
 ['Where have you accepted a teaching without checking it?','How do you correct error without arguing?'],
 'Summarize your church’s core beliefs in one page and note two passages for each.'),
L('Standing Firm in Spiritual Battle',['Ephesians 6:10-18','James 4:7-8','2 Corinthians 10:3-5'],
 'Paul tells believers to be strong in the Lord and to put on the full armor of God, standing against the schemes of the devil. James says to submit to God, resist the devil, and he will flee. Paul says our weapons are not of the world but have divine power to demolish strongholds.',
 ['Our battle is spiritual, and our victory is in Christ.','Prayer, Scripture, and community are our main defenses.','Protect your team with prayer and clear boundaries, not fear.'],
 ['Pray through each piece of the armor of God every day this week.','Ask someone to pray with you about areas where you feel attacked.','Cover your team in prayer before big events.'],
 ['Where do you most often feel discouraged or tempted?','How do you stay confident in Christ without being careless?'],
 'Write a short prayer covering your ministry and its people, and pray it for a month.'),
L('Safety and Wisdom in Ministry',['Proverbs 22:3','Matthew 18:6','Psalm 82:3-4'],
 'Proverbs says the prudent see danger and take refuge. Jesus warns strongly against causing little ones to stumble. Psalm 82 calls for defending the weak and rescuing them from the hand of the wicked.',
 ['Safe ministry uses screened volunteers, clear policies, and open spaces.','Report concerns right away to your pastor and follow the law.','Care for victims and support those affected.'],
 ['Learn your church’s safety and reporting policy.','Make sure two adults are present with minors and in vulnerable settings.','Know how to report and who to call.'],
 ['Where could your ministry be unsafe without you noticing?','How will you respond if someone tells you about harm?'],
 'Review your ministry’s safety practices against your church policy and list improvements.')
],
quiz:[
Q('What does 1 John 4:1 tell us to do?','Test the spirits to see if they are from God','Believe every claim','Ignore all teaching','Rely on feelings'),
Q('What does Ephesians 6 describe?','The armor of God for standing against the devil’s schemes','A military plan','A church building project','A rule for worship music'),
Q('What should you do if a child reports harm?','Report it immediately and follow policy and law','Handle it privately','Ignore it','Wait a month')],
proj:P('Protect and Discern Plan','Prepare a discernment and safety plan for your ministry.',
 ['One-page summary of core beliefs with Scripture','Prayer covering plan for your team','Safety and reporting checklist reviewed by your pastor'],4)});

C({id:'min-spirit',code:'MIN 210',track:'2',grp:'req',title:'Walking in the Spirit: Gifts, Guidance & Holiness',
goal:'Lead from a Spirit-filled life that grows in holiness, uses gifts for others, and listens for God’s guidance.',
lessons:[
L('Led by the Spirit',['Galatians 5:16-25','Romans 8:14','Acts 13:1-3'],
 'Paul says to walk by the Spirit and not gratify the desires of the flesh, and he lists the fruit of the Spirit. Romans says those led by the Spirit of God are children of God. In Antioch, the Holy Spirit set apart Barnabas and Saul while the church worshiped and fasted.',
 ['The Spirit forms Christ’s character in us and guides our decisions.','Guidance comes through Scripture, prayer, wise counsel, and peace.','The fruit of the Spirit matters as much as any gift.'],
 ['Set aside time to listen in prayer before decisions.','Review the fruit of the Spirit and ask where you need growth.','Test any impression against Scripture and share it with your pastor.'],
 ['How do you recognize the Spirit’s leading?','Which fruit of the Spirit is growing in you, and which needs attention?'],
 'List the fruit of the Spirit and write one practical step for each area you want to grow.'),
L('Gifts for the Common Good',['1 Corinthians 12:4-11','1 Corinthians 14:1-5','1 Peter 4:10-11'],
 'Paul says the Spirit gives gifts to each person for the common good. He urges believers to pursue love and desire spiritual gifts, especially those that build up the church. Peter says each should use their gift to serve others as faithful stewards of God’s grace.',
 ['Gifts are for building up others, not for display.','Love governs how gifts are used.','Order and humility keep gatherings healthy.'],
 ['Take a gifts inventory and discuss it with a mentor.','Invite team members to use their gifts in small ways.','Encourage and correct with love and order.'],
 ['What gifts do others see in you?','How can you help others use their gifts well?'],
 'Create a gifts and serving map for your team.'),
L('Holiness in Daily Life',['1 Peter 1:14-16','Romans 12:1-2','2 Corinthians 7:1'],
 'Peter calls believers to be holy in all they do because God is holy. Paul urges them to offer their bodies as living sacrifices and be transformed by the renewing of their minds. He also urges cleansing from everything that contaminates body and spirit.',
 ['Holiness means being set apart for God in thought, word, and deed.','It grows through grace, obedience, and community.','Leaders model holiness with humility, not perfectionism.'],
 ['Examine habits that pull you away from God and make a plan to change.','Confess to a trusted person and ask for prayer.','Replace harmful habits with life-giving ones.'],
 ['What area needs more surrender?','How do you stay humble while growing in holiness?'],
 'Write a personal holiness covenant and share it with your accountability partner.')
],
quiz:[
Q('What does Galatians 5 call the character the Spirit produces?','The fruit of the Spirit','The works of the law','The burden of leadership','The marks of tradition'),
Q('Why does the Spirit give gifts?','For the common good','For personal fame','To divide the church','To replace Scripture'),
Q('What does holiness mean?','Being set apart for God','Being perfect without grace','Avoiding all people','Following rules without love')],
proj:P('Spirit-Led Life Plan','Write a plan for walking in the Spirit, using your gifts, and growing in holiness.',
 ['Fruit of the Spirit growth plan','Gifts inventory and serving map','Holiness covenant with an accountability partner'],4)});

C({id:'min-renew',code:'MIN 211',track:'2',grp:'req',title:'Sustaining Your Spiritual Life: Rest, Accountability & Renewal',
goal:'Stay spiritually healthy for the long run through rest, accountability, and ongoing renewal.',
lessons:[
L('Rest, Sabbath, and Margin',['Mark 6:30-32','Exodus 20:8-11','1 Kings 19:1-9'],
 'Jesus invited the tired disciples to come away and rest. The Sabbath commandment sets a rhythm of work and rest. After a great victory, Elijah was exhausted and afraid, and God met him with rest, food, and gentle care.',
 ['Rest is obedience and trust, not laziness.','Burnout hurts you, your family, and your ministry.','Set limits and protect time for family and renewal.'],
 ['Choose a weekly rest day and guard it.','Block time for family and friends on your calendar.','Learn to say no to good things so you can say yes to the best.'],
 ['What signs of exhaustion are you ignoring?','What would a healthy week look like for you?'],
 'Plan a weekly rhythm with work, rest, family, and worship.'),
L('Accountability and Honest Friendship',['Proverbs 27:6','James 5:16','Ecclesiastes 4:9-12'],
 'Proverbs says wounds from a friend can be trusted. James says to confess sins to each other and pray for each other so we may be healed. Ecclesiastes says two are better than one, and a cord of three strands is not quickly broken.',
 ['Accountability protects leaders from hidden sin and loneliness.','Choose people who love you and will tell you the truth.','Be honest about struggles before they become crises.'],
 ['Invite one or two people to ask you hard questions regularly.','Agree on topics: money, relationships, time, and spiritual health.','Meet at least monthly and keep it confidential.'],
 ['Who knows the real you?','What do you need to bring into the light?'],
 'Set up an accountability relationship and write the questions you will ask each other.'),
L('Renewal and Finishing Well',['Isaiah 40:28-31','2 Timothy 4:6-8','Galatians 6:9'],
 'Isaiah says those who wait on the Lord will renew their strength and mount up with wings like eagles. Paul looks back at the end of his life and says he has fought the good fight, finished the race, and kept the faith. He also reminds us not to grow weary in doing good.',
 ['Renewal comes from waiting on God, not from pushing harder.','Finishing well means staying faithful over many seasons.','Plan for succession and for how you will leave a ministry well.'],
 ['Take a personal retreat day once a year to pray and plan.','Write what you want people to say about your leadership.','Train someone to take your place.'],
 ['What do you want your ministry legacy to be?','What needs to change so you can serve for the long run?'],
 'Write a personal renewal plan that includes a retreat day and a succession step.')
],
quiz:[
Q('Why did Jesus invite the disciples to rest?','They were tired and needed renewal','They were done with ministry','He wanted to avoid people forever','He had no plan'),
Q('What does accountability protect leaders from?','Hidden sin and isolation','Having friends','Hard work','Serving others'),
Q('What does Isaiah 40 promise those who wait on the Lord?','Renewed strength','No more work','An easy life','Instant success')],
proj:P('Sustaining My Walk','Create a plan for rest, accountability, and renewal that you will follow for a year.',
 ['Weekly rhythm with rest and family time','Accountability partner and question list','Annual retreat date and succession step'],4)});
/* ================= TRACK 3 additional ministry specializations ================= */

/* ---------- Christian Education Department ---------- */
C({id:'dpt-cined',code:'MIN 370',track:'3',grp:'spec',key:'cined',title:'Christian Education Department Leadership',
goal:'Lead a Christian education department with a clear teaching vision, a Scripture-centered plan, and trained teachers.',
lessons:[
L('Vision and Scope of Christian Education',['Deuteronomy 6:6-9','Matthew 28:19-20','Colossians 1:28'],
 'Moses tells parents to teach God’s words at home, on the road, and throughout the day. Jesus commands His followers to make disciples and teach them to obey. Paul says he proclaims Christ, warning and teaching everyone so that he may present everyone mature in Christ.',
 ['Christian education serves discipleship: knowing Christ and growing to maturity.','A department needs a written vision, goals, and a clear list of classes and ages served.','Education works with families and the pastor, never apart from them.'],
 ['Write a one-sentence vision for the department and share it with your pastor.','List every class, group, and teacher and mark the gaps by age or need.','Set three goals for the year with ways to measure them.'],
 ['What should a person know and be able to do after five years in your church’s classes?','Which age or group is most overlooked?'],
 'Draft a one-page vision, scope, and three-year goal list for the department.'),
L('Curriculum and Scope of Study',['2 Timothy 3:16-17','Nehemiah 8:8','Luke 24:27'],
 'Paul says all Scripture is God-breathed and useful for teaching and training in righteousness. In Nehemiah, the leaders read from the Law clearly and gave the meaning so the people understood. Jesus explained to the disciples what was said about Him in all the Scriptures.',
 ['Choose curriculum that is faithful to Scripture and to your church’s beliefs.','Plan a scope so people see the whole story of the Bible, not scattered topics.','Review materials before using them and train teachers to use them well.'],
 ['Create a checklist of doctrine, age fit, and ease of use.','Map a yearly plan across Old Testament, New Testament, doctrine, and discipleship.','Set a process for pastor approval before new materials are used.'],
 ['How do you know your curriculum teaches what your church believes?','What big parts of Scripture are your classes rarely reaching?'],
 'Evaluate your current curriculum with the checklist and recommend changes.'),
L('Structure, Calendar, and Communication',['1 Corinthians 14:40','Proverbs 21:5','Habakkuk 2:2'],
 'Paul says everything should be done in a fitting and orderly way. Proverbs says the plans of the diligent lead to profit. Habakkuk is told to write the vision plainly so a runner can read it.',
 ['Good structure frees teachers to focus on people.','Publish a yearly calendar for classes, training, and special events.','Communicate with teachers and families through regular, clear channels.'],
 ['Build a yearly calendar with class dates, teacher meetings, and events.','Create a one-page handout for new teachers and parents.','Set a monthly email or message to your team with updates and prayer needs.'],
 ['Where does confusion hurt your teachers or families most?','What one improvement would make Sundays smoother?'],
 'Produce a yearly calendar and a one-page orientation sheet for teachers.')
],
quiz:[
Q('What is the main purpose of Christian education?','Helping people grow as disciples of Jesus','Filling classrooms','Entertaining children','Replacing the sermon'),
Q('What should guide the choice of curriculum?','Faithfulness to Scripture and the church’s beliefs','Lowest price','Brightest pictures','Popularity'),
Q('Why create a yearly calendar?','So teachers and families can plan and work in an orderly way','To limit teaching time','To avoid training','To keep information private')],
proj:P('Christian Education Department Plan','Create a department plan with vision, scope of classes, curriculum review, and a yearly calendar.',
 ['Vision statement and three-year goals','Curriculum checklist and review results','Yearly calendar and teacher orientation sheet'],4)});

C({id:'dpt-cined2',code:'MIN 371',track:'3',grp:'spec',key:'cined',title:'Christian Education: Teacher Development & Assessment',
goal:'Recruit, train, and support teachers and measure whether learning is leading to growth.',
lessons:[
L('Recruiting and Training Teachers',['James 3:1','2 Timothy 2:15','1 Corinthians 3:6-9'],
 'James warns that teachers will be judged more strictly, so the role should be taken seriously. Paul urges Timothy to present himself approved, a worker who correctly handles the word of truth. Paul and Apollos each had a task, and God made it grow.',
 ['Recruit people of character who love God’s word and people.','Train in Bible study, lesson planning, classroom care, and safety.','Give new teachers a mentor and clear expectations.'],
 ['Write a teacher job description and application with references.','Plan an orientation day and two refresher trainings each year.','Pair every new teacher with a mentor teacher.'],
 ['What qualities do your best teachers share?','Where could training prevent frustration?'],
 'Create a teacher recruiting and training plan with dates.'),
L('Assessment, Feedback, and Growth',['Proverbs 27:17','Hebrews 5:12-14','Acts 18:24-26'],
 'Proverbs says iron sharpens iron. Hebrews says those who should be teachers still need milk, but the mature have trained themselves to discern good and evil. Priscilla and Aquila took Apollos aside and explained the way of God more accurately.',
 ['Measure growth in understanding, practice, and love, not only attendance.','Observe classes with a checklist and give kind, specific feedback.','Celebrate progress and set next steps for each teacher.'],
 ['Create a simple observation checklist for teachers.','Hold yearly conversations to encourage and set goals.','Survey students or parents once a year with a few short questions.'],
 ['How will you know if your classes are producing growth?','How can you give honest feedback and still encourage?'],
 'Design an observation checklist and a yearly feedback conversation guide.')
],
quiz:[
Q('Why should teaching be taken seriously according to James 3:1?','Teachers will be judged more strictly','Teaching is easy','Anyone can teach','Teachers get paid more'),
Q('What helps new teachers succeed?','A mentor and clear expectations','No guidance','Large classes','Random assignments'),
Q('What should assessment measure besides attendance?','Understanding, practice, and love','Only test scores','Only age','Only offering amounts')],
proj:P('Teacher Development System','Build a system to recruit, train, observe, and encourage teachers.',
 ['Job description and training calendar','Observation checklist','Feedback conversation guide and yearly survey'],4)});

/* ---------- Dance Ministry ---------- */
C({id:'dpt-dance',code:'MIN 380',track:'3',grp:'spec',key:'dance',title:'Dance Ministry Department Leadership',
goal:'Lead a dance ministry that worships God with excellence, order, and a servant spirit.',
lessons:[
L('A Biblical Foundation for Dance in Worship',['Psalm 149:3','Psalm 150:4','2 Samuel 6:14-15'],
 'The psalmists call God’s people to praise His name with dancing and to praise Him with tambourine and dance. David danced before the Lord with all his might as the ark was brought into Jerusalem. Worship through movement flows from joy in God’s presence.',
 ['Dance in Scripture expresses joy, thanksgiving, and victory.','The aim is to point people to God, not to the dancer.','Leaders teach the biblical purpose before teaching steps.'],
 ['Study three biblical passages on dance with your team.','Write a purpose statement for the ministry with your pastor.','Open each rehearsal with prayer and Scripture.'],
 ['What would you say to someone who questions dance in worship?','How do you keep the focus on God rather than performance?'],
 'Write a purpose statement for the dance ministry and review it with your pastor.'),
L('Vision, Standards, and Team Culture',['1 Corinthians 14:40','Philippians 4:8','Colossians 3:17'],
 'Paul says everything should be done in a fitting and orderly way. He calls believers to think about what is true, honorable, and pure. He also says whatever you do in word or deed, do it all in the name of the Lord Jesus.',
 ['Clear standards for attire, conduct, and rehearsal protect unity and the church’s witness.','Dancers are first disciples, then performers.','Create a covenant that members read and sign each year.'],
 ['Write a modesty and attire guideline with your pastor’s approval.','Create a team covenant on attendance, prayer, and attitude.','Hold regular meetings for prayer and discipleship, not only choreography.'],
 ['What standards will help your team serve without distraction?','How will you correct someone with love when standards are broken?'],
 'Draft a team covenant and attire guideline for pastor review.'),
L('Organization, Auditions, and Scheduling',['Exodus 18:21-22','Proverbs 21:5','1 Corinthians 12:18-20'],
 'Jethro advised appointing capable leaders over groups to share the work. Proverbs says diligent planning leads to profit. Paul says God arranged the parts of the body as He wanted, and each has its place.',
 ['Fair, simple auditions and clear age groups help everyone belong.','Appoint captains or assistants to share leadership.','Plan the season with rehearsal, service dates, and rest.'],
 ['Create an audition or placement process that is welcoming and fair.','Set a season calendar and a rehearsal plan.','Appoint and train assistant leaders.'],
 ['How will you welcome beginners and challenge advanced dancers?','What part of the work do you need to delegate?'],
 'Produce an audition process, rehearsal schedule, and leadership structure.')
],
quiz:[
Q('What is the main purpose of dance in worship?','To glorify God and point people to Him','To show off skill','To entertain only','To replace singing'),
Q('Why have standards for attire and conduct?','To protect unity, focus, and witness','To control people for no reason','To keep people out','To compete with other groups'),
Q('What helps a team stay organized?','Clear roles, schedules, and assistants','No planning','One person doing everything','Last-minute decisions')],
proj:P('Dance Ministry Blueprint','Create a blueprint with purpose, standards, covenant, audition process, and season calendar.',
 ['Purpose statement and covenant','Attire guideline and audition process','Season calendar and leadership structure'],4)});

C({id:'dpt-dance2',code:'MIN 381',track:'3',grp:'spec',key:'dance',title:'Dance Ministry: Training, Discernment & Service in Worship',
goal:'Train dancers, choose movement and music wisely, and serve the whole church with humility.',
lessons:[
L('Training and Excellence',['Colossians 3:23','Romans 12:1','Hebrews 12:28'],
 'Paul says to work at everything with all your heart as for the Lord. He urges believers to offer their bodies as living sacrifices, which is their true worship. Hebrews calls for worship with reverence and awe.',
 ['Excellence honors God and serves the congregation.','Train technique, stamina, and healthy habits so dancers last.','Practice includes care for the body and rest.'],
 ['Plan warm-ups, stretching, and technique sessions.','Schedule rest and set limits to prevent injury.','Invite experienced dancers to teach classes on skill and care for the body.'],
 ['Where does your team need better training?','How do you balance excellence with grace?'],
 'Plan a six-week training cycle with skill and health goals.'),
L('Discernment in Music, Movement, and Costume',['Romans 14:13','1 Corinthians 8:9','1 Corinthians 10:31'],
 'Paul urges believers not to put a stumbling block in a brother’s way and to be careful that their freedom does not become a stumbling block to the weak. He also says whether you eat or drink or whatever you do, do it all for the glory of God.',
 ['Choose music with sound words that fits your church’s worship.','Movement and costume should help people focus on God and never distract or offend.','Ask for pastor and congregation feedback with humility.'],
 ['Create a checklist for songs, movement, and costume with your pastor.','Review each routine before ministry and adjust as needed.','Collect gentle feedback and learn from it.'],
 ['What would you do if a routine distracted from worship?','How do you accept correction with grace?'],
 'Write a routine review checklist and use it on your next piece.')
],
quiz:[
Q('Why does excellence matter in dance ministry?','It honors God and serves the congregation','It makes dancers proud','It excludes beginners','It replaces prayer'),
Q('What should guide choices of music and costume?','Whether it helps people focus on God','Personal preference only','Whatever is trending','Cost only'),
Q('What does a stumbling block mean in Romans 14:13?','Something that causes another to sin or stumble','A rehearsal rule','A dance move','A type of music')],
proj:P('Training and Discernment Plan','Create a training plan and review process for your dance ministry.',
 ['Six-week training plan','Routine review checklist','Feedback process with pastor and members'],3)});

/* ---------- Deacon Ministry ---------- */
C({id:'dpt-deacon',code:'MIN 390',track:'3',grp:'spec',key:'deacon',title:'Deacon Ministry Department Leadership',
goal:'Lead a deacon ministry that serves the church with integrity, supports the pastor, and meets practical needs.',
lessons:[
L('The Biblical Call of a Deacon',['Acts 6:1-6','1 Timothy 3:8-13','Philippians 1:1'],
 'In Acts 6, seven men of good reputation, full of the Spirit and wisdom, were chosen to serve so the apostles could keep to prayer and the word. Paul lists the character of deacons: dignified, sincere, not given to much wine or dishonest gain, holding the faith with a clear conscience. Paul greets overseers and deacons together in Philippi.',
 ['Deacons are servants first, chosen for character and spiritual maturity.','They help meet needs so the pastor can give attention to prayer and the word.','Deacons protect unity and support the pastor.'],
 ['Review the qualifications in 1 Timothy 3 with your team.','Agree on how deacons and pastor communicate and make decisions.','Pray together for the pastor and church weekly.'],
 ['Which qualification do you most need to grow in?','How can you support your pastor without taking over?'],
 'Write a one-page description of the deacon role for your church and review it with your pastor.'),
L('Serving the Church and the Pastor',['Hebrews 13:17','Romans 12:13','Galatians 6:10'],
 'Hebrews urges believers to obey and submit to their leaders, who keep watch over them as those who must give an account. Paul says to share with God’s people in need and practice hospitality. Galatians says as we have opportunity, we should do good to everyone, especially the family of believers.',
 ['Deacons serve with humility and a cooperative spirit.','Define clear duties: ordinances, order of service, benevolence, and care.','Report to the pastor and work as a team.'],
 ['Create a service schedule and duty list for deacons.','Meet monthly with the pastor for prayer and planning.','Set a method for sharing needs and updates.'],
 ['How do you handle disagreement with decisions?','What practical needs in your church are overlooked?'],
 'Draft a deacon duty list, schedule, and communication plan.'),
L('Unity, Confidentiality, and Integrity',['Proverbs 11:13','Ephesians 4:3','2 Corinthians 8:20-21'],
 'Proverbs says a gossip betrays a confidence, but a trustworthy person keeps a secret. Paul urges believers to keep the unity of the Spirit through the bond of peace. He also took pains to do what is right, not only in the Lord’s sight but also in the eyes of man, in handling money.',
 ['Keep confidences unless safety or the law requires reporting.','Guard unity: avoid gossip and settle issues privately.','Handle money and goods with transparency and shared oversight.'],
 ['Sign a confidentiality and conduct agreement.','Use two-person counting and written records for offerings and benevolence.','Set a path to resolve conflicts among deacons.'],
 ['Where is the temptation to talk too freely?','What safeguards would protect you and the church?'],
 'Write a confidentiality and financial-handling policy and review it with your pastor.')
],
quiz:[
Q('Why were the seven chosen in Acts 6?','To meet practical needs so the apostles could give attention to prayer and the word','To replace the apostles','To lead worship','To collect taxes'),
Q('What does 1 Timothy 3 emphasize for deacons?','Character and a clear conscience','Wealth','Public speaking only','Age'),
Q('How should confidential information be handled?','Kept private unless safety or law requires reporting','Shared freely','Posted online','Told to friends')],
proj:P('Deacon Ministry Handbook','Create a handbook with role description, duties, schedule, and conduct and financial policies.',
 ['Role description and duty list','Schedule and communication plan','Confidentiality and financial policy'],4)});

C({id:'dpt-deacon2',code:'MIN 391',track:'3',grp:'spec',key:'deacon',title:'Deacon Ministry: Benevolence, Visitation & Care',
goal:'Care for the needy, visit the sick and homebound, and serve in ordinances with reverence.',
lessons:[
L('Benevolence and Caring for the Needy',['James 1:27','Matthew 25:35-40','Acts 4:32-35'],
 'James says pure religion is to look after orphans and widows in their distress. Jesus says that what we do for the least of these we do for Him. In Acts 4, believers shared so that no one among them was needy.',
 ['Benevolence meets real needs with compassion and wisdom.','Use a simple application and review process that is fair and private.','Combine help with prayer and a path toward stability.'],
 ['Create a benevolence application, criteria, and funds policy approved by your pastor.','Partner with local agencies for needs beyond your church’s resources.','Follow up with people who received help.'],
 ['Who is being missed in your congregation?','How do you give help that respects dignity?'],
 'Write a benevolence policy and process with an approval path.'),
L('Visitation, Prayer for the Sick, and Ordinances',['James 5:14-15','John 13:14-15','1 Corinthians 11:23-26'],
 'James says that the sick should call the elders of the church to pray over them and anoint them with oil in the name of the Lord. Jesus washed the disciples’ feet and told them to do as He had done. Paul passes on the account of the Lord’s Supper and says to proclaim the Lord’s death until He comes.',
 ['Visit with gentleness, prayer, and Scripture, and follow your pastor’s lead.','Prepare for ordinances with reverence and order, following your church’s practice.','Respect privacy and health needs, and know when to call for help.'],
 ['Create a visitation roster and a short prayer and Scripture guide.','Train deacons on the church’s practice of ordinances and preparation steps.','Keep a record of visits and needs and report to the pastor.'],
 ['What do the sick and homebound in your church need most?','How can you prepare your heart before serving in ordinances?'],
 'Design a visitation plan and an ordinance preparation checklist.')
],
quiz:[
Q('What does James 1:27 describe as pure religion?','Caring for orphans and widows in their distress','Following rituals only','Attending every meeting','Avoiding the world entirely'),
Q('Who should lead decisions on anointing and prayer for the sick?','The pastor and elders, following church practice','Whoever is available','Visitors only','No one'),
Q('Why keep records of visits and needs?','To follow up and care for people well','To share publicly','To judge people','To avoid visiting')],
proj:P('Care and Ordinance Plan','Create a plan for benevolence, visitation, and ordinances for your church.',
 ['Benevolence policy and process','Visitation roster and prayer guide','Ordinance preparation checklist'],4)});

/* ---------- Usher & Hospitality Ministry ---------- */
C({id:'dpt-usher',code:'MIN 400',track:'3',grp:'spec',key:'usher',title:'Usher & Hospitality Department Leadership',
goal:'Lead an usher and hospitality ministry that welcomes everyone, keeps order, and creates a safe, warm house of worship.',
lessons:[
L('The Heart of Hospitality',['Romans 12:13','Hebrews 13:2','1 Peter 4:9'],
 'Paul tells believers to practice hospitality. Hebrews says do not forget to show hospitality to strangers, for some have entertained angels without knowing it. Peter says to offer hospitality to one another without grumbling.',
 ['Hospitality is love in action toward guests and members alike.','The first few minutes shape how people experience God’s house.','A welcoming team smiles, listens, and serves without complaining.'],
 ['Write a hospitality mission statement with your pastor.','Practice greeting and escorting guests with your team.','Pray for guests and members before each service.'],
 ['What do people feel when they walk through your doors?','Who tends to be overlooked at the entrance?'],
 'Write a hospitality mission statement and a short greeting script for your team.'),
L('Serving at the Door: Roles and Order',['Psalm 84:10','1 Chronicles 9:22-27','1 Corinthians 14:40'],
 'The psalmist would rather be a doorkeeper in God’s house than live in the tents of the wicked. The Levitical gatekeepers were appointed to guard the entrances and serve in the house of God. Paul says all things should be done decently and in order.',
 ['Define roles: greeters, ushers, seating, offering, and special needs help.','A prepared team helps the service flow without distraction.','Serve with humility; ushers are servants of the whole church.'],
 ['Write a role card for each position.','Create a service-day checklist from arrival to dismissal.','Train in how to seat late arrivals, help the elderly, and handle distractions gracefully.'],
 ['Where does confusion happen during your service?','How do you correct disorder with kindness?'],
 'Produce role cards and a service-day checklist.'),
L('Recruiting, Training, and Scheduling Your Team',['Exodus 18:21','Ephesians 4:11-13','Galatians 6:9'],
 'Jethro advised selecting capable people who fear God to share the work. Ephesians says leaders prepare God’s people for works of service. Paul encourages believers not to grow weary in doing good.',
 ['Recruit people with warm hearts, good character, and reliability.','Train on policy, safety, and care, and refresh regularly.','Schedule fairly and give people rest and appreciation.'],
 ['Create a sign-up and screening process for new team members.','Plan an orientation and a quarterly refresher.','Rotate schedules and thank volunteers often.'],
 ['What causes volunteers to burn out?','How can you better appreciate your team?'],
 'Build a recruiting, orientation, and schedule plan for your team.')
],
quiz:[
Q('What does Hebrews 13:2 teach?','Show hospitality to strangers','Avoid guests','Close the doors early','Let others welcome'),
Q('What is a key duty of an usher?','Serve and keep order with kindness','Control the service','Choose the sermon','Sit in the back and rest'),
Q('What helps volunteers stay healthy in service?','Fair schedules and appreciation','Constant demands','No training','No communication')],
proj:P('Hospitality Department Handbook','Create a handbook with mission, role cards, service checklist, and recruiting plan.',
 ['Mission and greeting script','Role cards and service-day checklist','Recruiting, orientation, and schedule plan'],4)});

C({id:'dpt-usher2',code:'MIN 401',track:'3',grp:'spec',key:'usher',title:'Usher & Hospitality: Guest Experience, Safety & Special Events',
goal:'Create an excellent guest experience, prepare for emergencies, and serve well at large events.',
lessons:[
L('Guest Experience and Follow-Up',['Matthew 25:35','Romans 15:7','Luke 14:23'],
 'Jesus says, “I was a stranger and you welcomed me.” Paul says to accept one another just as Christ accepted you. In the parable of the banquet, the master tells his servant to go out and bring people in so the house will be full.',
 ['Think through a guest’s whole journey: parking, door, seat, service, and next step.','Offer a simple welcome and a way to connect after the service.','Follow up within a few days with a call, card, or message.'],
 ['Walk your campus as a first-time guest and write what you notice.','Create a welcome card and a follow-up plan.','Check signage, restrooms, nursery, and accessibility.'],
 ['What would make a first-time guest feel lost?','How will you help guests take a next step?'],
 'Walk the guest journey and write five improvements with owners and dates.'),
L('Safety, Emergencies, and Accessibility',['Proverbs 22:3','Psalm 82:3','Leviticus 19:14'],
 'Proverbs says the prudent see danger and take refuge. Psalm 82 calls for defending the weak and the needy. Leviticus says not to put a stumbling block before the blind, a principle of making ways accessible.',
 ['Prepare for medical emergencies, fire, severe weather, and security concerns.','Train the team on exits, first aid, and who to call.','Make the building welcoming for people with disabilities.'],
 ['Create an emergency plan with roles and a communication tree.','Check exits, lighting, and first-aid supplies each month.','Review accessibility: ramps, seating, and hearing or vision needs.'],
 ['What would your team do in the first two minutes of an emergency?','Who might be unable to fully participate right now?'],
 'Write an emergency plan and accessibility checklist for your building.'),
L('Special Events and Large Gatherings',['Luke 14:28-30','Proverbs 15:22','Nehemiah 2:11-18'],
 'Jesus teaches us to count the cost before building. Proverbs says plans fail for lack of counsel but succeed with many advisers. Nehemiah surveyed the walls, shared the vision, and gathered the people to build.',
 ['Plan events with checklists, timelines, and clear roles.','Involve the pastor and other departments early.','Debrief afterward and record lessons for next time.'],
 ['Create an event planning template with timeline, roles, and budget.','Hold a briefing before each event.','Debrief within one week and update your template.'],
 ['What went wrong at your last large event, and how can you prevent it?','Which departments should you partner with?'],
 'Plan a large event using a template and a team briefing.')
],
quiz:[
Q('Why walk the campus as a first-time guest?','To see problems newcomers face','To rest','To check the schedule','To count chairs'),
Q('What should an emergency plan include?','Roles, exits, and who to call','Only a phone number','No assignments','Only a list of members'),
Q('What should happen after a large event?','A debrief to record lessons','Nothing','Blame assignments','Immediate cancellation of the next event')],
proj:P('Guest Experience and Safety Plan','Create a plan for guest experience, emergency readiness, accessibility, and special events.',
 ['Guest journey review and improvement list','Emergency plan and accessibility checklist','Special event template and debrief form'],4)});

/* ---------- Couples Ministry ---------- */
C({id:'dpt-couples',code:'MIN 410',track:'3',grp:'spec',key:'couples',title:'Couples Ministry Department Leadership',
goal:'Lead a couples ministry that strengthens marriages, supports engaged couples, and honors God’s design.',
lessons:[
L('God’s Design for Marriage',['Genesis 2:18-24','Matthew 19:4-6','Hebrews 13:4'],
 'God created man and woman and made marriage a covenant of leaving, joining, and becoming one flesh. Jesus points back to the beginning and says that what God has joined together, no one should separate. Hebrews says marriage should be honored by all and the marriage bed kept pure.',
 ['Marriage is a covenant before God, not only a contract between two people.','A healthy marriage reflects Christ’s love and serves the church and community.','Couples ministry strengthens marriages at every stage.'],
 ['Write a short biblical vision for marriage in your church with your pastor.','Identify the stages you will serve: engaged, newlywed, established, struggling.','Pray for couples by name each week.'],
 ['What marriage messages is your congregation hearing from the culture?','Which couples need support now?'],
 'Draft a one-page vision and list of the stages your ministry will serve.'),
L('Building Healthy Marriages: Love, Communication, and Conflict',['Ephesians 5:21-33','1 Corinthians 13:4-7','Ephesians 4:26-27'],
 'Paul calls couples to submit to one another out of reverence for Christ, with husbands loving sacrificially and wives respecting their husbands. Love is patient and kind, not self-seeking, and it keeps no record of wrongs. Paul says to not let the sun go down on your anger and not to give the devil a foothold.',
 ['Healthy marriages practice listening, kindness, and forgiveness every day.','Conflict is normal; how it is handled shapes the marriage.','Teach simple tools: speaker-listener, timeouts, and repair after fights.'],
 ['Teach a communication skill and let couples practice it together.','Offer date-night ideas and simple devotions couples can share.','Provide a way to ask for help early, before a crisis.'],
 ['What patterns do you see in couples who struggle?','How can you model grace in your own marriage or relationships?'],
 'Plan a four-session enrichment series with outlines and practice tools.'),
L('Leading with Wisdom, Privacy, and Boundaries',['Proverbs 11:13','1 Timothy 5:1-2','Proverbs 15:22'],
 'Proverbs warns that a gossip betrays a confidence. Paul tells Timothy to treat older and younger people with respect and purity. Proverbs says plans succeed with many advisers.',
 ['Keep confidences and never discuss couples’ struggles outside appropriate leadership.','Set boundaries: leaders do not counsel the opposite sex alone and refer serious issues.','Know when to involve the pastor or a licensed professional.'],
 ['Write a leaders’ code of conduct with your pastor.','Create a referral list for counselors and crisis services.','Meet couples in open or paired settings.'],
 ['What boundaries protect you and the couples you serve?','Who will you consult when you are unsure?'],
 'Write a code of conduct and referral guide for your leaders.')
],
quiz:[
Q('What does Jesus say about marriage in Matthew 19?','What God has joined together, no one should separate','Marriage is optional','Marriage is only a contract','Marriage is only for adults over 40'),
Q('What is a good way to handle conflict?','Listen, speak with kindness, and repair quickly','Avoid it forever','Win every argument','Keep a record of wrongs'),
Q('What should leaders do with private information about couples?','Keep it confidential unless safety or law requires reporting','Share it with friends','Use it as sermon examples','Post it online')],
proj:P('Couples Ministry Blueprint','Create a plan with vision, stages, enrichment series, and leader boundaries.',
 ['Vision and list of stages','Four-session enrichment outline','Code of conduct and referral guide'],4)});

C({id:'dpt-couples2',code:'MIN 411',track:'3',grp:'spec',key:'couples',title:'Couples Ministry: Premarital, Enrichment & Restoration',
goal:'Prepare couples for marriage, enrich growing marriages, and help hurting marriages find hope.',
lessons:[
L('Premarital Preparation',['Luke 14:28-30','Proverbs 24:3-4','Amos 3:3'],
 'Jesus teaches us to count the cost before building. Proverbs says a house is built by wisdom and filled with precious things through knowledge. Amos asks whether two can walk together unless they agree.',
 ['Premarital counseling should cover faith, communication, money, family, expectations, and purity.','Use a simple course with a pastor or trained couple as mentors.','Ask honest questions and encourage couples to pause if there are serious concerns.'],
 ['Outline a six-session premarital course with homework.','Train mentor couples on listening and Scripture.','Offer a follow-up check-in after the wedding.'],
 ['What topics do couples often avoid?','How will you handle a couple who is not ready?'],
 'Create a premarital curriculum with sessions, homework, and mentor guide.'),
L('Enriching Established Marriages',['Ecclesiastes 4:9-12','Colossians 3:12-14','Psalm 127:1'],
 'Ecclesiastes says two are better than one, and a cord of three strands is not quickly broken. Paul tells believers to clothe themselves with compassion, kindness, humility, gentleness, and patience, and above all to love. The psalmist says unless the Lord builds the house, the builders labor in vain.',
 ['Growing marriages need regular time together, shared prayer, and fun.','Offer yearly retreats, date nights, and small groups.','Celebrate anniversaries and testimonies to encourage others.'],
 ['Plan an annual couples retreat or weekend.','Create a monthly couples group with a simple format.','Gather and share testimonies with permission.'],
 ['What helps your own marriage or relationships grow?','How will you include couples who are hesitant to join?'],
 'Plan a yearly calendar of couples events and groups.'),
L('Helping Hurting Marriages: Care and Restoration',['Isaiah 61:3-4','Galatians 6:1-2','Psalm 34:18'],
 'Isaiah promises that God gives beauty for ashes and rebuilds ancient ruins. Paul tells spiritual people to restore a stumbling brother gently and carry one another’s burdens. The psalmist says the Lord is close to the brokenhearted.',
 ['Offer hope and practical help to marriages in crisis.','Know the signs of abuse and refer immediately to your pastor and safe resources.','Pair couples with trained mentors and counselors, and follow up consistently.'],
 ['Create a crisis plan with phone numbers for pastor, counselors, and safety services.','Train leaders to spot signs of abuse and what to do.','Check in regularly and pray with couples in recovery.'],
 ['What fear holds you back from helping marriages in crisis?','How will you protect someone who is unsafe?'],
 'Write a crisis response plan and referral list approved by your pastor.')
],
quiz:[
Q('What should premarital preparation cover?','Faith, communication, money, family, expectations, and purity','Only the wedding plans','Only finances','Only the honeymoon'),
Q('Why plan regular couples events?','To strengthen marriages and build community','To fill the calendar','To compete with other churches','To avoid counseling'),
Q('What should a leader do if abuse is suspected?','Involve the pastor and refer to safe resources immediately','Ignore it','Handle it alone','Tell the couple to try harder')],
proj:P('Premarital, Enrichment & Restoration Plan','Build a plan to prepare couples, enrich marriages, and respond to marriages in crisis.',
 ['Premarital curriculum and mentor guide','Yearly couples calendar','Crisis response plan and referral list'],4)});
/* ================= BFM DISCIPLESHIP CLASS (track D): DSC 101 and DSC 201 ================= */
C({id:"dsc-101",code:"DSC 101",track:"D",grp:"req",title:"Foundations for Salvation and New Life in Christ",
goal:"Understand what a disciple is and build the daily foundations of Scripture, prayer, and community.",
lessons:[
L("What It Means to Be a Disciple",["Luke 9:23-25","Matthew 4:18-20","John 8:31-32"],
 "Jesus says that anyone who wants to follow Him must deny themselves, take up their cross daily, and follow Him. He called ordinary fishermen with the words, “Follow Me,” and they left their nets. He tells those who believed in Him that if they hold to His teaching they are truly His disciples, and the truth will set them free.",
 ["A disciple is a learner and follower of Jesus who shapes their whole life around Him.","Following Jesus costs something: putting Him above comfort, plans, and pride.","Discipleship is a lifelong journey, not a one-time class."],
 ["Write what following Jesus means to you in two or three sentences.","Name one area of life where you find it hardest to follow Him and pray about it daily this week.","Ask a mature believer how they began following Jesus."],
 ["What is one thing Jesus is asking you to leave behind or take up?","Who is walking with you as you follow Jesus?"],
 "Write a short personal discipleship commitment and share it with your class leader."),
L("Abiding in Christ and His Word",["John 15:1-11","Psalm 119:105","Joshua 1:8"],
 "Jesus says that He is the vine and His followers are the branches, and that apart from Him they can do nothing. The psalmist says God’s word is a lamp to his feet and a light for his path. God tells Joshua to keep His word on his lips, meditate on it day and night, and be careful to do what it says.",
 ["Abiding means staying close to Jesus through His Word, prayer, and obedience.","Reading Scripture daily shows us how to live and who God is.","Meditating on a passage and doing it is how God’s word changes us."],
 ["Choose a time and place and read a short passage of Scripture each day this week.","Write one verse on a card and memorize it.","After reading, ask: What does this say? What does it mean? What will I do?"],
 ["What gets in the way of reading the Bible regularly?","What is one thing Scripture has already taught you?"],
 "Keep a seven-day reading journal and bring it to class."),
L("A Life of Prayer",["Matthew 6:5-13","Luke 18:1","Philippians 4:6-7"],
 "Jesus teaches His followers to pray to the Father in private, without showing off, and gives a model prayer beginning “Our Father in heaven.” Luke records that Jesus told a parable to show that they should always pray and not give up. Paul says not to be anxious about anything, but to present requests to God with thanksgiving, and God’s peace will guard hearts and minds in Christ.",
 ["Prayer is talking and listening to our Father; it is a relationship, not a performance.","A simple pattern is worship, thanks, confession, requests for others, and requests for yourself.","Persistence in prayer builds trust, and God’s peace guards us as we pray."],
 ["Pray the Lord’s Prayer slowly and rewrite each line in your own words.","Make a prayer list of five people and pray for them each day.","Set aside ten minutes for quiet prayer without a phone."],
 ["What makes prayer hard for you?","What are you anxious about that you can bring to God now?"],
 "Write a one-page prayer plan with times, topics, and a list of people."),
L("Walking Together in Community",["Acts 2:42-47","Hebrews 10:24-25","Proverbs 27:17"],
 "The first believers devoted themselves to the apostles’ teaching, to fellowship, to breaking bread, and to prayer, and the Lord added to their number daily. Hebrews urges believers to spur one another on to love and good deeds and not to give up meeting together. Proverbs says as iron sharpens iron, so one person sharpens another.",
 ["Discipleship happens in community; we grow with other believers.","Regular worship, a small group, and a friend who encourages you help you stay strong.","Be a giver as well as a receiver: encourage, serve, and pray for others."],
 ["Attend worship and one small group or class this month.","Ask one person to be your accountability partner and set a weekly check-in.","Send an encouraging message to someone in your church this week."],
 ["Who in your church encourages you? Who could you encourage?","What keeps you from being fully connected?"],
 "Choose a small group and an accountability partner and write down your plan.")
],
quiz:[
Q("What does Jesus say a follower must do in Luke 9:23?","Deny themselves, take up their cross daily, and follow Him","Attend church weekly","Memorize the Bible","Give up all possessions at once"),
Q("In John 15, what is Jesus’ picture of the relationship between Him and believers?","The vine and the branches","The shepherd and a hired hand","The king and a stranger","The teacher and a visitor"),
Q("Which verse calls God’s word a lamp to our feet?","Psalm 119:105","Joshua 1:8","Proverbs 27:17","Hebrews 10:25"),
Q("Why is community important in discipleship?","Believers encourage and sharpen one another","It replaces personal prayer","It is only for leaders","It is optional for mature believers")],
proj:P("My Discipleship Foundations Plan","Create a simple weekly rhythm for Scripture, prayer, and fellowship, and share it with your class leader.",
 ["A written personal discipleship commitment","A seven-day Scripture reading journal","A prayer plan and a chosen small group or accountability partner"],3)});

C({id:"dsc-201",code:"DSC 201",track:"D",grp:"req",title:"Walking in the Spirit and Christian Living",
goal:"Grow in serving, sharing your faith, obeying God, and helping others follow Jesus.",
lessons:[
L("Gifts and Service",["1 Corinthians 12:4-11","Romans 12:4-8","1 Peter 4:10"],
 "Paul says there are different gifts, but the same Spirit, and that the Spirit gives them to each person for the common good. He compares believers to one body with many parts, each with a different function. Peter says that each one should use whatever gift they have received to serve others, as faithful stewards of God’s grace.",
 ["Every believer has gifts to serve the church and others.","Gifts are given for the common good, not for pride.","Serving in a ministry is how we discover and grow in our gifts."],
 ["List things you do well and enjoy, and ask two people what they see in you.","Visit or talk with one ministry leader about serving.","Commit to serve for a few weeks and then reflect."],
 ["Where do you think God is leading you to serve?","What fear or excuse keeps you from serving?"],
 "Write down your top gifts and a first step toward serving in a ministry."),
L("Sharing Your Faith",["Matthew 28:18-20","1 Peter 3:15","Acts 1:8"],
 "Jesus commands His followers to go and make disciples of all nations, promising to be with them always. Peter says to always be ready to give an answer to everyone who asks about the hope you have, with gentleness and respect. Jesus says the Holy Spirit will empower His followers to be His witnesses starting at home and reaching to the ends of the earth.",
 ["Every disciple is called to share the good news.","Your story of what Jesus has done is a powerful witness.","Be gentle, respectful, and ready, and depend on the Holy Spirit."],
 ["Write a three-minute story: life before Jesus, how you met Him, and life now.","Pray for three people by name who need Jesus.","Invite one person to a service or event."],
 ["Who has God placed in your life to share with?","What fear holds you back from talking about Jesus?"],
 "Write your testimony and practice sharing it with a friend."),
L("Obedience, Holiness, and Perseverance",["John 14:15","1 Peter 1:14-16","Galatians 6:9"],
 "Jesus says, “If you love Me, keep My commands.” Peter calls believers to be holy in all they do, as the One who called them is holy. Paul encourages believers not to become weary in doing good, because at the proper time they will reap a harvest if they do not give up.",
 ["Obedience is how love for Jesus shows up in daily life.","Holiness means being set apart for God in character and choices.","Growth takes patience; keep going even when it is hard."],
 ["Identify one habit to stop and one to start, and tell a trusted friend.","Confess sin quickly to God and receive His forgiveness.","Write down a hard season and how God helped you through it."],
 ["What is one command of Jesus you struggle to obey?","What helps you keep going when you want to quit?"],
 "Choose one area to grow in for thirty days and track your progress."),
L("Making Disciples Who Make Disciples",["2 Timothy 2:2","Colossians 1:28-29","1 Thessalonians 2:8"],
 "Paul tells Timothy to entrust what he has heard to faithful people who will also be qualified to teach others. He says he proclaims Christ, admonishing and teaching everyone so that he may present everyone mature in Christ, and he labors toward that goal with Christ’s energy. In Thessalonica, he and his team shared not only the gospel but their very lives because the people had become dear to them.",
 ["Discipleship multiplies: you learn, then help someone else learn.","Share your life, not only information.","Pray for and invest in one or two people over time."],
 ["Pray and ask God who He wants you to help grow in faith.","Invite that person to read and pray with you weekly.","Meet with your own mentor to talk about how to disciple someone."],
 ["Who helped you grow in Christ, and how?","Who could you invest in this year?"],
 "Create a six-week plan to meet with one person to read, pray, and encourage.")
],
quiz:[
Q("According to 1 Corinthians 12, why does the Spirit give gifts?","For the common good","To make some people more important","To replace Scripture","Only for pastors"),
Q("What does 1 Peter 3:15 tell us about sharing our faith?","Be ready to answer with gentleness and respect","Avoid talking about faith","Argue until others agree","Only share with family"),
Q("Which of these is the picture of discipleship in 2 Timothy 2:2?","Teaching faithful people who teach others","Keeping faith private","Collecting students","Focusing on buildings"),
Q("What does Jesus say shows love for Him in John 14:15?","Keeping His commands","Singing loudly","Attending every event","Giving the most money")],
proj:P("Discipleship in Action Project","Serve, share, and invest in someone this month, and report what you learned.",
 ["Serve in a ministry for at least four weeks","Write and share your testimony with one person","Meet with someone you are helping grow in Christ"],4)});
/* ================= NURSERY MINISTRY (track 3, joined into one course in post.js) ================= */
C({id:'dpt-nursery',code:'MIN 420',track:'3',grp:'spec',key:'nursery',title:'Nursery Ministry Leadership',
goal:'Build a nursery that is loving, safe, and well organized, so parents can worship while their little ones are cared for.',
lessons:[
L('The Heart of Nursery Ministry',['Mark 10:13-16','Psalm 127:3','Matthew 18:5'],
 'People brought little children to Jesus so that He would touch them, and the disciples scolded them. Jesus was displeased and said to let the little children come to Him and not hinder them, for the kingdom of God belongs to such as these. He took the children in His arms and blessed them. The psalmist says children are a heritage from the Lord, and Jesus says that whoever welcomes a little child in His name welcomes Him.',
 ['Nursery ministry is not babysitting; it is welcoming children the way Jesus did.','Every child is a gift from God and deserves patience, warmth, and attention.','A calm, loving nursery frees parents to worship and shows the church values families.'],
 ['Write a one-sentence purpose statement for your nursery.','Pray by name for each baby and toddler in the nursery this week.','Visit the nursery on a Sunday and notice what a first-time parent would see and feel.'],
 ['What does it mean to welcome a child "in Jesus’ name"?','What would make a nervous parent feel at ease leaving a child with you?'],
 'Write a short vision and purpose statement for the nursery and share it with your pastor.'),
L('A Safe Place: Protecting Little Ones',['Psalm 82:3-4','Proverbs 22:3','Luke 17:1-2'],
 'The psalm calls God’s people to defend the weak and rescue the needy. Proverbs says the prudent see danger and take refuge, while the simple keep going and suffer for it. Jesus speaks very seriously about anyone who causes one of the little ones to stumble, which is a reminder that protecting children is a spiritual duty.',
 ['Protecting children means having clear rules that every worker follows every time.','Two unrelated adults should be present, and doors and windows should allow visibility.','Screen every worker, train them, and keep a simple record of who served and when.'],
 ['Write a checklist of safety rules: two adults, open door, sign-in and sign-out, approved pickup list.','Ask your pastor which background checks and policies your church requires.','Walk the room and note hazards: outlets, cords, small objects, sharp corners, heavy furniture.'],
 ['What safety step would you be most uncomfortable skipping, and why should you never skip it?','Who in the church should hear a concern about a child’s safety?'],
 'Draft a one-page nursery safety policy and review it with your pastor or children’s ministry leader.'),
L('Building and Scheduling a Nursery Team',['Exodus 18:21-23','1 Corinthians 12:12-14','1 Corinthians 14:40'],
 'Jethro advised Moses to choose capable people who fear God to share the load, so that Moses would not wear himself out. Paul says the body is one though it has many parts, and that each part matters. He also says that everything should be done in a fitting and orderly way.',
 ['A good team has a lead, trained workers, and substitutes so no one is overworked.','A steady schedule and clear roles prevent burnout and last-minute gaps.','Orientation and encouragement keep servants joyful and prepared.'],
 ['Make a roster with a lead worker and helpers for each service and a list of substitutes.','Plan a short orientation covering rules, routines, and who to call for help.','Thank each team member in a personal note this month.'],
 ['What is the right size of team for the number of children you serve?','How will you check in on your workers so they do not burn out?'],
 'Build a three-month volunteer schedule with roles and a training plan.')
],
quiz:[
Q('What did Jesus say about the little children in Mark 10?','Let them come to Me and do not hinder them','Wait until they are older','Bring them only on special days','Let the adults decide'),
Q('Why should two unrelated adults be present in the nursery?','To protect the children and the workers','To keep the room crowded','To make the class longer','Because it is traditional only'),
Q('What did Jethro advise Moses to do?','Choose capable people and share the load','Work alone','Stop leading','Hire outsiders only'),
Q('Which is the best way to keep a volunteer team healthy?','A clear schedule, substitutes, and encouragement','Ask the same people every week','Avoid training','Wait for volunteers to offer')],
proj:P('Nursery Vision and Safety Plan','Write the purpose, safety rules, and team plan for a nursery.',
 ['A purpose statement for the nursery','A one-page safety policy with sign-in and sign-out steps','A three-month team roster and orientation plan'],4)});

C({id:'dpt-nursery2',code:'MIN 421',track:'3',grp:'spec',key:'nursery',title:'Nursery Ministry: Infant Care, Parents & Health',
goal:'Care for babies and toddlers with gentleness, partner well with parents, and handle health and emergencies with confidence.',
lessons:[
L('Gentle Care for Babies and Toddlers',['Isaiah 40:11','1 Thessalonians 2:7','Luke 2:52'],
 'Isaiah pictures God as a shepherd who gathers the lambs in His arms and carries them close to His heart, leading the nursing ones gently. Paul says he and his team were gentle among the Thessalonians, like a nursing mother caring for her own children. Luke says Jesus grew in wisdom and stature and in favor with God and people, which reminds us that children grow in many ways.',
 ['Respond to a crying baby quickly and calmly; comfort is part of the ministry.','Follow each baby’s feeding and sleeping instructions from the parent.','Toddlers learn through play, songs, routines, and short simple Bible moments.'],
 ['Create a simple routine for the toddler hour: welcome, play, song, snack, story, and goodbye.','Prepare a short Bible story and one song you can repeat each week.','Keep a card for each baby listing feeding times, naps, and special notes from parents.'],
 ['What does gentle, steady care look like in your nursery?','How can a short Bible story or song plant seeds of faith in a toddler?'],
 'Plan one full nursery morning with routine, activities, and a short Bible moment.'),
L('Partnering with Parents',['Deuteronomy 6:6-7','Proverbs 22:6','Ephesians 6:4'],
 'Moses tells parents to impress God’s commands on their children and to talk about them at home and on the road. Proverbs says to train up a child in the way he should go, and Paul says to bring children up in the training and instruction of the Lord. The nursery supports parents; it never replaces them.',
 ['Parents are the primary teachers of faith; the nursery is a partner.','Clear check-in, check-out, and communication build trust.','A short note or update at pickup helps parents feel cared for.'],
 ['Prepare a check-in form with name, allergies, contact numbers, and pickup people.','Write a welcome letter for new parents explaining your routines and how to reach you.','Plan to share a simple take-home note or verse each month.'],
 ['What do parents most need from the nursery on Sunday?','How will you handle a child who is upset at drop-off?'],
 'Create a parent welcome packet with a check-in form and a letter.'),
L('Health, Cleanliness, and Emergencies',['1 Corinthians 14:40','Proverbs 22:3','Philippians 2:4'],
 'Paul says that everything should be done in a fitting and orderly way. Proverbs says the prudent see danger and take refuge. Philippians urges believers to look not only to their own interests but also to the interests of others, which includes the health and safety of every child in the room.',
 ['Wash hands before and after diaper changes and feeding, and clean toys and surfaces often.','Know your allergy list, and keep medicine and food rules written and visible.','Have a simple emergency plan: exits, who calls whom, and how parents are reached.'],
 ['Make a cleaning checklist for toys, changing areas, and surfaces.','Write the steps for what to do if a child is ill, hurt, or has an allergic reaction, and review them with your pastor.','Post emergency contacts, exits, and the plan for parent notification.'],
 ['What health step is easiest to overlook in a busy nursery?','Who needs to know the emergency plan before Sunday?'],
 'Write a one-page health and emergency plan for the nursery.')
],
quiz:[
Q('Isaiah 40:11 pictures God as what?','A shepherd who gathers lambs in His arms','A distant king','A teacher with a test','A builder'),
Q('Who is the primary teacher of faith for a child?','The parents, with the church as a partner','The nursery workers alone','The pastor only','No one in particular'),
Q('What should happen before every Sunday regarding allergies?','Check the allergy list and food rules','Ignore them','Ask the children','Let parents decide at pickup only'),
Q('What does 1 Corinthians 14:40 teach?','Do everything in a fitting and orderly way','Do things quickly','Keep things flexible','Avoid planning')],
proj:P('Nursery Care and Health Handbook','Prepare the care routines, parent communication, and health plan for a nursery.',
 ['A sample nursery morning routine','A parent welcome packet and check-in form','A health, cleaning, and emergency checklist'],4)});
/* ================= CLASS FINAL TESTS (one per class, pass mark 70%) ================= */
const FINAL=(o)=>C({id:o.id,code:o.code,track:o.track,grp:"req",exam:true,pass:0.7,title:o.title,goal:o.goal,
lessons:[L("Final Test Review",o.ref,o.bib,o.key,
 ["Read through each course summary above and write down one thing you learned from every course.","Pray and ask the Holy Spirit to help you remember and apply what you learned.","Talk with your class leader about any question you are still unsure of."],
 ["Which course taught you the most, and why?","What is one thing you will do differently because of this class?"],
 o.act)],
quiz:o.quiz,
proj:P("Final Test Sign-Off","Meet with your pastor or class leader to review your final test, share what you learned, and name your next step.",
 ["I reviewed my final test results with my pastor or class leader.","I wrote one key lesson from this class in my own words.","I named one next step and when I will take it."],0.5)});

FINAL({id:"bap-final",code:"BAP 190",track:"B",title:"Water Baptism Final Test",
 goal:"Show that you understand what baptism means, who it is for, and how to prepare for your baptism day and live in new life.",
 ref:["Romans 6:3-11","Acts 2:37-41","Matthew 28:18-20"],
 bib:"In baptism a believer goes under the water to picture death and burial with Christ and comes up to picture new life. In Acts, people were baptized after believing. Jesus commands His followers to baptize in the name of the Father, the Son, and the Holy Spirit. This review brings together the three courses of the Water Baptism Class.",
 key:["Baptism is an act of obedience that follows faith. It pictures death, burial, and resurrection with Christ and is a public declaration that the old life is finished.","Baptism is for those who have personally believed. The water does not save us; we are saved by grace through faith, and baptism expresses it.","Prepare to share your testimony, expect immersion in the name of the Father, Son, and Holy Spirit, and then walk in new life with the church family."],
 act:"Write your three-part testimony (before Christ, how you met Him, what has changed) and practice sharing it with your pastor.",
 quiz:[
 Q("Why should a believer be baptized?","Jesus was baptized and commands His followers to be baptized","It is required to earn salvation","It is a church tradition with no biblical basis","It is only for people who feel guilty"),
 Q("What does going under the water picture?","Death and burial with Christ","Washing away sins by the water itself","Being cleansed by a priest","Entering a church building"),
 Q("What does coming up out of the water picture?","New life with Christ","Returning to a normal life","Completion of a course","Receiving a certificate"),
 Q("According to Romans 6, what is baptism a picture of?","Being united with Christ in His death and resurrection","Joining a social club","A promise to stop all sin forever","A family celebration"),
 Q("Does the water save us?","No. We are saved by grace through faith, and baptism expresses what Jesus has done","Yes, if the person is baptized by a pastor","Yes, but only if it is done quickly","Only if the person understands every doctrine"),
 Q("How soon did people in the book of Acts typically get baptized?","Quickly after believing","After many years of waiting","Only at the end of their lives","Only after being church members for a year"),
 Q("Who should be baptized?","Those who have personally believed in Jesus Christ as Savior and Lord","Anyone whose parents want it for them","Only those who have never sinned","Only church leaders"),
 Q("According to Acts 10:44-48, what does baptism show about who can be baptized?","People of every background who have received the Spirit and believed","Only people of one background","Only those who have been in church their whole lives","Only those with a perfect past"),
 Q("What does Acts 2:38 connect with baptism?","Repentance","Church membership dues","Passing a test","Moving to a new neighborhood"),
 Q("What does 1 Peter 3:21 call baptism?","An appeal to God for a clear conscience","A payment for sin","A secret ceremony","A way to avoid judgment without faith"),
 Q("What is the three-part outline for a simple testimony?","Life before Christ, how you met Him, what has changed since","Your family history, your education, your job","Your mistakes, your lessons, your plans","What you believe, what you do, what you want"),
 Q("What should a testimony focus on?","What God has done, keeping it short, honest, and centered on Jesus","Details of past sins","Proving you are a good person","Convincing others to agree with you"),
 Q("In whose name are believers baptized?","The Father, the Son, and the Holy Spirit","The pastor and the church","Peter and Paul","The local congregation"),
 Q("What is baptism by immersion?","Going down into the water and coming up out of it","Sprinkling a few drops of water on the head","Washing the hands before service","Standing in a pool without going under"),
 Q("What should happen after baptism?","Walk in new life: put off old habits, put on love and kindness, and stay close to the church family","Nothing more is required","Wait until you feel different","Move away from your old community")]});

/* ================= TEACHER CERTIFICATION (track T, optional, by permission) ================= */
C({id:"tch-101",code:"TCH 101",track:"T",grp:"req",title:"Called to Teach",
goal:"Understand the biblical calling of a teacher, the character a teacher needs, and the seriousness of handling God’s Word.",
lessons:[
L("Teaching in the Bible",["Deuteronomy 6:4-9","Matthew 28:19-20","Ephesians 4:11-13"],
 "God told Israel to teach His commands to their children at home and on the way. Jesus commanded His followers to make disciples and teach them to obey all He had commanded. Paul says Christ gave teachers to the church to equip God’s people for service until they reach maturity.",
 ["Teaching is part of the church’s mission, not an optional extra.","Teaching aims at obedience and growth, not only information.","Teaching in the church equips others to serve."],
 ["Write in your own words why God cares about teaching.","Read Deuteronomy 6:4-9 and list the places and times it names for teaching.","Thank the teacher who most helped your faith and tell them why."],
 ["Who taught you about Jesus, and what did they do well?","What is one thing you hope your students will do because of your teaching?"],
 "Write a short statement of why you want to teach and share it with your pastor."),
L("The Character of a Teacher",["James 3:1","1 Timothy 4:12-16","Titus 2:7-8"],
 "James warns that those who teach will be judged more strictly. Paul tells Timothy to set an example in speech, conduct, love, faith, and purity, and to watch his life and doctrine closely. He tells Titus to show integrity and seriousness in his teaching.",
 ["Your life teaches as much as your words do.","Teachers carry added responsibility and should take it humbly.","Doctrine and life belong together: watch both."],
 ["Pray through James 3:1 and ask God to search your heart.","List two habits that help your own walk with God and keep them this month.","Ask a trusted leader where they see you growing as an example."],
 ["Where is there a gap between what you teach and how you live?","Who holds you accountable?"],
 "Complete a short self-check of your character and habits and discuss it with a mentor."),
L("Handling God’s Word with Care",["2 Timothy 2:15","2 Timothy 3:16-17","Acts 17:11"],
 "Paul urges Timothy to present himself to God as a worker who correctly handles the word of truth. All Scripture is inspired by God and useful for teaching, rebuking, correcting, and training. The Bereans examined the Scriptures every day to see if what they heard was true.",
 ["Scripture is the authority; the teacher serves it and does not own it.","Study before you teach: understand the passage before you explain it.","Welcome questions and show how to check teaching against the Bible."],
 ["Choose a short passage and write what it says, what it meant to the first readers, and how it applies today.","Practice saying “I do not know. Let me find out,” when you are unsure.","Review the BFM statement of beliefs with your pastor."],
 ["Which passage would you find hardest to teach, and why?","How will you handle a question you cannot answer?"],
 "Prepare a one-page study of a short Bible passage and review it with your pastor.")],
quiz:[
Q("According to Deuteronomy 6:4-9, where should God’s commands be taught?","At home and on the way, in everyday life","Only in the temple","Only by priests","Only on festival days"),
Q("What did Jesus tell His followers to teach new disciples (Matthew 28:20)?","To obey everything He commanded","A list of church traditions","Only the basics of salvation","The history of the church"),
Q("According to Ephesians 4:11-13, why did Christ give teachers to the church?","To equip God’s people for service and maturity","To hold authority over the congregation","To entertain the church","To replace the need for personal Bible reading"),
Q("What does James 3:1 say about teachers?","They will be judged more strictly","They are guaranteed success","They are above correction","They no longer need to learn"),
Q("What did Paul tell Timothy to be, in 1 Timothy 4:12?","An example in speech, conduct, love, faith, and purity","A strict enforcer of rules","An expert who never asks questions","A speaker people will remember"),
Q("What belongs together for a teacher?","Doctrine and life","Talent and fame","Knowledge and authority","Speed and volume"),
Q("What does it mean to handle the word of truth correctly (2 Timothy 2:15)?","Study it carefully and explain it accurately","Quote it often","Pick verses that support your opinion","Say what the audience prefers"),
Q("What is the right response when a student asks something you cannot answer?","Say you do not know and find out with the help of leaders","Make up an answer so the class stays confident","Tell them to stop asking questions","Change the subject quickly"),
Q("What does Acts 17:11 teach about the Bereans?","They examined Scripture daily to check what they heard","They accepted every teacher","They never asked questions","They avoided studying on their own"),
Q("Which of these is the goal of church teaching?","Obedience and growth in Christ, not only information","Winning arguments","Showing how much the teacher knows","Filling the time")],
proj:P("My Calling to Teach Statement","Write a short statement of your calling, your strengths, and your areas to grow, and review it with your pastor.",
 ["I wrote why I want to teach in my own words.","I listed my strengths and one area to grow.","I reviewed it with my pastor or ministry director."],2)});

C({id:"tch-102",code:"TCH 102",track:"T",grp:"req",title:"Preparing and Planning a Lesson",
goal:"Learn how people learn and how to plan a clear, Bible-centered lesson with a goal, an outline, and an application.",
lessons:[
L("Know Your Students",["Luke 2:46-52","1 Corinthians 3:1-2","Mark 4:33-34"],
 "Jesus as a boy listened to the teachers and asked them questions. Paul fed the Corinthians with milk because they were not ready for solid food. Jesus taught the crowds as much as they could understand, using stories.",
 ["Different ages and stages need different teaching.","Meet people where they are and lead them forward.","Stories, questions, and examples help people understand and remember."],
 ["Write a short profile of the group you want to teach: age, background, needs.","Choose one way to explain a Bible truth to a child and one way for an adult.","Ask two students what helps them learn best."],
 ["What does your group already know about the Bible?","What might keep them from listening?"],
 "Write a student profile of your class and share it with your ministry director."),
L("Choosing a Goal and Outline",["Nehemiah 8:1-8","Acts 8:30-35","Proverbs 4:1-7"],
 "Ezra read the Law and the Levites gave the sense so the people understood. Philip started where the Ethiopian was reading and explained the good news about Jesus. Wisdom must be pursued and held onto.",
 ["Start with one clear goal: what should students know, feel, and do?","Use a simple outline: open, teach, discuss, apply, close.","Keep the main idea of the passage as the main idea of the lesson."],
 ["Pick a passage and write one sentence that states its main idea.","Write what you want your students to do this week because of it.","Build a 30-minute outline with times for each part."],
 ["What is the single most important point of your passage?","What can you leave out so the main point stands out?"],
 "Create a one-page lesson plan with goal, outline, questions, and application."),
L("Study, Illustrate, Apply",["Psalm 119:18","Luke 10:25-37","James 1:22-25"],
 "The psalmist asks God to open his eyes to see wonderful things in His law. Jesus told the story of the good Samaritan to answer a question and called the listener to go and do the same. James says we are not to merely listen to the word, but to do what it says.",
 ["Pray before you study and before you teach.","Illustrations should clarify the passage, not replace it.","Apply the lesson to real life with a specific, doable step."],
 ["Study a passage using observation, interpretation, application.","Find one real-life illustration that fits the main idea.","Write a specific application students can try this week."],
 ["How will you help students move from hearing to doing?","What follow-up will you offer during the week?"],
 "Teach your prepared lesson to one friend and ask for feedback.")],
quiz:[
Q("Why does teaching need to fit the students’ ages and stages?","People understand and grow in different ways and at different levels","Younger students cannot learn the Bible","Older students already know everything","The same lesson works for everyone"),
Q("What did Paul mean by feeding the Corinthians milk, not solid food (1 Corinthians 3:2)?","They were not yet ready for deeper teaching","They were being punished","They needed no teaching","Solid food was forbidden"),
Q("Why did Jesus often teach with stories?","They helped people understand and remember","He wanted to confuse the crowds","He avoided hard subjects","He had no other method"),
Q("What is the first step in planning a lesson?","Decide the main idea and goal for the lesson","Choose a funny opening","Gather as many illustrations as possible","Write a long list of facts"),
Q("A simple lesson outline includes which parts?","Open, teach, discuss, apply, close","Intro, jokes, conclusion","Prayer, silence, song","Question, answer, quiz"),
Q("What does a good application look like?","A specific, doable step students can take this week","A general encouragement to be better","A summary of the passage","A promise to remember the lesson"),
Q("What should an illustration do?","Clarify the passage, not replace it","Entertain the class","Show how well you speak","Fill the time"),
Q("What does James 1:22 tell us about hearing the word?","Do what it says, and do not merely listen","Listening is enough","Only teachers need to obey","Obedience is optional"),
Q("What should you do first when preparing to teach?","Pray and study the passage","Choose a game","Plan your jokes","Write handouts"),
Q("How does Philip’s example in Acts 8 help teachers?","He started where the person was and explained Jesus from Scripture","He gave a long lecture","He avoided questions","He taught only about himself")],
proj:P("My Lesson Plan","Write a complete lesson plan with a goal, outline, questions, illustration, and application and review it with your ministry director.",
 ["I wrote a one-sentence main idea.","I made a timed outline with discussion questions.","I wrote a specific application and reviewed the plan with a leader."],3)});

C({id:"tch-103",code:"TCH 103",track:"T",grp:"req",title:"Leading the Classroom Safely and Well",
goal:"Learn how to lead discussion, manage the room with grace, protect every student, and work as part of a team.",
lessons:[
L("Leading Discussion and Engagement",["Proverbs 20:5","Luke 24:13-35","Acts 2:42"],
 "A purpose in the heart is deep water, but a person of understanding draws it out. On the Emmaus road, Jesus asked questions, listened, and opened the Scriptures. The early church devoted itself to the apostles’ teaching, fellowship, and prayer.",
 ["Ask open questions and listen more than you talk.","Draw in quiet students gently and keep one voice from taking over.","Keep the Bible in the center of the conversation."],
 ["Write five open questions for your next lesson.","Practice waiting five seconds after a question.","Thank students for their answers, even imperfect ones."],
 ["How will you handle an answer that is wrong?","How will you include someone who rarely speaks?"],
 "Lead a ten-minute discussion with a small group and note what worked."),
L("Order, Grace, and Care",["Galatians 6:1-2","Colossians 4:5-6","Matthew 19:13-15"],
 "Believers are to restore one another gently and carry each other’s burdens. Paul asks that our speech always be full of grace, seasoned with salt. Jesus welcomed the children and told His disciples not to hinder them.",
 ["Set clear, kind expectations at the start.","Correct privately when possible and with gentleness.","Every student should feel welcomed and safe."],
 ["Write three simple class guidelines and explain them kindly.","Plan how you will handle a distraction without embarrassing anyone.","Pray for each student by name."],
 ["How do you respond when you feel frustrated?","Who needs extra care in your class right now?"],
 "Write a classroom plan with guidelines and how you will respond to common problems."),
L("Safe Ministry and Teamwork",["Mark 9:42","Ecclesiastes 4:9-12","1 Thessalonians 2:7-8"],
 "Jesus gives a serious warning against causing a little one to stumble. Two are better than one, and a cord of three strands is not quickly broken. Paul describes being gentle among the Thessalonians like a nursing mother caring for her children and sharing his own life.",
 ["Follow the church’s child safety policy every time; never be alone with a child.","Report any concern to the pastor or designated leader right away and follow the law.","Teach with a team: a helper, a substitute, and a leader who supports you."],
 ["Read the church safety policy with your ministry director.","Plan the arrival, dismissal, and restroom procedures for your class.","Recruit a helper who will serve beside you."],
 ["What would you do if a student told you something troubling?","Who will cover for you if you must miss a week?"],
 "Review the safety policy with your ministry director and sign the acknowledgment.")],
quiz:[
Q("What kind of questions best encourage discussion?","Open questions that need more than yes or no","Questions with only one correct answer","Trick questions","Questions that put students on the spot"),
Q("What is a good way to include quiet students?","Invite them gently and give them time to answer","Call on them first without warning","Ignore them","Ask someone else to answer for them"),
Q("Where should the discussion always return to?","The Bible","The teacher’s opinions","The most talkative person","Current events"),
Q("According to Galatians 6:1, how should a person caught in sin be restored?","Gently","Publicly","Quickly and strictly","By ignoring them"),
Q("When a student is disruptive, it is usually best to:","Correct privately and with gentleness when possible","Embarrass them in front of the class","Ignore it completely","Send them home immediately"),
Q("What does Matthew 19:13-15 show about Jesus and children?","He welcomed them and told His disciples not to hinder them","He ignored them","He sent them away","He taught them only in private"),
Q("What is the safest practice for teachers working with children?","Follow the church safety policy and never be alone with a child","Meet one-on-one in a private room","Handle concerns without telling anyone","Allow anyone to help without checking"),
Q("If a student tells you something troubling, what should you do?","Report it to the pastor or designated leader right away","Keep it to yourself","Talk about it with other students","Wait to see if it happens again"),
Q("What does Ecclesiastes 4:9-12 teach about teamwork?","Two are better than one and a cord of three strands is not quickly broken","Leaders should work alone","Teams create confusion","One strong teacher is enough"),
Q("Why should teachers recruit a helper and a substitute?","Teaching is better and safer with a team and coverage","To lighten their own work only","Because the church requires it for status","So no one else can take over")],
proj:P("My Classroom Plan","Write a class guidelines and safety plan, including arrival, dismissal, helpers, and how you will respond to problems.",
 ["I wrote three class guidelines.","I planned arrival, dismissal, and helper coverage.","I reviewed the safety policy with my ministry director."],3)});

C({id:"tch-201",code:"TCH 201",track:"T",grp:"req",title:"Teaching Our Classes: Sunday School, Discipleship, Baptism, and Membership",
goal:"Learn the purpose, content, and cautions for each type of class BFM offers, and how to hand students to the pastor and the next step.",
lessons:[
L("Teaching Sunday School",["Deuteronomy 31:12-13","Luke 2:52","2 Timothy 3:14-15"],
 "Moses told Israel to gather the people, including children, so they could hear, learn to fear the Lord, and follow His law. Jesus grew in wisdom, stature, and favor with God and people. Paul reminds Timothy that from infancy he had known the Scriptures that make a person wise for salvation.",
 ["Sunday school is for every age: children, youth, and adults.","Teach one clear Bible truth in a way students can understand and use.","Partner with parents, who are the first teachers of the faith."],
 ["Write the age group and the main truth you will teach.","Plan a simple activity that helps students remember the lesson.","Send a short note to parents about what students learned."],
 ["How will you help students enjoy God’s Word?","How will you connect with parents?"],
 "Prepare and teach a full Sunday school lesson with your ministry director observing."),
L("Teaching Discipleship",["Matthew 28:18-20","2 Timothy 2:2","Luke 6:40"],
 "Jesus commands His followers to make disciples, baptizing and teaching them to obey. Paul tells Timothy to entrust what he has heard to faithful people who will teach others also. Jesus says a fully trained student will be like the teacher.",
 ["Discipleship is a relationship: share life, not only lessons.","Follow BFM’s Discipleship curriculum and keep to the course goals.","Help each person take one clear next step in obedience."],
 ["Plan a weekly rhythm of teaching, prayer, and check-in for a small group.","Choose one person to meet with regularly and agree on a goal.","Write what you will model, not only what you will say."],
 ["Who is a disciple you hope will teach others someday?","What do you model that you want others to copy?"],
 "Lead one session of a discipleship group or one-on-one meeting and review it with your director."),
L("Teaching Water Baptism Preparation",["Matthew 28:19","Romans 6:3-4","Acts 8:36-38"],
 "Jesus commands baptism in the name of the Father, the Son, and the Holy Spirit. Paul explains that baptism pictures being buried with Christ and raised to new life. Philip baptized the Ethiopian after he believed.",
 ["Baptism follows personal faith; the water itself does not save.","Teach what baptism pictures and what to expect on baptism day.","The pastor decides who is baptized and when, and handles special questions about earlier baptisms."],
 ["Review the Water Baptism Class with your pastor so you teach it accurately.","Prepare a clear, kind answer to “Why should I be baptized?”","Refer any question about a previous baptism or doctrine to the pastor."],
 ["How will you explain that baptism is a beginning, not the finish line?","Which questions will you take to your pastor?"],
 "Teach one baptism preparation session with a pastor present."),
L("Teaching New Believers and New Members",["Acts 2:42-47","1 Peter 2:2","Hebrews 13:17"],
 "The early church devoted itself to teaching, fellowship, breaking bread, and prayer. Peter says new believers, like newborn babies, should crave pure spiritual milk so they grow. Believers are to respect their leaders, who watch over their souls.",
 ["New believers need patience, simple words, and a lot of encouragement.","New member teaching explains BFM’s beliefs, mission, giving, and serving.","Always point students back to the Bible and the pastor, not to yourself."],
 ["Practice explaining the gospel in two minutes without church jargon.","Learn how our church teaches on topics that are debated, and refer students to the pastor when needed.","Plan a welcome and a follow-up for each new student."],
 ["How will you follow up with someone who misses a class?","What topics should you refer to the pastor?"],
 "Teach one New Believers or New Members lesson with your pastor observing.")],
quiz:[
Q("Who should Sunday school serve, according to Deuteronomy 31:12-13?","Everyone, including children","Only adults","Only leaders","Only those who already know the Bible"),
Q("Who are the first teachers of the faith in a child’s life?","Parents","The pastor","Sunday school teachers","Friends"),
Q("What makes Sunday school lessons effective?","One clear Bible truth taught in a way students can understand and use","As many facts as possible","Lots of entertainment","A long lecture"),
Q("What does discipleship involve most?","Sharing life as well as lessons","Handing out a book","Holding long meetings","Testing students"),
Q("What does 2 Timothy 2:2 describe?","Entrusting what you learned to faithful people who will teach others","Keeping what you learned private","Collecting followers","Ranking the most faithful"),
Q("In baptism preparation, who decides who is baptized and when?","The pastor","The teacher alone","The student’s family","Whoever signs up first"),
Q("If a student asks about a previous baptism, what should the teacher do?","Listen and refer the question to the pastor","Decide for the student","Say it does not matter","Tell them to ask a friend"),
Q("What does the water of baptism do?","It pictures what Christ has already done; it does not save","It cleanses sins by itself","It makes the person a church member","It guarantees spiritual growth"),
Q("How should you teach new believers?","With patience, simple words, and encouragement","With difficult theology first","With strict rules only","By quizzing them every week"),
Q("What should a New Members teacher always do with debated doctrinal topics?","Teach what the church teaches and refer the student to the pastor","Share personal opinion only","Avoid the question","Say it does not matter"),
Q("What does Hebrews 13:17 say about leaders?","They watch over souls and should be respected","They have no accountability","They should be avoided","They are not needed"),
Q("What is the main purpose of a follow-up after class?","To care for the student and help them take the next step","To grade their attendance","To avoid confusion","To increase numbers")],
proj:P("My Class Teaching Plan","Choose the type of class you want to teach (Sunday school, discipleship, water baptism preparation, new believers, or new members) and write a plan for it that your pastor reviews.",
 ["I chose a class type and wrote my goal.","I outlined the first four weeks.","My pastor reviewed my plan and doctrine."],4)});

C({id:"tch-202",code:"TCH 202",track:"T",grp:"req",title:"Teaching Practicum and Final Exam",
goal:"Put what you have learned into practice by observing, co-teaching, and teaching a lesson on your own, then pass the final exam.",
exam:true,pass:0.7,
lessons:[
L("Practicum Guide and Final Review",["Luke 10:1-9","Acts 18:24-26","Hebrews 5:12-14"],
 "Jesus sent out disciples ahead of Him after teaching them, and they reported back. Priscilla and Aquila took Apollos aside and explained the way of God more accurately. The writer of Hebrews says that by now we should be teachers, and that mature people have trained themselves to tell good from evil.",
 ["Observe an experienced teacher, co-teach, then teach with a mentor watching.","Welcome feedback: even gifted teachers keep learning.","Teaching is serving: you represent Christ and the church to your students."],
 ["Complete the three practicum steps with your mentor and keep a log.","Ask your mentor for one strength and one area to grow after each session.","Review the key points from TCH 101 to TCH 201 before taking the final exam."],
 ["What did you learn from watching another teacher?","What do you want to improve?"],
 "Complete the practicum log and review your final exam results with your pastor.")],
quiz:[
Q("Why does a teacher need accountability and correction?","Even gifted teachers keep learning and can be mistaken","Teachers should not be questioned","Accountability replaces study","Only new teachers need feedback"),
Q("Which verse warns that teachers will be judged more strictly?","James 3:1","Psalm 119:105","Matthew 5:16","John 3:16"),
Q("What is the first thing to do when preparing a lesson?","Pray and study the passage to find its main idea","Find an interesting illustration","Prepare handouts","Choose a game"),
Q("What is the main idea of a lesson for?","It keeps the lesson focused on the point of the passage","It entertains students","It shortens the lesson","It helps the teacher talk longer"),
Q("A good lesson application should be:","Specific and doable this week","General and inspirational","Optional","Private to the teacher"),
Q("What does it mean to handle the word of truth correctly?","Study carefully and explain it accurately","Choose verses that support your view","Skip difficult passages","Quote it from memory without checking"),
Q("What should a teacher do when they do not know an answer?","Admit it and find out with help from leaders","Guess confidently","Avoid questions","Change the subject"),
Q("Which behavior best protects students?","Following the church safety policy and never being alone with a child","Meeting privately to build trust","Keeping concerns private","Allowing unscreened helpers"),
Q("If a student shares something troubling, you should:","Report it to the pastor or designated leader right away","Keep the secret","Discuss it with other students","Wait and watch"),
Q("What is the aim of discipleship teaching?","Help people obey Jesus and teach others","Provide information","Increase attendance","Create a larger class"),
Q("Who decides when a student is ready for baptism?","The pastor, in conversation with the student","The teacher alone","The student’s friends","The oldest member"),
Q("What is the right attitude to a student’s hard question about doctrine?","Welcome it, answer from Scripture, and refer to the pastor when needed","Dismiss it","Answer from personal opinion","Change the subject"),
Q("How should a teacher treat quiet students?","Invite them gently and respect their pace","Pressure them to speak","Ignore them","Call them out in front of others"),
Q("What does Hebrews 5:12-14 say about maturity?","Mature people train themselves to tell good from evil","Maturity comes automatically","Only leaders mature","Maturity means knowing more facts"),
Q("What is the best way to stay a good teacher over time?","Keep studying, pray, welcome feedback, and teach with a team","Rely on talent","Repeat old lessons","Avoid change")],
proj:P("Teaching Practicum","Complete the practicum with a mentor: observe a class, co-teach a session, and teach a full lesson while your mentor evaluates you.",
 ["I observed an experienced teacher and wrote what I learned.","I co-taught a session with my mentor.","I taught a full lesson and received my mentor’s written evaluation.","My pastor or director approved my practicum."],8)});
/* ================= MINISTRY MANUALS: one working manual per Track 3 ministry ================= */
/* Each manual is a separate document from the course study guide. It is a ready-to-adapt template: the ministry leader and pastor confirm the details. */
const MANUALS={};
const MN=(k,o)=>{MANUALS[k]=o;};

MN('youth',{
 who:'Teenagers and young adults in the church and the surrounding Bushwick community.',
 purpose:'The Youth Ministry helps young people know Jesus, grow in Scripture, build godly friendships, and discover how God wants to use them now. We aim to be a safe, joyful place where honest questions are welcome.',
 refs:['1 Timothy 4:12','Ecclesiastes 12:1','Psalm 119:9'],
 values:['Christ first: every meeting points to Jesus.','Belonging: no young person is invisible.','Truth with grace: honest teaching, patient love.','Leadership: young people serve and lead, with mentors beside them.'],
 roles:[['Youth leader','Casts the vision, plans the year, and reports to the pastor.'],['Assistant leaders','Lead small groups, follow up on absences, and mentor students.'],['Worship and media helpers','Prepare music, slides, and sound for youth services.'],['Parent liaison','Keeps parents informed and answers their questions.'],['Treasurer or supply lead','Tracks the budget, receipts, and supplies.']],
 rhythm:[['Weekly','Youth service or small group, prayer for each student, follow-up texts or calls (through approved channels).'],['Monthly','Leaders meeting, one outing or service project, and a parent update.'],['Yearly','Youth retreat or conference, leader training, and a review of what is working.']],
 standards:['Leaders model what they teach in speech, social media, and conduct.','Keep communication with students open and appropriate, and include a parent or second leader.','Avoid being alone with a single student; meet in view of others.'],
 safety:['Collect a signed permission and medical form for every event and trip.','Use a driver and vehicle policy approved by the pastor.','Report any concern about abuse, self-harm, or danger to the pastor at once, and follow the church’s reporting policy.'],
 before:['Pray with leaders and confirm roles.','Set up the room, sound, and welcome table.','Check the attendance sheet and any medical notes.','Prepare the lesson and one discussion question.'],
 after:['Record attendance and prayer needs.','Follow up with new visitors within the week.','Clean the room and return supplies.','Send leaders a short thank-you and next steps.'],
 report:'Give the pastor a short monthly report: attendance, salvations or decisions, needs, events, and budget.'});

MN('children',{
 who:'Children from preschool through the pre-teen years, and their families.',
 purpose:'The Children’s Ministry teaches children the Bible at their level, helps them love Jesus, and supports parents as the first teachers of faith. We provide a safe, cheerful, well-organized place to learn and play.',
 refs:['Deuteronomy 6:6-7','Mark 10:14','Psalm 78:4'],
 values:['Safety first: every child is protected and known.','Bible-centered: we teach the Word simply and truthfully.','Fun with purpose: games, songs, and crafts serve the lesson.','Family partnership: we equip parents, not replace them.'],
 roles:[['Children’s director','Plans the curriculum, recruits teachers, and reports to the pastor.'],['Teachers and helpers','Teach, lead activities, and care for each child in the room.'],['Check-in coordinator','Manages sign-in, sign-out, allergy notes, and security tags.'],['Supply and setup lead','Prepares rooms, crafts, snacks, and cleaning.'],['Safety lead','Keeps the policy, training records, and screening up to date.']],
 rhythm:[['Weekly','Sunday classes, a teacher huddle, and prayer for each child.'],['Monthly','Teacher meeting, curriculum review, and a parent newsletter.'],['Yearly','Vacation Bible School or special event, annual training, and a safety review.']],
 standards:['Treat every child with patience and respect; no harsh words or physical discipline.','Use positive guidance and redirect behavior calmly.','Teach Scripture accurately and keep lessons age-appropriate.'],
 safety:['Two screened adults in every room, with doors open or windows visible.','Check-in and check-out with a matching tag for every child.','Know allergies, restroom procedures, and the emergency plan before each class.'],
 before:['Pray and review the lesson.','Set up the room and supplies.','Open check-in and review allergy notes.','Welcome each child by name.'],
 after:['Release children only to approved adults.','Record attendance and incidents.','Clean and reset the room.','Share a take-home note with parents.'],
 report:'Report monthly to the pastor: attendance, new families, incidents, curriculum progress, and needs.'});

MN('men',{
 who:'Men of the church, including fathers, young men, and men who are new to faith.',
 purpose:'The Men’s Ministry helps men follow Christ, lead their homes with love, serve the church, and care for the community. We build brotherhood, accountability, and practical Christian living.',
 refs:['Joshua 24:15','Ephesians 5:25','Proverbs 27:17'],
 values:['Faithfulness: men who keep their word and serve consistently.','Brotherhood: honest friendships that sharpen one another.','Servant leadership: following Christ’s example at home and at church.','Integrity: the same man in private and in public.'],
 roles:[['Men’s leader','Sets the vision, plans events, and reports to the pastor.'],['Small group leaders','Facilitate Bible study, prayer, and accountability groups.'],['Outreach coordinator','Organizes service projects and community help.'],['Mentor coordinator','Pairs younger men with seasoned believers.'],['Treasurer or logistics lead','Handles budget, meals, and room setup.']],
 rhythm:[['Weekly','Prayer or small group meetings and follow-up with absent men.'],['Monthly','Men’s fellowship breakfast or service project and a leaders meeting.'],['Yearly','Men’s retreat or conference, a fatherhood or marriage emphasis, and a service day.']],
 standards:['Keep what is shared in groups confidential, except where safety requires telling the pastor.','Speak with respect about wives, families, and leaders.','Offer encouragement and truth together; no ridicule.'],
 safety:['Plan outings with permission, transportation, and first-aid in mind.','Refer serious personal, marital, or legal struggles to the pastor.','Know the signs of crisis or addiction and the contacts for help.'],
 before:['Pray and confirm the agenda.','Set up the room, food, and materials.','Welcome visitors and new men.','Open with Scripture and prayer.'],
 after:['Record attendance and prayer requests.','Follow up with absent or new men.','Clean up and return supplies.','Report outcomes to the pastor.'],
 report:'Share a short monthly update with the pastor: attendance, needs, service projects, and next events.'});

MN('women',{
 who:'Women of every age and season of life in the church and community.',
 purpose:'The Women’s Ministry encourages women to know Christ, grow in Scripture and prayer, support one another through every season, and use their gifts in the church and community.',
 refs:['Titus 2:3-5','Proverbs 31:26','Romans 12:6-8'],
 values:['Rooted in the Word: Scripture shapes everything we do.','Sisterhood: we carry one another’s burdens.','Generations together: older women mentor, younger women encourage.','Service: we use our gifts to bless the church and community.'],
 roles:[['Women’s leader','Casts the vision, plans the year, and reports to the pastor.'],['Small group leaders','Lead Bible study, prayer, and care groups.'],['Hospitality team','Welcomes guests and prepares meals and décor.'],['Care team','Visits, calls, and supports women in need.'],['Treasurer or logistics lead','Manages budget, registration, and supplies.']],
 rhythm:[['Weekly','Prayer or Bible study group and follow-up with women who are absent.'],['Monthly','Fellowship gathering, leaders meeting, and a care report.'],['Yearly','Women’s conference or retreat, mentoring program, and a service project.']],
 standards:['Keep personal sharing confidential, except where safety requires telling the pastor.','Speak with grace; avoid gossip and comparison.','Welcome every woman regardless of background or season of life.'],
 safety:['Plan events with registration, permission, and emergency contacts.','Refer serious spiritual, medical, or family crises to the pastor or a trained counselor.','Know the contacts for domestic violence and crisis help in your area.'],
 before:['Pray with leaders and confirm roles.','Prepare the room, food, and materials.','Greet each woman and welcome newcomers.','Open with Scripture and prayer.'],
 after:['Record attendance and prayer requests.','Follow up with guests and women with needs.','Clean up and return supplies.','Send thank-you notes and report to the pastor.'],
 report:'Give the pastor a short monthly report: attendance, care needs, events, budget, and prayer concerns.'});

MN('outreach',{
 who:'Neighbors, families, and people who do not yet know Jesus, along with new believers we are helping connect to the church.',
 purpose:'The Outreach Ministry shares the good news and shows the love of Christ through service, invitation, and follow-up in Bushwick and beyond. We meet practical needs and invite people into relationship with Jesus and the church.',
 refs:['Matthew 28:19-20','Acts 1:8','Matthew 5:16'],
 values:['Love in action: we serve without strings.','Relationships: we know names and stories.','Follow-up: every contact receives care.','Partnership: we work with community leaders and other churches.'],
 roles:[['Outreach leader','Casts the vision and plans outreach events with the pastor.'],['Team captains','Lead outreach teams and give directions on the day.'],['Follow-up coordinator','Contacts and cares for new contacts after events.'],['Community liaison','Builds relationships with schools, agencies, and local leaders.'],['Supplies and logistics lead','Prepares materials, food, and transportation.']],
 rhythm:[['Weekly','Prayer for the community and follow-up with new contacts.'],['Monthly','One outreach or service event and a team debrief.'],['Yearly','Larger community event, training on sharing the gospel, and a review of outreach impact.']],
 standards:['Be respectful and humble; do not pressure anyone.','Represent the church well in dress, speech, and conduct.','Share your testimony and the gospel clearly, gently, and honestly.'],
 safety:['Go out in pairs or teams and carry team contact information.','Get permission before entering private property or taking photographs.','Plan for weather, traffic, and emergencies, and know where to find help.'],
 before:['Pray together and assign teams.','Review the route or station plan and safety notes.','Prepare materials and contact cards.','Confirm transportation and supplies.'],
 after:['Record contacts and prayer requests.','Hold a short debrief and thank volunteers.','Send follow-up messages within a few days.','Report results to the pastor.'],
 report:'Share monthly: number of contacts, decisions or prayer requests, follow-up status, and needs.'});

MN('media',{
 who:'The congregation, online viewers, and the wider community who hear from the church through screens, sound, and social media.',
 purpose:'The Media & Communications Ministry serves the church by providing clear sound, video, slides, and messages so the gospel is heard and seen with excellence. We steward technology, content, and the church’s public image.',
 refs:['Colossians 3:23','Psalm 33:3','1 Corinthians 14:40'],
 values:['Excellence as worship: we do our best for the Lord.','Humility: the focus stays on Jesus, not on us.','Reliability: equipment ready, people on time.','Wisdom: we protect people’s privacy and the church’s reputation.'],
 roles:[['Media director','Oversees all media tasks, equipment, and training.'],['Sound operator','Runs the mixer, microphones, and monitors.'],['Video and live stream lead','Operates cameras and the live stream.'],['Slides and graphics lead','Prepares lyrics, announcements, and visuals.'],['Social media and communications lead','Plans posts, newsletters, and announcements.']],
 rhythm:[['Weekly','Rehearsal or sound check, Sunday setup, live stream, and post-service upload.'],['Monthly','Team meeting, equipment check, and content calendar planning.'],['Yearly','Equipment budget, team training, and a review of the church’s communication.']],
 standards:['Arrive early and be ready before the service starts.','Follow the church’s rules on music licensing, photos, and permissions.','Keep passwords and accounts secure and shared only with approved leaders.'],
 safety:['Tape down cables and keep walkways clear.','Get permission before posting photos or videos of children and individuals.','Keep a backup of important files and the service recording.'],
 before:['Power up and test sound, cameras, and streaming.','Load slides and check lyrics.','Confirm who is on each position.','Pray with the team.'],
 after:['Power down and store equipment.','Upload and share the recording.','Note any problems and request repairs.','Post highlights or announcements as approved.'],
 report:'Give the pastor a monthly update: views and reach, equipment needs, upcoming content, and budget.'});

MN('cined',{
 who:'Children, youth, and adults who attend Sunday School, Bible classes, and training sessions.',
 purpose:'The Christian Education Ministry helps every member grow in knowledge of the Bible and in Christlike living through well-planned classes, trained teachers, and a clear plan of study.',
 refs:['2 Timothy 2:15','Colossians 3:16','Nehemiah 8:8'],
 values:['Truth: we teach the Bible faithfully.','Clarity: lessons are understandable and well prepared.','Growth: students and teachers keep learning.','Care: we notice each student and their needs.'],
 roles:[['Christian Education director','Plans the curriculum and calendar and supports teachers.'],['Teachers','Prepare and teach lessons, and care for their students.'],['Substitute and assistant teachers','Step in when needed and learn from lead teachers.'],['Registrar or secretary','Keeps rosters, attendance, and records.'],['Curriculum and resources lead','Orders materials and organizes the library.']],
 rhythm:[['Weekly','Sunday School or Bible classes, a short prayer for teachers, and attendance records.'],['Monthly','Teacher meeting, lesson review, and encouragement or training.'],['Yearly','Promotion Sunday, curriculum review, and a teacher development plan.']],
 standards:['Prepare each lesson with prayer and study.','Be faithful to Scripture and respectful of the church’s teaching.','Treat every student with patience and without favoritism.'],
 safety:['Follow the church’s child protection policy in every classroom.','Keep records private and secure.','Report any concern about a student’s safety to the pastor right away.'],
 before:['Pray and review the lesson.','Prepare materials and set up the room.','Welcome each student and take attendance.','Start on time.'],
 after:['Record attendance and prayer needs.','Follow up on absent students.','Tidy the room.','Note ideas to improve the lesson.'],
 report:'Share monthly: attendance, curriculum progress, teacher needs, and training plans.'});

MN('dance',{
 who:'Dancers of all ages who use movement to worship and to serve the church’s services and events.',
 purpose:'The Dance Ministry offers movement as worship, helping the congregation enter God’s presence with reverence, joy, and excellence. Dancers serve with humble hearts and prepared bodies, always pointing to Jesus.',
 refs:['Psalm 149:3','Psalm 150:4','2 Samuel 6:14'],
 values:['Worship first: dance is an offering to God, not a performance.','Modesty and unity: attire and movement serve the message.','Discipline: practice, prayer, and punctuality.','Humility: a servant’s heart before applause.'],
 roles:[['Dance director','Leads vision, choreography approval, and scheduling with the pastor.'],['Choreographers','Create movement that fits the music and the service.'],['Team captains','Guide rehearsals and encourage dancers.'],['Costume and props lead','Plans modest, consistent attire and manages supplies.'],['Music liaison','Coordinates songs and cues with the worship team.']],
 rhythm:[['Weekly','Rehearsal, prayer together, and communication with the worship team.'],['Monthly','Leaders meeting, new song planning, and a dancers’ fellowship.'],['Yearly','Special services and events, training or workshops, and a team review.']],
 standards:['Attend rehearsals and arrive on time, ready to worship.','Follow the church’s guidelines on attire, modesty, and conduct.','Handle disagreements privately and respectfully.'],
 safety:['Warm up and stretch before rehearsals and services.','Check floors, stage edges, and costumes for hazards.','Have parent permission and supervision for dancers who are minors.'],
 before:['Pray together and confirm the order.','Warm up and check attire.','Review cues with the worship team.','Check the space for hazards.'],
 after:['Thank the team and the worship leaders.','Store costumes and props.','Note feedback for improvement.','Report any injuries or concerns.'],
 report:'Give the pastor a short monthly report: attendance, upcoming services, costume needs, and prayer requests.'});

MN('deacon',{
 who:'The members of the congregation, especially the sick, the elderly, the grieving, and families in need.',
 purpose:'The Deacon Ministry serves the church in practical ways, caring for the needy, supporting the pastor, assisting with communion, and keeping order and compassion in the congregation.',
 refs:['Acts 6:1-4','1 Timothy 3:8-13','James 1:27'],
 values:['Servanthood: we serve quietly and faithfully.','Integrity: honest in finances and speech.','Compassion: we notice and respond to need.','Support: we stand beside the pastor and the church.'],
 roles:[['Lead deacon','Coordinates the team and works closely with the pastor.'],['Benevolence coordinator','Receives requests and distributes help according to the church’s policy.'],['Visitation coordinator','Organizes visits and calls to the sick and shut-in.'],['Communion and altar care','Prepares the elements and supports the service.'],['Secretary or record keeper','Keeps confidential records of care and decisions.']],
 rhythm:[['Weekly','Prayer, visitation, and support during services.'],['Monthly','Deacons’ meeting, a review of benevolence needs, and communion preparation.'],['Yearly','Training, a review of care policies, and recognition of servants.']],
 standards:['Maintain strict confidentiality about people’s needs.','Handle money with transparency and two-person accountability.','Be a model of faith and character in home and community.'],
 safety:['Visit in pairs when possible, especially in homes.','Follow a written benevolence policy approved by the pastor.','Report any suspected abuse, neglect, or crisis to the pastor right away.'],
 before:['Pray and review any needs.','Confirm communion supplies and ushering.','Check on the sick list.','Meet briefly with the pastor.'],
 after:['Record the care given and follow-up needed.','Return and store supplies.','Report to the pastor.','Pray for those you served.'],
 report:'Share a confidential monthly summary with the pastor: care given, needs, funds used, and follow-up.'});

MN('usher',{
 who:'Every guest and member who walks through the church doors, including first-time visitors.',
 purpose:'The Usher & Hospitality Ministry welcomes people warmly, helps them find their place, keeps services orderly and safe, and makes every guest feel seen and loved.',
 refs:['Romans 12:13','Hebrews 13:2','1 Peter 4:9'],
 values:['Warm welcome: a smile and a name make the difference.','Order with grace: we help without hovering.','Safety: we notice and respond quickly.','Readiness: we arrive early and prepared.'],
 roles:[['Head usher or hospitality director','Plans schedules and trains the team.'],['Door greeters','Welcome people at the entrance and give directions.'],['Sanctuary ushers','Seat guests, collect offerings, and assist during the service.'],['Guest services team','Greet first-time visitors and connect them with the church.'],['Safety lead','Knows the emergency plan, exits, and first-aid kit.']],
 rhythm:[['Weekly','Greet, seat, assist, and secure the building; short huddle and prayer.'],['Monthly','Team meeting, schedule review, and guest follow-up.'],['Yearly','Training, special events planning, and a review of the guest experience.']],
 standards:['Dress neatly and arrive at least thirty minutes early.','Smile, greet by name, and offer help without pressure.','Handle offerings with two-person accountability.'],
 safety:['Know where exits, fire extinguishers, and the first-aid kit are.','Follow the church’s emergency plan and know who to call.','Keep aisles and doors clear, and watch for anyone needing assistance.'],
 before:['Pray together and review the order of service.','Check lights, heat or air, restrooms, and signage.','Prepare bulletins, guest cards, and offering baskets.','Take your positions.'],
 after:['Collect and count offerings with two people.','Pick up lost items and tidy the sanctuary.','Record first-time visitors.','Lock up and report any issues.'],
 report:'Give the pastor a monthly report: attendance counts, first-time guests, incidents, and facility needs.'});

MN('couples',{
 who:'Engaged couples, newlyweds, married couples, and couples facing hard seasons.',
 purpose:'The Couples Ministry strengthens marriages and prepares couples for marriage by teaching God’s design, building communication and trust, and offering support, mentoring, and restoration.',
 refs:['Genesis 2:24','Ephesians 5:21-33','Ecclesiastes 4:9-12'],
 values:['Covenant: marriage is a lifelong promise before God.','Honesty: couples learn to speak the truth in love.','Community: couples need other couples.','Hope: God restores and renews.'],
 roles:[['Couples ministry leaders','Plan the year, recruit mentor couples, and work with the pastor.'],['Mentor couples','Walk with engaged or newly married couples.'],['Event team','Plans date nights, retreats, and workshops.'],['Care and referral coordinator','Connects couples in crisis with the pastor or a trained counselor.'],['Childcare coordinator','Arranges safe care for children during events.']],
 rhythm:[['Weekly or biweekly','Small group or mentor meeting and prayer for couples.'],['Monthly','Date night or fellowship and leaders meeting.'],['Yearly','Premarital course, marriage retreat, and renewal event.']],
 standards:['Keep couples’ stories strictly confidential.','Model a healthy marriage and be honest about your own growth.','Never give legal or clinical advice; refer to the pastor or professionals.'],
 safety:['Meet with couples in public or church spaces, or as a couple with a couple.','Refer any case of abuse, violence, or crisis to the pastor and appropriate help immediately.','Know the contacts for counseling and emergency help in your area.'],
 before:['Pray for each couple.','Prepare the topic, discussion questions, and room.','Arrange childcare if needed.','Welcome each couple warmly.'],
 after:['Note prayer needs and follow-up.','Send an encouraging message.','Debrief with leaders.','Report to the pastor.'],
 report:'Give the pastor a confidential monthly summary: events held, couples served, referrals made, and needs.'});

MN('nursery',{
 who:'Babies and toddlers (and their parents) during services and church events.',
 purpose:'The Nursery Ministry provides loving, safe, and organized care for the youngest children so parents can worship in peace. We welcome children the way Jesus did, with gentle arms and open hearts.',
 refs:['Mark 10:13-16','Isaiah 40:11','Psalm 127:3'],
 values:['Gentleness: calm, patient, loving care.','Safety: clear rules followed every time.','Cleanliness: a healthy space for little ones.','Partnership: parents are always informed.'],
 roles:[['Nursery coordinator','Leads the team, writes the schedule, and reports to the pastor.'],['Lead caregiver','Oversees the room and guides helpers each service.'],['Caregivers and helpers','Hold, feed, change, and play with the children.'],['Check-in lead','Manages sign-in and sign-out, allergy notes, and pickup tags.'],['Supply and cleaning lead','Keeps toys, diapers, wipes, and sanitizer stocked and clean.']],
 rhythm:[['Weekly','Sunday care, a quick team huddle, and prayer for each child.'],['Monthly','Team meeting, supply check, and a deep-clean of toys and furniture.'],['Yearly','Safety refresher, schedule review, and volunteer appreciation.']],
 standards:['Speak gently and never use harsh words or physical discipline.','Follow each parent’s written instructions for feeding, naps, and comfort.','Keep every child’s information private.'],
 safety:['Two screened, unrelated adults in the room at all times with the door open or visible.','Check-in and check-out with a matching tag; release only to approved adults.','Wash hands and sanitize changing areas, and keep a written allergy and emergency plan.'],
 before:['Pray and review notes about each child.','Sanitize toys and surfaces and stock supplies.','Open check-in and review allergies.','Greet each parent and child by name.'],
 after:['Release children only to approved adults.','Record any incidents or notes for parents.','Sanitize and reset the room.','Report supply needs to the coordinator.'],
 report:'Share monthly with the pastor: attendance, incidents, supply needs, and volunteer needs.'});

const MANUAL_BASE_STANDARDS=['Serve with a clear testimony and a servant’s heart.','Complete the church’s screening and training before serving.','Follow the pastor’s direction and the church’s written policies.','Keep information about people private.'];
const MANUAL_BASE_NOTE='This manual is a working template for the ministry. Your ministry leader and pastor confirm the final details (names, times, policies, and forms) for your church before it is used.';
/* ================= MINISTRY MANUALS, part 2: understanding the ministry, communication, consistency, character and integrity ================= */
/* Every ministry has its own text here. Edit freely; the manual layout reads these fields. */
const MX=(k,o)=>Object.assign(MANUALS[k],o);

MX('youth',{
 overview:"The Youth Ministry is where teenagers and young adults meet Jesus for themselves, not only through their parents’ faith. It joins worship, teaching, friendship, and service in a setting that speaks their language without watering down the gospel. It is a discipleship school and also a safe landing place for young people who feel unseen at school, online, or at home.",
 isnot:["Not a youth club that only keeps teens busy.","Not entertainment with a Bible verse attached.","Not a replacement for family or for the whole church."],
 flow:[["Before","Leaders pray, set up the room, and greet students at the door by name."],["Opening","Welcome, an icebreaker, and worship."],["Teaching","A short message built on one passage and one clear question."],["Small groups","Students split into groups to talk, pray, and decide how to apply it."],["Closing","Announcements, prayer, and one practical step to take this week."]],
 fruit:["Students invite friends, and the group grows by relationship.","Students move from watching to serving: sound, greeting, leading a group.","Every leader knows each student’s name, school, and prayer need.","Parents trust the ministry and talk freely with leaders."],
 challenges:[["Students come and go.","Follow up within 48 hours through an approved channel, and make the first five minutes of every meeting warm."],["Students stay quiet.","Use small groups and written questions so every voice can be heard."],["Pressure from school and social media.","Teach practical wisdom and make room to talk about real life without shame."]],
 commIntro:"Clear, honest, and appropriate communication is how trust is built with teenagers and with their parents.",
 comm:["Use one approved group channel for announcements, and keep a second leader or a parent included when messaging students.","Tell parents about every event in advance: date, place, cost, pickup time, and who is in charge.","Answer a student’s or parent’s message within one day, even if only to say you will follow up.","Speak in plain, kind words. Never correct with sarcasm or shame.","Give the pastor a monthly update and raise concerns early, before they grow."],
 consist:["Meet at the same time and place every week so students always know where to find you.","Leaders arrive before students and stay until the last student is picked up.","Follow the same meeting rhythm each week so students can prepare and invite friends.","Set the retreat, service day, and leader training dates a year ahead.","Leave notes when a leader is absent so students never meet an unprepared stranger."],
 integ:["Live what you teach. Students notice far more than they hear.","Never be alone with a single student, in person or online.","Keep confidences, but tell the pastor at once when a student may be in danger.","Handle event money openly, with a receipt and a second person.","Admit mistakes to students and parents, and make them right."]
});

MX('children',{
 overview:"The Children’s Ministry teaches children the Bible at their level and helps them love Jesus while their parents worship nearby. It is organized, cheerful, and careful: every child is known by name, every adult is screened, and every lesson has a point. It also supports parents as the first teachers of faith.",
 isnot:["Not babysitting while adults are in service.","Not only crafts and games.","Not a substitute for faith taught at home."],
 flow:[["Arrival","Parents check in, receive a matching tag, and share allergy or pickup notes."],["Welcome","Free play and greeting by name while children arrive."],["Worship","Action songs and a short prayer."],["Bible story","One story, one verse, and one idea children can repeat."],["Activity","A craft, game, or discussion that fits the story, then snack and restroom."],["Pickup","Children go home only with approved adults, with a note for parents."]],
 fruit:["Children can retell the Bible story and say the memory verse.","Parents feel confident leaving and picking up their children.","Teachers stay for a full season and grow in skill.","Visitors become regular families."],
 challenges:[["Children who are disruptive.","Redirect calmly, use clear routines, and talk to parents privately. Never use harsh words or physical discipline."],["Too few teachers.","Recruit early, train well, and rotate so no one serves every week."],["Parents who are late.","Set a clear pickup time and communicate it kindly at check-in."]],
 commIntro:"Parents need to know what their children are learning, and teachers need to know what each child needs.",
 comm:["Send a short take-home note with the verse and a question to ask at dinner.","Report any injury, upset, or incident to the parent the same day, in person or by phone.","Share the lesson plan with teachers a week ahead.","Speak to children at eye level, with a calm voice and simple words.","Give the pastor a monthly report of attendance, new families, and needs."],
 consist:["Keep the same teachers with the same class for a full term when possible.","Keep the same routine every week so children feel secure.","Prepare the lesson and supplies by Thursday, not Sunday morning.","Keep screening, training, and the emergency plan up to date every year.","Run the check-in and check-out steps exactly the same way every time."],
 integ:["Follow the child protection policy without exceptions, including when a parent says it is fine to skip it.","Never take photos or share a child’s information without permission.","Write incident reports honestly and promptly.","Never have private contact with a child outside the church’s approved channels.","Teach the Bible accurately and age appropriately."]
});

MX('men',{
 overview:"The Men’s Ministry builds brotherhood around Jesus. It helps men grow in Scripture and prayer, lead their homes with love and humility, and serve the church and neighborhood with practical action. It is a place where men can be honest about work, family, temptation, and faith without being judged.",
 isnot:["Not a social club with a prayer at the start.","Not a place to show strength and hide struggles.","Not about authority over others, but responsibility before God."],
 flow:[["Gathering","Breakfast or coffee and fellowship."],["Opening","Prayer and a short word from Scripture."],["Study","A discussion of one passage and its meaning for a man’s work, marriage, and fatherhood."],["Groups","Smaller circles for honest sharing and prayer."],["Service","A plan for helping someone this month."],["Closing","Prayer and one commitment each man writes down."]],
 fruit:["Men pray for one another by name between meetings.","Fathers and husbands lead their homes with more patience and care.","Younger men are mentored by seasoned believers.","The ministry shows up in the community, not only in the church."],
 challenges:[["Work schedules make attendance hard.","Offer more than one meeting time and keep contact by phone."],["Men find it hard to open up.","Start with leaders who share first, and keep what is said private."],["Pride and comparison.","Teach humility, celebrate small steps, and keep the focus on Christ."]],
 commIntro:"Men often respond best to a personal call or a face-to-face invitation, so communication here is relational first.",
 comm:["Invite by phone or in person, not only in a group message.","Announce meetings and projects at least two weeks ahead.","Check in with any man who misses two meetings in a row.","Keep personal sharing confidential unless safety requires telling the pastor.","Report monthly to the pastor with attendance, projects, and needs."],
 consist:["Meet on a steady day each month, and keep prayer groups weekly.","Pair every man with an accountability partner and ask how it is going.","Finish what the group starts: a project, a study, a promise to a family.","Keep a simple calendar of retreat, service days, and fellowship events.","Pray for the men on the roster every week."],
 integ:["Be faithful to your wife and honest in your work.","Use words that build up, not coarse or demeaning ones.","Handle money, supplies, and keys with full honesty.","Admit failure quickly and accept correction.","Treat women and children with respect everywhere."]
});

MX('women',{
 overview:"The Women’s Ministry encourages women of every age and season to know Christ, grow in the Word, and support one another. It is a place for older women to mentor younger ones, for new believers to find a friend, and for gifts to be put to work in the church and community.",
 isnot:["Not only an events committee.","Not a place for gossip, comparison, or cliques.","Not limited to one age group or life stage."],
 flow:[["Welcome","Greeting at the door and a warm seat for every woman, especially guests."],["Worship","Songs and prayer."],["Teaching","A Bible study or testimony."],["Table groups","Small groups to share, pray, and encourage."],["Care time","Prayer requests and practical needs are recorded."],["Closing","A blessing and a reminder of the next meeting."]],
 fruit:["Women of different ages know and pray for each other.","Guests return and are invited into groups.","Women discover and use their gifts in the church.","The ministry notices and meets needs, such as meals and visits."],
 challenges:[["Different seasons of life make schedules hard.","Offer different times and keep some resources available online or by phone."],["Cliques form.","Rotate table groups and make hospitality everyone’s job."],["Sensitive situations come up.","Listen, keep it private, and involve the pastor when it is serious."]],
 commIntro:"Communication in this ministry is warm and personal, and it protects privacy.",
 comm:["Use a simple group channel for dates and reminders, and call personally when a woman is going through something.","Send prayer requests only with permission from the person who shared them.","Send meeting notes and next steps to the leaders within two days.","Speak graciously; keep disagreements private and respectful.","Update the pastor monthly on care needs, events, and budget."],
 consist:["Meet on the same day each month and keep Bible study groups weekly.","Follow up with every woman who missed or is new within one week.","Keep mentoring pairs meeting on a regular schedule.","Plan the annual conference or retreat early and review it afterward.","Keep a calendar of birthdays, anniversaries, and care visits."],
 integ:["Never repeat what was shared in confidence.","Welcome every woman without favoritism.","Be honest about money raised for events and where it goes.","Model the life you encourage in others.","Seek help for serious situations rather than carrying them alone."]
});

MX('outreach',{
 overview:"The Outreach Ministry takes the love of Jesus out of the building and into Bushwick. It serves practical needs, shares the good news, and follows up with people so that a one-time contact becomes a lasting relationship. It works with neighbors, schools, local leaders, and other churches.",
 isnot:["Not handing out flyers and moving on.","Not pressure or persuasion tricks.","Not the job of a few people while everyone else watches."],
 flow:[["Gather","Pray together and review the plan, route, and safety notes."],["Brief","Assign teams, roles, and materials."],["Go","Teams walk, serve, give help, and talk with people."],["Record","Contact cards and prayer requests are written down."],["Return","Debrief, thank volunteers, and pray for those met."],["Follow-up","A call, visit, or message within 72 hours."]],
 fruit:["Neighbors know the church by name and by kindness.","Contacts become visitors, and visitors become members.","More members join outreach teams.","Local partners work with the church and call it for help."],
 challenges:[["Rejection or no response.","Remember that planting seeds is faithful work; thank people and move on with grace."],["Follow-up falls through.","Assign one follow-up lead and use a simple contact card."],["Safety concerns on the street.","Go in pairs, carry team contact information, and stay in public view."]],
 commIntro:"Outreach communication is first about listening. Then it is clear, kind, and simple.",
 comm:["Introduce yourself and the church by name and explain why you are there.","Ask questions and listen before you share.","Use a short, simple gospel summary that every team member can say.","Give each contact a card with the church name, address, service times, and a phone number.","Tell the pastor and partners what happened after each outreach and what is needed next."],
 consist:["Return to the same neighborhoods and partners on a regular schedule.","Follow up on every contact within 72 hours.","Keep a simple record so no one is forgotten.","Hold a short debrief after every event.","Plan a larger community event each year and keep smaller serving days between."],
 integ:["Be honest about what the church offers and what it does not.","Never offer help as a trick to get a response.","Respect a person’s no and their privacy.","Account for every supply and every dollar.","Represent the church well in dress, language, and attitude."]
});

MX('media',{
 overview:"The Media & Communications Ministry makes sure the gospel is heard and seen clearly, in the room and online. It runs sound, video, live stream, slides, and social media, and it looks after the church’s public voice. Done well, it is almost invisible: people simply worship without distractions.",
 isnot:["Not a stage for tech people.","Not only posting pictures.","Not free to publish anything without approval."],
 flow:[["Thursday","Check equipment, update slides, and confirm the service order with the pastor."],["Arrival","The team arrives early and powers up sound, cameras, and streaming."],["Sound check","Test every microphone, instrument, and camera angle."],["Service","Run slides, sound, and live stream following the cue sheet."],["After","Power down, store equipment, and note any problems."],["Upload","Share the recording and approved posts within a day."]],
 fruit:["The service runs without audio, video, or slide problems.","Online viewers grow and stay connected to the church.","The team is trained, scheduled, and rotates fairly.","Equipment lasts, and needs are reported before they become emergencies."],
 challenges:[["Equipment fails during a service.","Keep a backup plan, spare cables, and a simple troubleshooting guide."],["Last-minute changes from the platform.","Use a shared cue sheet and agree on who makes final calls."],["Burnout on a small team.","Train more people and share positions."]],
 commIntro:"This ministry is the church’s public voice, so communication must be accurate, timely, and approved.",
 comm:["Keep one team channel and one cue sheet for every service.","Confirm announcements and graphics with the pastor or office before posting.","Use the same names, colors, and logo so the church looks consistent.","Respond to comments and messages kindly and quickly, and pass serious ones to the pastor.","Send the pastor a short monthly report with reach, needs, and plans."],
 consist:["Run the same setup and shutdown checklist at every service.","Test the live stream before every broadcast.","Back up files weekly and store recordings in one organized place.","Keep a posting calendar and stick to it.","Train and schedule a rotation so the same people are not always on duty."],
 integ:["Get permission before sharing any person’s image, especially children.","Follow music and video licensing rules and give credit.","Never edit or caption in a way that misleads.","Keep passwords and accounts private and share only with approved leaders.","Remember that online words last; post only what honors Christ."]
});

MX('cined',{
 overview:"The Christian Education Ministry helps people of every age learn the Bible and live it out. It trains teachers, plans curriculum, and runs Sunday School, Bible classes, and special studies so that learning is steady and not accidental. It is the church’s teaching backbone.",
 isnot:["Not lecture without discussion.","Not teaching personal opinions as doctrine.","Not only for children."],
 flow:[["Arrival","Attendance is recorded and students are welcomed."],["Opening","Prayer and a short review of last week."],["Lesson","A clear lesson built on Scripture, with a main point."],["Discussion","Questions, examples, and stories help students understand."],["Application","One practical step to take this week."],["Closing","Prayer and the reading or task for next time."]],
 fruit:["Students understand and can explain what they learn.","Teachers are prepared, trained, and encouraged.","Absent students are noticed and contacted.","Classes connect with the rest of church life."],
 challenges:[["Students come unprepared.","Share the reading early and keep the lesson engaging."],["Teachers feel unprepared.","Offer training, sample lesson plans, and a mentor."],["Disagreements on doctrine.","Return to Scripture and the church’s teaching, and involve the pastor when needed."]],
 commIntro:"Teachers, students, and parents all need to know what is being taught and how learning is going.",
 comm:["Post the curriculum plan and lesson topics at least a month ahead.","Give teachers lesson outlines a week before the class.","Contact absent students during the week.","Share progress or concerns with parents for children and youth.","Report monthly to the pastor on attendance and teacher needs."],
 consist:["Follow a planned curriculum across the year and avoid jumping between topics.","Start on time and keep a steady class length.","Give teachers regular preparation time and training.","Keep accurate attendance and records.","Review the curriculum every year and adjust."],
 integ:["Study carefully and teach what Scripture says.","Say \"I do not know, I will find out\" when you do not.","Do not push personal pet doctrines.","Keep what students share private.","Treat every student with patience and fairness."]
});

MX('dance',{
 overview:"The Dance Ministry offers movement as worship. It helps the congregation enter God’s presence with reverence and joy, and it serves the church’s services, celebrations, and outreach. The focus is always on the One being worshiped, with dancers as servants rather than performers.",
 isnot:["Not a performance for applause.","Not a stage for personal fame.","Not only for experienced dancers."],
 flow:[["Gather","Prayer and a short devotional to set the heart."],["Warm-up","Stretching and simple movement to prevent injury."],["Rehearsal","Learn and practice the movement with the music."],["Run-through","Practice transitions, cues, and spacing."],["Service","Dance as worship, following the order with the worship team."],["Debrief","Thank the team, share what went well, and pray."]],
 fruit:["The congregation is drawn into worship, not distracted.","Dancers grow in worship and in humility.","The team is united, punctual, and well prepared.","New dancers are welcomed, trained, and included."],
 challenges:[["Attendance is inconsistent.","Set a clear attendance expectation and follow up with kindness."],["Pride or comparison among dancers.","Keep the focus on worship, rotate roles, and celebrate each person."],["Modesty and attire questions.","Provide clear, modest guidelines and shared attire."]],
 commIntro:"Dancers work closely with the worship team, the pastor, and each other, so communication must be clear and respectful.",
 comm:["Share a cue sheet with the worship leader before every service.","Confirm songs, order, and timing with the pastor in advance.","Post rehearsal times and changes in one group channel.","Talk with dancers privately when there is a concern, and gently.","For dancers who are minors, keep parents informed about schedules and attire."],
 consist:["Rehearse at the same time every week.","Warm up and pray before every rehearsal and service.","Plan songs and events ahead so dancers can prepare.","Keep attire consistent and well cared for.","Track attendance and encourage dancers who struggle to attend."],
 integ:["Dance to honor God, not to be seen.","Dress and move in ways that are modest and fit the worship.","Receive praise humbly and give the glory to God.","Resolve disagreements quickly and forgive.","Keep your own walk with God strong, not only your technique."]
});

MX('deacon',{
 overview:"The Deacon Ministry serves the church quietly and faithfully. Deacons care for people in need, support the pastor, help during communion and altar times, and keep order with compassion. The model is the first deacons in Acts, who were chosen to make sure needs were met so the word of God could keep spreading.",
 isnot:["Not a board with authority over the pastor.","Not only a title or position of honor.","Not a place for favoritism."],
 flow:[["Before service","Pray with the pastor and check on the sick and shut-in list."],["Preparation","Prepare communion elements and the altar area."],["Service","Assist with ushering, prayer, offering, and communion."],["Altar time","Be available to pray with and support people."],["After service","Record needs and plan follow-up visits."],["During the week","Visit, call, and meet benevolence needs by policy."]],
 fruit:["Needs are noticed and met quickly and with dignity.","The sick, elderly, and grieving feel visited and loved.","The pastor feels supported.","Deacons are respected for their character and faithfulness."],
 challenges:[["Too many needs and too few resources.","Follow the written benevolence policy and partner with community agencies."],["Confidentiality is hard to keep.","Share details only with those who need to know."],["Requests that stretch the policy.","Take them to the pastor and decide together, not alone."]],
 commIntro:"Deacons handle sensitive matters, so communication must be gentle, private, and prompt.",
 comm:["Respond to a care or benevolence request within 48 hours.","Meet regularly with the pastor and bring questions early.","Keep care notes in a private place, shared only with those who need them.","Speak to families with gentleness, and without judgment.","Give a confidential monthly summary to the pastor."],
 consist:["Keep a visitation rotation so everyone is visited regularly.","Meet monthly as a team and review needs.","Follow the same steps every time for communion and benevolence.","Keep records current and accurate.","Pray for the congregation by name on a regular schedule."],
 integ:["Be a person of honesty, self-control, and a clear conscience, as 1 Timothy 3 describes.","Use two people to count and handle money.","Show no favoritism in giving help.","Keep confidences without exception, unless someone is in danger.","Serve humbly and let others receive the credit."]
});

MX('usher',{
 overview:"The Usher & Hospitality Ministry is the first and last face of the church for every guest. It welcomes people warmly, helps them find a seat and answers, keeps the service orderly and safe, and makes sure visitors feel seen. Hospitality is not only a task; it is the church showing the love of Jesus at the door.",
 isnot:["Not only handing out bulletins.","Not security without a smile.","Not seating the same people in the same places only."],
 flow:[["30 minutes early","Pray, check the building, lights, restrooms, and signs."],["Doors open","Greet each person with a smile and a name when possible."],["Seating","Help guests find a seat, especially visitors, seniors, and families."],["During service","Assist quietly with latecomers, needs, and the offering."],["Dismissal","Say goodbye and thank people for coming."],["After","Count offerings with two people, tidy, and record first-time guests."]],
 fruit:["Visitors say they felt welcomed and came back.","Services start and finish smoothly.","Ushers know the emergency plan and the building.","Guests are followed up within the week."],
 challenges:[["Difficult or upset visitors.","Stay calm, listen, and involve a leader when needed."],["Late arrivals during prayer or preaching.","Seat them quietly at the back and at natural breaks."],["Emergencies.","Know the exits, the first-aid kit, and who to call."]],
 commIntro:"Ushers speak to many people each week, so words and tone matter, and signals must be clear between team members.",
 comm:["Greet warmly and use a short, simple welcome script.","Give first-time guests a guest card and tell the pastor or follow-up team.","Use quiet signals or short phrases between ushers during service.","Know the emergency code words and who makes announcements.","Report attendance counts and incidents to the pastor monthly."],
 consist:["Arrive at the same early time every week, in neat dress.","Keep the same positions and routines so the team works smoothly.","Follow a schedule so every usher knows when they serve.","Check the building before every service.","Meet regularly to train and encourage."],
 integ:["Show no favoritism; give every person the same warm welcome.","Handle offerings only with a second person and follow the written steps.","Keep visitors’ information private.","Stay calm and kind under pressure.","Serve cheerfully, as unto the Lord."]
});

MX('couples',{
 overview:"The Couples Ministry strengthens marriages and prepares couples for marriage. It teaches God’s design for covenant love, builds communication and trust, and offers mentors for couples in every season: engaged, newly married, raising children, and facing hard times. It also walks with couples who need restoration.",
 isnot:["Not only date nights.","Not a place to compare marriages.","Not a replacement for professional counseling or the pastor when problems are serious."],
 flow:[["Welcome","Coffee, dinner, or fellowship that helps couples relax."],["Opening","Prayer and a short Scripture reading."],["Teaching","A lesson on one marriage topic, such as communication, finances, or forgiveness."],["Couple time","Couples talk together using guided questions."],["Group sharing","Optional, voluntary sharing and prayer in small groups."],["Closing","A commitment to one action at home."]],
 fruit:["Couples communicate with more honesty and kindness.","Engaged couples are prepared for marriage.","Mentor couples are ready, trained, and supported.","Hurting couples find help early instead of late."],
 challenges:[["Couples are reluctant to attend.","Offer a private, low-pressure first step such as a coffee with a mentor couple."],["Serious problems appear.","Refer to the pastor or a trained counselor promptly, and keep the couple’s trust."],["Childcare gets in the way.","Arrange safe, screened childcare during meetings."]],
 commIntro:"This ministry is built on honest, respectful conversation, both in the room and between spouses.",
 comm:["Teach simple tools: speak for yourself, listen without interrupting, and ask before assuming.","Invite couples personally and describe what to expect.","Keep every couple’s story strictly confidential.","Give a clear path for couples who need more help, and follow up after a referral.","Report monthly to the pastor in general terms, without private details."],
 consist:["Meet on a steady schedule, and keep mentor check-ins regular.","Run the premarital course the same way each time so couples are prepared.","Hold an annual marriage retreat or renewal and plan it early.","Keep leaders’ own marriages healthy with regular date nights and accountability.","Follow up with couples after every course or event."],
 integ:["Leaders model a marriage that is honest, growing, and humble.","Keep clear boundaries; do not counsel someone of the opposite sex alone.","Never take sides in a couple’s conflict.","Keep confidences, except where safety or the law requires reporting.","Admit your own struggles without making them an excuse."]
});

MX('nursery',{
 overview:"The Nursery Ministry cares for babies and toddlers so parents can worship in peace. It is gentle, clean, and safe, and it treats every little one as a gift from God. Good nursery care is quiet work that says to a young family, \"You belong here, and your child is loved.\"",
 isnot:["Not just a room where children are kept busy.","Not a place where rules are optional.","Not a replacement for parents’ care and teaching."],
 flow:[["Prepare","Sanitize toys and surfaces, stock diapers and wipes, and review notes."],["Check-in","Parents sign in, get a matching tag, and share feeding, nap, and allergy notes."],["Welcome","Greet each baby and parent by name and settle children gently."],["Care and play","Feed, change, hold, and play according to each child’s needs."],["Song and story","A short song or Bible moment for toddlers."],["Pickup","Return each child only to approved adults and share a short note."]],
 fruit:["Parents worship without worry because they trust the nursery.","Babies and toddlers are calm, clean, and cared for.","Caregivers are trained, screened, and cheerful.","Visiting families return because they felt welcomed."],
 challenges:[["Children cry at drop-off.","Reassure the parent, comfort the child, and contact the parent if the child is not settled."],["Illness spreads.","Follow the written health policy, and ask parents to keep sick children home."],["Not enough caregivers.","Recruit early, train well, and keep a substitute list."]],
 commIntro:"Parents hand over their most precious people, so communication must be warm, reliable, and fast.",
 comm:["Use a check-in card for feeding, nap, allergy, and contact information.","Tell parents the same day about any bump, bite, illness, or concern.","Have a clear way to reach a parent during service, such as a pager or text.","Greet parents warmly and give a brief positive note at pickup.","Send the pastor a monthly report with attendance, supplies, and volunteer needs."],
 consist:["Use the same caregivers on the same Sundays whenever possible.","Keep the same routine each week so babies feel secure.","Follow the same sanitizing and check-in steps every time.","Review the safety and emergency plan every year.","Keep supplies stocked so no one is caught without them."],
 integ:["Keep two screened, unrelated adults in the room at all times.","Speak gently and never use harsh words or physical discipline.","Record and report incidents honestly.","Respect each family’s privacy and wishes.","Care for each child as if they were your own."]
});
/* ================= MANUAL TEMPLATE (7 sections) + new manuals + volunteer training packets ================= */
/* Every manual and packet below follows the BFM template: cover, table of contents, welcome statement, then the sections.
   The wording is a working template: the ministry leader and pastor confirm the final details for your church. */

MN('communications',{
 who:'The congregation, visitors, and the neighborhood who hear from the church through announcements, newsletters, email, text messages, and social media.',
 purpose:'The Communications Ministry makes sure the right message reaches the right people at the right time, in a voice that is clear, kind, and true to Jesus. We steward the church’s words, announcements, and public image.',
 refs:['Proverbs 25:11','Colossians 4:5-6','Ephesians 4:29'],
 values:['Clarity: simple words, one message at a time.','Truth: we never exaggerate or mislead.','Timing: people hear it early enough to act.','Care: we protect people’s privacy and dignity.'],
 roles:[['Communications director','Sets the plan, approves messages, and reports to the pastor.'],['Announcements and newsletter lead','Collects requests, writes, and schedules announcements.'],['Social media manager','Plans and posts content and answers comments kindly.'],['Photographer and storyteller','Captures events and testimonies with permission.'],['Graphic designer','Designs flyers, slides, and social images in the church’s style.'],['Ministry liaison','Connects each ministry with the communications team.']],
 rhythm:[['Weekly','Collect announcements, publish the weekly update, and post on social media.'],['Monthly','Team meeting, content calendar, and a review of what reached people.'],['Yearly','Brand and website review, training, and a communication plan for the year.']],
 standards:['Get approval from the pastor or director before publishing anything on behalf of the church.','Follow the church’s rules on photos, names, and permission to post.','Keep logins secure and share them only with approved leaders.'],
 safety:['Never post a child’s full name or location without written permission from a parent.','Do not share private prayer requests or counseling details.','Report threats, harassment, or concerning messages to the pastor right away.'],
 before:['Confirm what must be announced this week.','Check dates, times, and spelling twice.','Get approval from the pastor or director.','Schedule posts and emails.'],
 after:['Reply to questions and comments.','Save photos and files in the shared folder.','Note what worked and what did not.','Send a thank-you to contributors.'],
 report:'Give the pastor a monthly update: what was sent, how many people were reached, upcoming needs, and budget.',
 overview:'The Communications Ministry is the voice of the church between Sundays. It helps members know what is happening, helps visitors feel invited, and helps the neighborhood see the church as warm and trustworthy. Good communication is a form of hospitality.',
 isnot:['Not a place to advertise for ourselves.','Not a source of gossip or unofficial news.','Not only social media.'],
 flow:[['Request','A ministry sends its announcement to the team by the weekly deadline.'],['Plan','The team decides the channel, the date, and who needs to hear it.'],['Create','Write the message and prepare the image or flyer.'],['Approve','The director or pastor reviews the final version.'],['Publish','Send, post, and display on the planned date.'],['Review','Check replies, fix mistakes, and learn for next time.']],
 fruit:['Members know what is happening before it happens.','Every ministry gets its message out on time.','Visitors find clear, friendly information online.','The church speaks with one steady voice.'],
 challenges:[['Late or unclear requests.','Set a weekly deadline and use a simple request form.'],['Too many messages at once.','Combine updates into one weekly message and keep each one short.'],['Mistakes after publishing.','Correct quickly, thank the person who noticed, and add a second proofreader.']],
 commIntro:'The Communications team sets the example for how the whole church speaks to people.',
 comm:['Use plain, warm language and avoid church jargon.','Give dates, times, places, and a contact person every time.','Answer messages within one day.','Never argue or react harshly online.','Raise any concern with the pastor early.'],
 consist:['Send the weekly update on the same day and time.','Use the same logo, colors, and style.','Keep the website and social profiles up to date.','Review the contact list every quarter.'],
 integ:['Tell the truth in every message.','Give credit to the people who did the work.','Respect privacy and permissions.','Protect passwords and accounts.']});

MN('pastoral',{
 who:'The pastor, the pastor’s family, and the leaders who carry the vision of the church.',
 purpose:'The Pastoral Aid/Care Ministry supports the pastor and first family with practical help, prayer, and encouragement so the pastor can focus on shepherding the church. We care for those who care for others.',
 refs:['Exodus 17:12','Hebrews 13:17','1 Thessalonians 5:12-13'],
 values:['Support: we lift the pastor’s arms.','Confidentiality: what we see and hear stays private.','Honor: we speak well of our leaders.','Prayer: we pray for the pastor and family every week.'],
 roles:[['Pastoral aid director','Coordinates the team and works directly with the pastor.'],['Personal aide','Helps with scheduling, rides, notes, and requests.'],['Hospitality and meals lead','Arranges meals, water, and comfort on Sundays and special days.'],['Family care liaison','Notices needs of the pastor’s family and shares them with leaders.'],['Prayer partner','Prays regularly for the pastor and family.']],
 rhythm:[['Weekly','Prayer, Sunday support, and a short check-in with the pastor.'],['Monthly','Team meeting, a care gift or word of encouragement, and a review of needs.'],['Yearly','Pastor appreciation, rest planning, and a review of how the team can help more.']],
 standards:['Keep everything about the pastor and family confidential.','Take direction from the pastor and never act on your own.','Be on time, prepared, and calm.'],
 safety:['Follow the pastor’s rules about who may enter private spaces.','Never share the pastor’s schedule, address, or travel plans.','Report any concern for the pastor’s safety or health to the church leaders.'],
 before:['Pray with the pastor’s team.','Prepare the pastor’s room, water, and notes.','Confirm the schedule.','Ask the pastor if anything is needed.'],
 after:['Thank the pastor and ask what helped.','Return the room to order.','Note any follow-up for the week.','Pray for the pastor and family.'],
 report:'Share a short monthly note with the pastor: what helped, what is needed, and any ideas for care.',
 overview:'The Pastoral Aid/Care Ministry is the quiet support behind the pulpit. A pastor carries many people’s burdens, and this team carries a share of the pastor’s. Its work is practical, faithful, and mostly unseen.',
 isnot:['Not a platform for gaining influence.','Not a place to repeat private information.','Not a replacement for the pastor’s own rest and family time.'],
 flow:[['Arrive','Pray and ask the pastor what is needed.'],['Prepare','Set up the pastor’s space, water, notes, and any items for the day.'],['Support','Be near, available, and calm during the service.'],['Care','Welcome guests who come to speak with the pastor and help with any need.'],['Close','Thank the pastor and note follow-up items.']],
 fruit:['The pastor feels supported and rested.','The first family knows they are loved.','Sundays run smoothly without the pastor carrying small tasks.','The team is trusted and discreet.'],
 challenges:[['The pastor does not ask for help.','Offer specific help instead of asking, “What do you need?”'],['Gossip or curiosity.','Remind the team of the confidentiality promise and correct gently.'],['Burnout on the team.','Rotate duties and encourage rest.']],
 commIntro:'The pastor’s time and trust are precious, so communication must be brief, respectful, and private.',
 comm:['Ask the pastor how they prefer to be contacted.','Give short, clear updates and bring solutions with problems.','Keep sensitive conversations private.','Confirm every plan before acting.','Speak honor about leaders in public and in private.'],
 consist:['Be present and prepared every Sunday.','Keep the same routines so the pastor can rely on them.','Pray every week without fail.','Keep a simple checklist for each service.'],
 integ:['Keep confidences, always.','Never use access to the pastor for personal gain.','Be honest about mistakes and fix them quickly.','Serve without needing attention or thanks.']});

MN('admin',{
 who:'The pastor, ministry leaders, and members who depend on accurate records, careful finances, and well-kept facilities.',
 purpose:'The Administrative Ministry keeps the church’s records, finances, calendar, and facilities in order so every other ministry can serve well. Good administration is a form of stewardship and service.',
 refs:['1 Corinthians 14:40','Luke 16:10-12','Proverbs 27:23'],
 values:['Order: everything has its place and its time.','Integrity: honest records and transparent money.','Service: we make other ministries’ work easier.','Confidentiality: private information stays private.'],
 roles:[['Church administrator','Oversees the office, calendar, records, and reports to the pastor.'],['Secretary or clerk','Takes minutes, keeps rosters, and handles correspondence.'],['Treasurer','Records giving and expenses and prepares financial reports.'],['Counting team','Two people who count and record offerings together.'],['Facilities coordinator','Schedules rooms, keys, repairs, and supplies.']],
 rhythm:[['Weekly','Count and record giving, update the calendar, and answer office requests.'],['Monthly','Financial report, bills, and a records review.'],['Yearly','Budget, audit or review, filing and renewals, and records clean-up.']],
 standards:['Always have two unrelated people handle money.','Keep accurate, dated records of every decision and transaction.','Protect private records and share them only with approved leaders.'],
 safety:['Lock offices, files, and safes after use.','Follow the church’s policy on keys and building access.','Report missing items, damage, or safety hazards to the pastor right away.'],
 before:['Confirm the calendar and room schedule.','Prepare counting sheets and deposit slips.','Check the building is clean, open, and safe.','Pray with the team.'],
 after:['Count and record with two people.','Secure the money and lock up.','File the paperwork.','Update the calendar and note follow-up.'],
 report:'Give the pastor a monthly report: income and expenses, upcoming bills and deadlines, and any records or facilities needs.',
 overview:'The Administrative Ministry works behind the scenes so that worship, teaching, and outreach can happen without confusion. It tracks the details: who, when, where, how much, and what was decided. It is quiet work that protects the church’s trust.',
 isnot:['Not a place for control or secrecy.','Not only paperwork.','Not a substitute for the pastor’s leadership.'],
 flow:[['Prepare','Review the calendar, rooms, and supplies for the week.'],['Receive','Count and record giving with two people.'],['Record','Enter every transaction and decision.'],['Report','Share clear reports with the pastor and leaders.'],['File','Store records safely and keep them in order.']],
 fruit:['Records are accurate and easy to find.','Giving is handled with care and transparency.','Ministries get rooms, supplies, and answers when they need them.','Leaders trust the numbers.'],
 challenges:[['Missing receipts or records.','Use a simple form and collect receipts the same week.'],['Last-minute requests.','Publish deadlines and one place to submit requests.'],['Mixing personal and church money.','Keep strictly separate accounts and written approval for every expense.']],
 commIntro:'Administrators communicate dates, decisions, and money, so words must be accurate and clear.',
 comm:['Confirm decisions in writing.','Share the calendar widely and keep it current.','Explain financial reports in plain language.','Answer requests within two working days.','Take private matters to the pastor.'],
 consist:['Count and deposit on the same schedule every week.','Close the books on the same day each month.','Back up records regularly.','Review policies each year.'],
 integ:['Never handle money alone.','Record exactly what happened.','Do not use church resources for personal needs.','Report mistakes as soon as they are found.']});

/* ---------- template table: one row per manual or packet ---------- */
const BFM_FOUND={
 statement:'Bushwick Family Ministries is a Church of God of Prophecy congregation in Bushwick, Brooklyn. We are a family of believers who worship together, grow in God’s Word, and serve our neighborhood in the love of Jesus Christ.',
 vision:'Impacting lives with the Gospel of Jesus Christ until the lost are found and the saved are transformed through the power of the Holy Spirit.',
 visionRef:'Matthew 28:18-20',
 visionText:'Then Jesus came to them and said, “All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”',
 mission:'Reach. Teach. Equip.',
 missionText:'We reach to belong, teach to believe, and equip people to become fully devoted followers of Christ, living out their faith with confidence and purpose.',
 values:['Jesus Christ is Lord of all.','The Bible is our final authority for faith and life.','Every person belongs and has a calling.','Prayer carries everything we do.','We serve with integrity and excellence.','We work together as one family.']
};
const MTPL={
 children:{name:'Children’s Ministry',slogan:'Teaching kids to love God and equipping them to serve Him.',cult:'What is the Culture of God’s Children?',exp:['Volunteer','Teacher','Leadership'],teach:'Children learn one clear Bible truth each week through stories, songs, memory verses, and activities. Lessons follow the church’s approved curriculum and are taught at the children’s level.',safeFor:'Children and Special Needs Children',spec:'children'},
 youth:{name:'Youth & Young Adults Ministry',slogan:'Teaching faith, equipping leaders.',cult:'What Does Youth & Young Adults Represent?',exp:['Volunteer','Leadership'],teach:'Teaching is built on one passage and one clear question each week, with time for small-group discussion and honest questions.',safeFor:'Youth and Young Adults',spec:'youth'},
 men:{name:'Men’s Ministry',slogan:'Reaching men, teaching truth, equipping leaders.',cult:'What Does BFM Men Represent? Spiritual Growth, Accountability, and Community Service',exp:['Volunteer','Leadership'],teach:null,safeFor:'Children, Youth, and the Congregation, with Policies and Procedures',spec:'men'},
 usher:{name:'Usher & Hospitality Ministry',slogan:'Reaching out with a smile, equipped to serve.',cult:'Impact of Usher & Hospitality on BFM',exp:['Volunteer','Member / Leadership'],teach:null,safeFor:'Children, Youth, and the Congregation, with Policies and Procedures',spec:'usher'},
 women:{name:'Women’s Ministry',slogan:'Equipped by faith, empowered to reach.',cult:'Treasured Gems: Women in Faith',exp:['Volunteer','Leadership'],teach:null,safeFor:'Women, Babies, and Families, with Policies and Procedures',spec:'women'},
 nursery:{name:'Nursery Ministry',slogan:'Reaching the youngest, teaching the truth, equipping for life.',cult:'The Culture of the Nursery',exp:['Volunteer','Member / Leadership'],teach:'Toddlers hear short songs and simple Bible moments, with the same gentle routine each week.',safeFor:'Babies and Children, with Policies and Procedures',spec:'nursery'},
 media:{name:'Media Ministry',slogan:'Reaching the screens, teaching the truth.',cult:'What the Ministry Carries',exp:['Volunteer','Member / Leadership'],teach:null,safeFor:'Children, Youth, and the Congregation, with Policies and Procedures',spec:'media'},
 communications:{name:'Communications Ministry',slogan:'Amplifying the message, equipping the church.',cult:'What the Ministry Carries',exp:['Volunteer','Member / Leadership'],teach:null,safeFor:'Children and the Congregation, with Policies and Procedures',spec:'media'},
 dance:{name:'Dance Ministry',slogan:'Reaching hearts through movement, teaching through praise.',cult:'Dancing Through Praise & Worship',exp:['Volunteer','Member / Leadership'],teach:null,safeFor:'Children and Youth, with Policies and Procedures',spec:'dance'},
 pastoral:{name:'Pastoral Aid/Care Ministry',slogan:'Equipping the visionary, supporting the shepherd.',cult:'The Backbone Support of Pastor’s Aide',exp:['Volunteer','Leadership'],teach:null,safeFor:'Pastors and the First Family, with Policies and Procedures',lock:'t2'},
 admin:{name:'Administrative Ministry',slogan:'Serving with order, stewarding with integrity.',cult:'The Culture of Administration',exp:['Volunteer','Leadership'],teach:null,safeFor:'People, Records, and Money, with Policies and Procedures',lock:'A'},
 couples:{name:'Couples Ministry',slogan:'Strengthening marriages, building families on Christ.',cult:'What Does Couples Ministry Represent?',exp:['Volunteer','Leadership'],teach:null,safeFor:'Couples and Families, with Policies and Procedures',spec:'couples'},
 deacon:{name:'Deacon Ministry',slogan:'Serving with compassion, supporting with faithfulness.',cult:'The Culture of Deacon Service',exp:['Volunteer','Leadership'],teach:null,safeFor:'the Congregation, with Policies and Procedures',spec:'deacon'},
 cined:{name:'Christian Education Ministry',slogan:'Teaching the Word, equipping every learner.',cult:'The Culture of Christian Education',exp:['Volunteer','Teacher','Leadership'],teach:'Classes follow a clear plan of study with lessons based on Scripture, taught by trained teachers.',safeFor:'Children, Youth, and Adults, with Policies and Procedures',spec:'cined'},
 outreach:{name:'Outreach Ministry',slogan:'Reaching our neighborhood, teaching the good news, equipping every believer.',cult:'The Culture of Outreach',exp:['Volunteer','Leadership'],teach:null,safeFor:'Neighbors and Volunteers, with Policies and Procedures',spec:'outreach'},
};
const MKEYS=Object.keys(MTPL);
const MANUAL_ORDER=['children','youth','men','women','usher','nursery','media','communications','dance','pastoral','admin','couples','deacon','cined','outreach'];
/* one volunteer training packet per ministry: same data as the manual, different layout */
const MINISTRY_PACKETS=MANUAL_ORDER.map(k=>'p-'+k);
const PACKET_KEYS=['volorient','volsafety'].concat(MINISTRY_PACKETS);
/* two general packets for anyone who has not yet found a ministry */
MTPL.volorient={name:'Volunteer Orientation Packet',cover:'Volunteer Orientation Packet',kind:'Volunteer Training Packet',lock:'pkt',general:true,variant:'orient'};
MTPL.volsafety={name:'Volunteer Safety & Safeguarding Packet',cover:'Volunteer Safety & Safeguarding Packet',kind:'Volunteer Training Packet',lock:'pkt',general:true,variant:'safety'};
MANUALS.volorient={};MANUALS.volsafety={};
MINISTRY_PACKETS.forEach(pk=>{const k=pk.slice(2);MTPL[pk]={name:MTPL[k].name+' Volunteer Packet',cover:MTPL[k].name,kind:'Volunteer Training Packet',lock:'pkt',of:k};MANUALS[pk]=MANUALS[k];});
/* ===== Post-processing: order, parts, competency weights ===== */
/* Department Leadership (Track 3): one course per ministry (the lessons of each pair are joined) */
(function(){
  const numOf=c=>parseInt(String(c.code).replace(/\D+/g,''),10);
  const join=(base,rest)=>{
    rest.forEach(o=>{
      base.lessons=base.lessons.concat(o.lessons);
      base.quiz=base.quiz.concat(o.quiz);
      base.proj={t:base.proj.t,b:base.proj.b+' This project also covers: '+o.proj.t+'.',d:base.proj.d.concat(o.proj.d),h:(+base.proj.h||0)+(+o.proj.h||0)};
    });
  };
  const groups={};
  COURSES.filter(c=>c.track==='3').forEach(c=>{const k=c.grp==='spec'?'s:'+c.key:'core';(groups[k]=groups[k]||[]).push(c);});
  Object.keys(groups).forEach(k=>{
    const g=groups[k].sort((a,b)=>numOf(a)-numOf(b));
    if(k==='core'){g.forEach(o=>COURSES.splice(COURSES.indexOf(o),1));return;}
    if(g.length<2)return;
    join(g[0],g.slice(1));
    const sp=SPECS.find(s=>s.k===g[0].key);if(sp)g[0].title=sp.f+' Leadership';
    g.slice(1).forEach(o=>COURSES.splice(COURSES.indexOf(o),1));
  });
})();
const TRACK_ORDER={'V':0,'N':1,'B':2,'D':3,'1':4,'2':5,'3':6,'A':7,'T':8};
COURSES.sort((a,b)=>TRACK_ORDER[a.track]-TRACK_ORDER[b.track]||a.code.localeCompare(b.code,'en',{numeric:true}));
(function(){
  const seen={};
  COURSES.forEach(c=>{if(c.grp==='spec'){const k=c.track+c.key;seen[k]=(seen[k]||0)+1;c.part=seen[k];}});
  const W1={'ldr-101':[2,3,0,0,0,1,0],'ldr-102':[1,2,1,1,0,1,0],'ldr-103':[1,0,3,3,0,0,0],'ldr-104':[2,2,0,0,0,3,0],
   'ldr-105':[4,0,0,1,0,2,0],'ldr-106':[2,1,1,1,0,4,1],'ldr-107':[1,2,0,0,3,0,1],'ldr-108':[1,0,0,4,0,1,1],
   'ldr-109':[0,0,2,1,3,0,1],'ldr-110':[4,1,0,0,0,2,0],'ldr-111':[1,0,1,3,0,1,2],'ldr-112':[0,1,1,1,1,1,4],
   'min-core':[1,1,3,1,2,1,2],'min-care':[2,2,1,2,0,3,1],'min-teach':[3,0,1,3,0,2,1],
   'min-prayer':[2,2,0,0,0,3,1],'min-disciple':[2,1,1,1,0,4,1],'min-shepherd':[2,2,1,2,0,3,1],'min-word':[4,0,0,3,0,2,0],
   'min-evang':[2,0,0,2,0,3,3],'min-team':[1,1,4,1,2,0,2],'min-discern':[4,2,0,1,0,2,1],'min-spirit':[3,3,0,0,0,3,1],'min-renew':[2,4,0,0,1,2,1],
   'dpt-core':[1,1,4,2,2,1,1],'dpt-org':[0,1,3,2,3,0,1],'dpt-plan':[0,0,2,1,4,0,1],'adm-403':[1,2,0,1,3,0,0]};
  const WS={youth:[1,0,1,1,0,3,2],children:[1,0,1,1,1,2,2],men:[1,1,1,1,0,3,1],women:[1,1,1,1,0,3,1],outreach:[1,0,1,2,0,2,3],media:[0,0,1,3,2,0,3],cined:[2,0,1,2,2,3,1],dance:[1,1,1,1,0,2,3],deacon:[2,3,1,0,1,1,2],usher:[0,2,2,1,1,0,3],couples:[2,2,0,2,0,3,1],nursery:[1,1,1,1,1,2,2]};
  COURSES.forEach(c=>{
    if(c.track==='N'||c.track==='B'||c.track==='V'||c.track==='D'||c.track==='T')c.w=[0,0,0,0,0,0,0];
    else if(W1[c.id])c.w=W1[c.id];
    else if(c.grp==='spec'){const b=WS[c.key].slice();if(c.track==='3'){b[2]+=2;b[4]+=1;}c.w=b;}
    else c.w=[1,1,0,0,4,0,1];
  });
})();
/* ================= Scripture alignment data for the Ministry Manuals =================
   Each entry is [reference, how it connects]. The verse text itself is filled in at build time from bible.js (KJV, public domain). */
const SCR={
children:{
 mission:["Deuteronomy 6:6-7","God commands that his words be on our hearts and be taught diligently to children. Our mission to teach the Bible at their level starts here. As you plan and teach, ask whether a child could repeat this lesson at home, because parents are the first teachers and we stand beside them."],
 vision:["Mark 10:14","Jesus was displeased when children were kept away from him, and he said the kingdom of God belongs to them. Our vision is a place where every child is welcomed, known, and growing in Christ. Connect it by greeting each child by name and treating every child as someone Jesus wants near."],
 values:[
  ["Matthew 18:10","Jesus says not to despise one of these little ones, because God watches over them. If heaven pays attention to each child, so must we. Follow the check-in, pickup, and two-adult rules every time, because each rule tells a child that he or she matters."],
  ["2 Timothy 3:15","Timothy knew the Holy Scriptures from childhood, and they made him wise for salvation. When you teach the Bible simply and truthfully, you do for a child what was done for Timothy. Stay close to the written Word and the approved lesson, and point every activity back to it."],
  ["Psalm 100:2","We are told to serve the Lord with gladness and to come before him with singing. Joy is part of worship, not a break from it. Choose games, songs, and crafts that help the lesson stick, and let the children see that knowing God is a happy thing."],
  ["Ephesians 6:4","Parents are told to bring up their children in the training and teaching of the Lord. Our work helps parents do that. Send home the memory verse and a short summary of the lesson, speak respectfully to parents, and never try to take the place of the home."]],
 fruit:[
  ["Psalm 119:11","Hiding God’s word in the heart helps a person walk in his ways. A child who can retell the story and say the memory verse has begun to store Scripture where it can guide them. Celebrate each verse learned, and ask children to say it back in their own words."],
  ["Psalm 127:3","Children are a heritage from the Lord. Parents who leave their children with us are trusting us with something precious. Earn that trust with clear check-in, kind communication, and a clean, safe room, so that parents can worship without worry."],
  ["1 Corinthians 15:58","Paul encourages believers to be steadfast and always abounding in the Lord’s work, because it is never in vain. Teachers who stay for a full season show that kind of faithfulness. Encourage each other, share what is working, and keep learning, knowing that the seeds you plant matter."],
  ["Acts 2:47","As the early church praised God and enjoyed favor with the people, the Lord added to their number day by day. Welcome and follow-up are part of how that happens. Greet new families warmly, learn their names, and contact them during the week so they feel they belong."]]},
youth:{
 mission:["1 Timothy 4:12","Paul tells Timothy not to let anyone look down on his youth, but to set an example in speech, conduct, love, faith, and purity. Our mission is to help young people know Jesus and use their lives now. Treat students as people God can use today, and give them real chances to serve."],
 vision:["Ecclesiastes 12:1","The Preacher says to remember your Creator in the days of your youth. Our vision of a joyful, safe place where honest questions are welcome gives young people a place to do exactly that. Make every gathering point to Jesus so that remembering him becomes a habit, not a duty."],
 values:[
  ["Colossians 1:18","Christ is to have first place in everything. Every meeting should point to him, not to the program, the music, or ourselves. Before each gathering ask: where does Jesus show up in this plan, and how will students see him?"],
  ["Romans 12:5","We are one body in Christ, and each member belongs to all the others. No young person should be invisible. Learn names, notice who is sitting alone, and invite them in, so every student knows they have a place in the body."],
  ["Ephesians 4:15","Speaking the truth in love helps us grow up into Christ. Teach what the Bible says honestly, and answer hard questions patiently and without shame. Truth without love wounds, and love without truth misleads, so hold both together."],
  ["2 Timothy 2:2","Paul tells Timothy to pass on what he has heard to faithful people who will teach others. Mentors beside young leaders are how that happens. Give students real tasks, walk with them, and let them grow into leaders who will teach others."]],
 fruit:[
  ["John 1:46","Philip answered Nathanael’s doubt with a simple invitation: come and see. Students who invite friends are doing the same thing. Make every gathering a place a student is proud to bring someone to, and thank students who bring a friend."],
  ["1 Peter 4:10","Every believer has received a gift, and each is to use it to serve others as a good steward of God’s grace. Moving from watching to serving is how students use their gifts. Help each student find one way to serve, such as sound, greeting, or leading a small group."],
  ["John 10:3","The Good Shepherd calls his own sheep by name. A leader who knows each student’s name, school, and prayer need is following his example. Keep simple notes, ask about their week, and pray for them by name."],
  ["Proverbs 22:6","Parents are the first to train a child in the way he should go. When parents trust the ministry and talk freely with leaders, we work together toward the same goal. Keep parents informed, invite their questions, and respect their role."]]},
men:{
 mission:["Joshua 24:15","Joshua declares that he and his household will serve the Lord, and he calls the people to choose. The Men’s Ministry exists to help men make and keep that choice. Ask yourself each week how you are leading your home and your team toward the Lord, and help the men around you do the same."],
 vision:["Ephesians 5:25","Husbands are told to love their wives as Christ loved the church and gave himself for it. Our vision of men who lead their homes with love begins with Christ’s self-giving example. Look for one practical way this week to put your family’s needs ahead of your own comfort."],
 values:[
  ["Proverbs 20:6","Many people will say they are loyal, but a faithful man is hard to find. Be the faithful man others can find. Keep your word, show up when you said you would, and serve consistently, even when no one is watching."],
  ["Proverbs 27:17","As iron sharpens iron, a man sharpens his friend. Brotherhood is not only friendship but honest help to grow. Ask the men in your group real questions, listen well, and be willing to be sharpened as well."],
  ["Luke 22:26","Jesus teaches that the greatest among his followers should be like the youngest, and the leader like the one who serves. Servant leadership begins with his example. At home and at church, ask what needs to be done and do it, rather than waiting to be served."],
  ["Proverbs 20:7","The just man walks in his integrity, and his children are blessed after him. A man who is the same in private and in public leaves a good legacy. Choose one habit in private that you would be glad for your family and church to see."]],
 fruit:[
  ["James 5:16","We are told to confess to one another and pray for one another, because the prayer of a righteous man is powerful. Praying for each other by name between meetings is how this verse is lived out. Exchange prayer needs after each meeting, and follow up during the week."],
  ["Colossians 3:21","Fathers are told not to provoke their children, so they will not lose heart. A home led with patience and care protects a child’s spirit. Take a moment before you correct, speak gently, and ask for forgiveness when you are wrong."],
  ["Titus 2:6-7","Young men are to be self-controlled, and the older leader is to be an example in good works and teaching. This is the pattern for mentoring. Seasoned believers should open their lives to younger men and let them see what faithfulness looks like."],
  ["Matthew 5:16","Jesus tells us to let our light shine so that people see our good works and glorify the Father. The ministry shows up in the community when men serve beyond the church walls. Look for one need in Bushwick that the men can meet this season."]]},
women:{
 mission:["Titus 2:3-4","Older women are to teach what is good and to train the younger women. Our mission of helping women know Christ and support one another begins with this pattern. Look for a woman at a different stage of life than yours, and offer to listen, to teach, or to learn."],
 vision:["Proverbs 31:26","She opens her mouth with wisdom, and the law of kindness is on her tongue. Our vision is for women whose words and lives carry both wisdom and kindness. Before you speak in a group, ask whether what you are about to say is wise and kind."],
 values:[
  ["Psalm 1:2-3","The blessed person delights in the law of the Lord and is like a tree planted by streams of water. Being rooted in the Word is what keeps us fruitful in every season. Set aside a regular time in Scripture, and share one thing you learned with another woman each week."],
  ["Galatians 6:2","We are told to carry one another’s burdens, and in doing so to fulfill the law of Christ. Sisterhood is more than friendship; it is burden-bearing. When a woman shares a need, respond with a prayer, a call, or a practical act of help."],
  ["Psalm 71:18","The psalmist asks God not to forsake him in old age, so that he can declare God’s power to the next generation. Older women pass on God’s faithfulness, and younger women bring energy and encouragement. Make room for women of every age to share and listen."],
  ["Romans 12:6-8","Paul reminds us that we have different gifts and are to use them: serving, teaching, encouraging, giving, leading, and showing mercy. Our service to the church and community is how those gifts are used. Name your gift, and look for one place to use it this season."]],
 fruit:[
  ["Philippians 1:3-4","Paul thanks God for the believers every time he remembers them and prays for them all with joy. Women of different ages who know and pray for each other are doing the same. Keep a prayer list and pray for one woman from a different generation this week."],
  ["Romans 15:7","We are told to receive one another as Christ received us, to the glory of God. When a guest returns and is invited into a group, she is experiencing that welcome. Greet guests by name, sit with them, and invite them to the next gathering."],
  ["1 Corinthians 12:7","The Spirit gives each person a gift for the good of everyone. Women who discover and use their gifts are helping the whole church. Offer a simple gifts conversation or class, and help each woman find a place that fits."],
  ["Galatians 6:10","As we have opportunity, we are to do good to everyone, especially to those in the family of faith. Meals, visits, and cards are practical ways to do that. Keep a simple list of needs and organize volunteers to meet them."]]},
usher:{
 mission:["Romans 12:13","We are told to share with God’s people in need and to practice hospitality. The Usher & Hospitality Ministry puts that command into action at the door. Think of the entrance as the first place a person meets the church, and serve there as if you were serving Christ."],
 vision:["Hebrews 13:2","We are told not to forget to show hospitality to strangers, because some have welcomed angels without knowing it. Every guest is worth our full attention. Greet each person as someone God has sent, and help them feel seen and loved."],
 values:[
  ["Matthew 25:35","Jesus says that when we welcome a stranger, we welcome him. A smile and a name make a real difference. Learn names, look people in the eye, and greet each guest as if Jesus himself had walked in."],
  ["1 Corinthians 14:40","Everything in the church should be done in a fitting and orderly way. Ushers help the service stay orderly without hovering. Guide people kindly, give clear directions, and step in only when help is needed."],
  ["Psalm 127:1","Unless the Lord guards the city, the watchman stays awake in vain. We watch carefully, and we trust God to protect his house. Know the exits and the emergency plan, notice anything unusual, and respond quickly and calmly."],
  ["Luke 12:35-36","Jesus tells his servants to be dressed and ready, like people waiting for their master, so that they can open the door immediately. Readiness is part of hospitality. Arrive early, check the building and supplies, and be at your post before the first guest arrives."]],
 fruit:[
  ["Psalm 84:10","The psalmist says he would rather be a doorkeeper in the house of God than live in the tents of wickedness. Serving at the door is an honor. When visitors say they felt welcomed and came back, you have helped them find the house of God."],
  ["1 Corinthians 14:33","God is not a God of confusion but of peace. When services start and finish smoothly, people can focus on worship. Communicate with the pastor and the other teams, so that every move is planned."],
  ["Proverbs 22:3","The prudent see danger and take refuge, but the simple keep going and pay the penalty. Ushers who know the emergency plan and the building are being prudent. Walk the building regularly and review the plan together."],
  ["Philippians 2:4","We are told to look not only to our own interests but also to the interests of others. Following up with a guest within the week shows that we care about them. Record names and send a friendly note, call, or message."]]},
nursery:{
 mission:["Mark 10:16","Jesus took the children in his arms, put his hands on them, and blessed them. Our mission is to care for the youngest in the same loving way. Hold, speak, and serve each child gently, remembering that your arms are the arms of Christ to them."],
 vision:["Isaiah 40:11","The Lord is like a shepherd who gathers the lambs in his arms and carries them close to his heart. Our vision of a calm, safe nursery reflects this picture. Think of every baby and toddler as one of his lambs in your care."],
 values:[
  ["1 Thessalonians 2:7","Paul says that he was gentle among the believers, like a nursing mother caring for her children. Gentleness is how we care for little ones. Use a quiet voice, move slowly, and respond to every cry with patience."],
  ["Psalm 4:8","The psalmist says he will lie down in peace and sleep, because the Lord alone makes him dwell in safety. A safe nursery gives parents and children a sense of that peace. Follow the safety rules every time, so that no one has to worry."],
  ["1 Corinthians 10:31","Whatever we do, we are to do it all for the glory of God. Even wiping a table or sanitizing a toy can glorify God when it protects a child’s health. Keep the space clean and organized as an act of service."],
  ["Ecclesiastes 4:9","Two are better than one, because they have a good return for their labor. Parents and caregivers work best as partners. Share clear, honest updates at pickup, and listen to what parents tell you about their child."]],
 fruit:[
  ["Philippians 4:6-7","Paul tells us not to be anxious about anything, but to bring everything to God in prayer, and the peace of God will guard our hearts. Parents who trust the nursery can worship in that peace. Do your part by being reliable and communicative, and pray for the parents as they worship."],
  ["Isaiah 66:13","God says that he will comfort his people as a mother comforts her child. Calm, clean, cared-for babies and toddlers experience comfort through our hands. Respond quickly to needs, and offer the kind of comfort that you would want for your own child."],
  ["Romans 12:11-12","Paul tells us to keep our spiritual fervor, serving the Lord, joyful in hope, patient in affliction, and faithful in prayer. Caregivers who are trained, screened, and cheerful live this out. Pray before each shift, and bring a joyful heart into the room."],
  ["Matthew 18:5","Jesus says that whoever welcomes one such child in his name welcomes him. When a visiting family returns, they have felt that welcome. Greet each family warmly, explain how the nursery works, and thank them for trusting you with their child."]]},
media:{
 mission:["Colossians 3:23","Whatever we do, we are to work at it with all our heart, as working for the Lord, not for people. The Media Ministry serves the church with sound, video, and slides, and does it as an offering to God. Prepare as if the Lord himself were in the room, because he is."],
 vision:["Psalm 33:3","The psalmist says to sing to the Lord a new song and to play skillfully with a joyful shout. Our vision is for the gospel to be heard and seen with excellence. Practice your craft so that technology never gets in the way of worship."],
 values:[
  ["Exodus 31:3-5","God filled Bezalel with the Spirit of God, with wisdom, understanding, knowledge, and skill in every craft. Skill is a gift from God and can be used as worship. Keep learning your equipment, and give your best as an offering."],
  ["John 3:30","John the Baptist says that Christ must increase and he must decrease. Media serves best when people notice Jesus and not the team. Keep the focus on the message, and avoid drawing attention to yourself."],
  ["Proverbs 25:13","Like the coolness of snow at harvest time is a trustworthy messenger to those who send him, for he refreshes the spirit of his master. A reliable team member is a refreshment. Arrive on time, test equipment before service, and be where you said you would be."],
  ["Proverbs 22:1","A good name is more desirable than great riches. We protect people’s privacy and the church’s reputation. Ask permission before posting a photo or a video, and follow the church’s media policy."]],
 fruit:[
  ["1 Corinthians 14:8","Paul says that if the trumpet gives an uncertain sound, no one will prepare for battle. Clear, steady audio and video make the message clear. Test every system before service, and have a backup plan for the most likely problems."],
  ["Romans 10:14","Paul asks how people can believe in one of whom they have not heard, and how they can hear without someone preaching. Online services let more people hear. Keep the stream steady, welcome online viewers, and invite them to connect with the church."],
  ["Ephesians 4:12","Christ gave leaders to equip his people for works of service, so that the body of Christ may be built up. A trained, scheduled team is part of that equipping. Train new volunteers, rotate fairly, and make sure no one carries the load alone."],
  ["Luke 14:28","Jesus asks who among us, intending to build a tower, does not first count the cost to see if there is enough to complete it. Planning for equipment needs is similar. Report problems early, keep an inventory, and bring requests to the director before something breaks."]]},
communications:{
 mission:["Proverbs 25:11","A word fitly spoken is like apples of gold in pictures of silver. Our mission is to get the right message to the right people, in a way that is beautiful and true. Before you send anything, ask whether it is clear, kind, and timely."],
 vision:["Colossians 4:5-6","Paul tells us to be wise toward outsiders and to let our speech always be gracious, seasoned with salt. Our public voice reaches many people who do not yet know the church. Write as if the newest guest in Bushwick will read every word."],
 values:[
  ["1 Corinthians 14:9","Paul says that unless we speak words that are easy to understand, no one will know what is being said. Clarity is a form of love. Use simple words, give one message at a time, and include the date, time, place, and contact person."],
  ["Ephesians 4:25","Paul tells us to put away falsehood and to speak the truth to our neighbors, because we are members of one body. We never exaggerate or mislead. Check every fact before you publish, and correct mistakes quickly."],
  ["Proverbs 15:23","A person finds joy in giving an apt reply, and a timely word is good. People need to hear early enough to act. Meet the weekly deadline, and send reminders at the right time."],
  ["Matthew 7:12","Jesus says to treat others the way we want to be treated. We protect people’s privacy and dignity because we would want that for ourselves. Ask permission for photos and stories, and never share private details."]],
 fruit:[
  ["Habakkuk 2:2","God tells the prophet to write the vision and make it plain, so that a person can run with it. Clear communication helps members know what is happening and act on it. Publish the weekly update on time, in plain words."],
  ["1 Corinthians 12:12","Paul says that the body is one and has many members, and all the members form one body. Every ministry is part of one church. Help each ministry share its message, and tell the stories of the whole body."],
  ["Matthew 5:14","Jesus says that we are the light of the world, and a city on a hill cannot be hidden. A friendly, accurate website and social media pages show visitors who we are. Keep information current, and make the next step easy to find."],
  ["Philippians 2:2","Paul asks believers to be of the same mind, having the same love, united in spirit. A steady, shared voice helps the church to be understood. Use the same logo, names, and tone, and check with the director before speaking for the church."]]},
dance:{
 mission:["Psalm 149:3","The psalmist says to let them praise God’s name with dancing and make music to him with tambourine and harp. The Dance Ministry offers movement as worship. Before every rehearsal, remember that your dance is for God first, and prepare with prayer."],
 vision:["Psalm 150:4","The psalm calls us to praise the Lord with tambourine and dancing and with strings and pipe. Our vision is to help the congregation enter God’s presence with reverence and joy. Plan every piece so that it leads people toward Jesus and not toward us."],
 values:[
  ["John 4:24","Jesus says that God is spirit, and those who worship him must worship in spirit and in truth. Dance is an offering, not a performance. Pray before you move, and check your heart for pride or fear."],
  ["1 Corinthians 10:23","Paul says that everything is lawful, but not everything is helpful or builds up. We choose attire and movement that serve the message and do not distract. Ask whether what you wear and how you move will build people up, and move together as one team."],
  ["1 Corinthians 9:25","Paul says that everyone who competes in the games goes into strict training. Discipline in practice, prayer, and punctuality prepares us to serve well. Attend every rehearsal, stay in condition, and prepare each piece with care."],
  ["James 4:10","James tells us to humble ourselves before the Lord, and he will lift us up. A servant’s heart is more important than applause. Receive correction gladly, celebrate other dancers, and give God the glory."]],
 fruit:[
  ["2 Samuel 6:14","David danced before the Lord with all his might. His dance pointed to God, not to himself. When the congregation is drawn into worship and not distracted, the dance has done its work."],
  ["Micah 6:8","The Lord requires us to act justly, to love mercy, and to walk humbly with our God. Dancers grow in worship and humility as they walk this way. Keep a teachable spirit, and serve others with kindness."],
  ["Psalm 133:1","The psalmist says how good and pleasant it is when God’s people live together in unity. A team that is united, punctual, and prepared shows that unity. Start and end on time, support one another, and resolve problems quickly and kindly."],
  ["Romans 12:10","Paul tells us to be devoted to one another in love and to honor one another above ourselves. New dancers are welcomed and trained this way. Greet newcomers, pair them with a mentor, and include them in every rehearsal."]]},
pastoral:{
 mission:["Exodus 17:12","When Moses’ hands grew heavy, Aaron and Hur held them up, and his hands remained steady until sunset. Our mission is to lift the arms of the pastor in the same way. Ask each week where the pastor is carrying a load that you can help carry."],
 vision:["Hebrews 13:17","We are told to obey and submit to our leaders, who keep watch over us as those who must give an account, so that their work may be a joy and not a burden. Our vision is a church that makes shepherding a joy. Support the pastor’s direction with a cheerful and faithful heart."],
 values:[
  ["Nehemiah 2:18","When Nehemiah shared what God had put on his heart, the people said, “Let us rise up and build,” and they strengthened their hands for the good work. Support means rolling up our sleeves with the leader. Look for one practical task you can take on this week."],
  ["Proverbs 25:9-10","We are told not to reveal another person’s secret, or the one who hears it may shame us. Confidentiality protects the pastor and the family. What you see and hear on the job stays with you, unless there is a safety concern that the pastor must know."],
  ["1 Thessalonians 5:12-13","Paul asks us to respect those who work hard among us and care for us in the Lord, and to hold them in the highest regard in love because of their work. Honor shows in how we speak and act. Speak well of your leaders, in front of them and behind their backs."],
  ["Ephesians 6:18-19","Paul asks believers to pray at all times for all the saints, and for him, that he may speak the gospel boldly. We are called to pray for our pastor. Set a weekly time to pray for the pastor and the family by name."]],
 fruit:[
  ["Mark 6:31","Jesus invited his disciples to come away and rest for a while, because many were coming and going. A rested pastor can shepherd well. Protect time for rest by handling errands, calls, and details that the pastor does not need to handle."],
  ["Galatians 6:6","Those who are taught the word are to share all good things with their teacher. Supporting the pastor’s family shows love in practical ways. Offer meals, rides, cards, and encouragement, and ask what would be a real help."],
  ["Acts 6:4","The apostles said they would give themselves to prayer and the ministry of the word. When others take care of smaller tasks, the pastor can do that. Plan the details of Sunday so that the pastor can focus on prayer and preaching."],
  ["Proverbs 17:9","Whoever covers an offense promotes love, but whoever repeats the matter separates close friends. A discreet team is a trusted team. Keep private matters private, and speak about the pastor only with respect."]]},
admin:{
 mission:["1 Corinthians 4:1-2","Paul says to think of us as servants of Christ and stewards of God’s mysteries, and that those who are given a trust must prove faithful. Church administration is a form of stewardship. Handle each record, dollar, and calendar with the care of someone who must give an account."],
 vision:["1 Corinthians 14:40","Everything should be done in a fitting and orderly way. Our vision is an administrative team that keeps the church in order, so every other ministry can serve well. Ask of every task whether it makes it easier for someone else to serve."],
 values:[
  ["Proverbs 24:27","Prepare your work outside and get everything ready in the field, and after that build your house. Good order begins with preparation. Keep a calendar, label files, and plan ahead, so that nothing is left to the last minute."],
  ["Luke 16:10-12","Jesus says that whoever can be trusted with very little can also be trusted with much. Honest records and transparent money are part of faithfulness. Count twice, record accurately, and never use church funds in a way that you would not want others to see."],
  ["1 Corinthians 12:28","Paul lists helps and administrations among the gifts that God has placed in the church. Our service makes other ministries’ work easier. Ask each ministry what they need, and respond quickly and kindly."],
  ["Proverbs 20:19","A gossip betrays a confidence, so avoid anyone who talks too much. Confidentiality keeps private information private. Share records only with those who need them, and keep sensitive files secure."]],
 fruit:[
  ["Proverbs 27:23","We are told to know well the condition of our flocks and to give careful attention to our herds. Accurate, easy-to-find records are part of knowing the state of the church. Update records on a regular schedule, and back them up."],
  ["2 Corinthians 8:20-21","Paul says that he takes pains to avoid criticism about the gift being administered, and that he aims to do what is right, not only before the Lord but also before others. Giving must be handled with care and transparency. Use two people to count, issue receipts, and report regularly."],
  ["1 Corinthians 12:21","The eye cannot say to the hand, “I don’t need you.” Every ministry needs the others. Make sure that ministries get rooms, supplies, and answers, and thank them for their service."],
  ["Proverbs 11:1","The Lord detests dishonest scales, but accurate weights find favor with him. Leaders trust the numbers when the numbers are honest. Reconcile accounts, explain variances, and never adjust numbers to look better."]]},
couples:{
 mission:["Genesis 2:24","A man leaves his father and mother and is united to his wife, and the two become one flesh. Marriage is God’s design from the beginning. Our mission is to help couples build their lives on that design. Remind couples that their marriage is a calling, not only a contract."],
 vision:["Ephesians 5:31-33","Paul quotes the creation pattern and says that marriage points to Christ and the church. He calls each husband to love his wife as himself and each wife to respect her husband. Our vision is for marriages that show that picture. Encourage love and respect in practical ways."],
 values:[
  ["Matthew 19:6","Jesus says that the two are no longer two, but one flesh, and what God has joined together, no one should separate. Covenant is a lifelong promise before God. Speak about marriage with honor, and help couples keep their promises through every season."],
  ["Ephesians 4:15","Speaking the truth in love helps us grow up into Christ. Couples learn to say hard things kindly and listen without defending. Practice honest, gentle communication, and model it for the couples you serve."],
  ["Ecclesiastes 4:9-12","Two are better than one, and a cord of three strands is not quickly broken. Couples need other couples, and they need God at the center. Build friendships between couples, and invite them to pray together."],
  ["Lamentations 3:22-23","The Lord’s mercies never come to an end; they are new every morning, and his faithfulness is great. God restores and renews. Offer hope to couples who feel stuck, and remind them that each day is a fresh start."]],
 fruit:[
  ["Proverbs 15:1","A gentle answer turns away wrath, but a harsh word stirs up anger. Couples who communicate with honesty and kindness are living this verse. Teach simple tools for listening, and practice them in your own marriage first."],
  ["Proverbs 24:3-4","A house is built by wisdom and established by understanding, and by knowledge its rooms are filled with rare and beautiful treasures. Preparing engaged couples builds a house on a firm foundation. Offer preparation that covers faith, communication, finances, and family."],
  ["Proverbs 13:20","Whoever walks with the wise becomes wise, but a companion of fools suffers harm. Mentor couples help others walk with wisdom. Choose mentors who are faithful and humble, train them, and support them."],
  ["Proverbs 11:14","Where there is no guidance, a people falls, but in an abundance of counselors there is safety. Hurting couples need counsel early, not late. Make help easy to find, and refer to the pastor or a trusted counselor without delay."]]},
deacon:{
 mission:["Acts 6:3","The apostles ask the church to choose seven men of good reputation, full of the Spirit and wisdom, to take care of the need. This is the pattern for deacon service. Our mission is to serve with character, so that the pastor and church can focus on their calling."],
 vision:["James 1:27","Pure and undefiled religion before God the Father is to look after orphans and widows in their distress and to keep oneself unstained from the world. Our vision is a church that cares for the needy. Look for the people who are easy to overlook and help them with dignity."],
 values:[
  ["Matthew 20:26-27","Jesus says that whoever wants to become great among us must be our servant, and whoever wants to be first must be our slave. Deacons serve quietly and faithfully. Choose the unseen task, and do it well."],
  ["1 Timothy 3:8-9","Deacons are to be dignified, not double-tongued, not addicted to wine, not greedy for gain, and to hold the faith with a clear conscience. Integrity in finances and speech is required. Keep records honest and your words truthful."],
  ["Matthew 9:36","When Jesus saw the crowds, he had compassion for them, because they were harassed and helpless, like sheep without a shepherd. Compassion notices and responds to need. Pay attention to who is missing, struggling, or alone, and reach out."],
  ["Romans 16:1-2","Paul commends Phoebe, a servant of the church, and asks the church to help her in whatever she needs, because she has been a helper of many, including himself. Deacons stand beside the pastor and the church in the same way. Be a helper to those who lead."]],
 fruit:[
  ["Acts 4:34-35","In the early church, there was no needy person among them, because goods were shared and distributed to anyone who had need. Needs were noticed and met. Keep a clear, private process for benevolence, and respond quickly and with dignity."],
  ["Matthew 25:36","Jesus says, “I was sick and you looked after me.” When the sick, elderly, and grieving are visited, Jesus is visited. Keep a visitation list, and make calls, visits, and cards a regular habit."],
  ["1 Timothy 5:17","Elders who direct the affairs of the church well are worthy of double honor, especially those who work hard at preaching and teaching. Supporting the pastor is part of honoring him. Offer practical help and encouragement, and speak well of him."],
  ["1 Timothy 3:10","Deacons are to be tested first, and then if there is nothing against them, let them serve. Character comes before the title. Live so that the church can trust you, and be willing to be tested."]]},
cined:{
 mission:["2 Timothy 2:15","Paul tells Timothy to do his best to present himself to God as one approved, a worker who has no need to be ashamed, correctly handling the word of truth. Our mission is to help every member grow in the knowledge of the Bible. Study each lesson carefully, and teach it faithfully."],
 vision:["Colossians 3:16","Paul tells us to let the word of Christ dwell in us richly, teaching and admonishing one another with all wisdom. Our vision is a church that learns together and lives the Word. Make every class a place where the Word is heard and practiced."],
 values:[
  ["John 17:17","Jesus prays that the Father would sanctify his people in the truth, and says that the Father’s word is truth. We teach the Bible faithfully because it is truth. Teach from the Scripture, and check every lesson against it."],
  ["Nehemiah 8:8","The Levites read from the Book of the Law, made it clear, and gave the meaning, so that the people understood. Clarity is part of teaching. Prepare lessons that students can understand, and explain unfamiliar words and ideas."],
  ["2 Peter 3:18","Peter tells us to grow in the grace and knowledge of our Lord and Savior Jesus Christ. Students and teachers keep learning. Set a growth goal this year, and attend teacher trainings."],
  ["1 Thessalonians 2:8","Paul says that he and his companions were glad to share not only the gospel but also their own selves, because the believers had become dear to them. Care means knowing each student. Learn names, pray for each student, and follow up when someone is absent."]],
 fruit:[
  ["1 Peter 3:15","Peter says to always be prepared to give an answer to everyone who asks about the hope that we have, with gentleness and respect. Students who can explain what they learned are ready to do that. Ask students to explain a lesson in their own words."],
  ["Ezra 7:10","Ezra had set his heart to study the law of the Lord, to do it, and to teach its statutes in Israel. A prepared teacher studies, practices, and then teaches. Pray over each lesson, apply it to your own life, and then share it."],
  ["Matthew 18:12","Jesus asks what a man would do if one of his hundred sheep went astray. He would leave the ninety-nine and look for the one. Noticing and contacting absent students follows the Shepherd’s example. Call or send a note within the week."],
  ["Hebrews 10:24-25","We are told to consider how to stir one another to love and good works, and not to neglect meeting together. Classes that connect with the rest of church life help people grow together. Invite students into worship, service, and fellowship."]]},
outreach:{
 mission:["Acts 1:8","Jesus tells his disciples that they will receive power when the Holy Spirit comes on them, and they will be his witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth. For us, Bushwick is Jerusalem. Our mission is to be witnesses in our own neighborhood first."],
 vision:["Matthew 5:16","Jesus says to let our light shine before others, so that they may see our good deeds and glorify our Father in heaven. Our vision is that people in Bushwick see the church’s love and give glory to God. Let your actions speak first, and your words follow."],
 values:[
  ["1 John 3:18","John says not to love with words or speech but with actions and in truth. Love in action serves without strings. Help meet a need, and do not ask for anything in return."],
  ["Luke 19:5","Jesus looked up and called Zacchaeus by name, and invited himself to his house. Relationships begin when we know names and stories. Ask questions, listen, and remember what you learn."],
  ["Acts 15:36","Paul suggests to Barnabas that they go back and visit the believers in every city where they preached, to see how they are doing. Follow-up is part of the work. Record every contact, and check on each person within the week."],
  ["Jeremiah 29:7","God tells the exiles to seek the peace and prosperity of the city where they live, and to pray for it. Partnering with community leaders and other churches seeks the good of our neighborhood. Learn who serves in Bushwick, and look for ways to work together."]],
 fruit:[
  ["1 Peter 2:12","Peter tells us to live such good lives among unbelievers that they may see our good deeds and glorify God. When neighbors know the church by name and by kindness, this is happening. Serve consistently, so that people come to trust you."],
  ["John 4:35","Jesus says to look at the fields, because they are ripe for harvest. Contacts who become visitors, and visitors who become members, are the harvest. Invite warmly, follow up well, and welcome new people into the life of the church."],
  ["Luke 10:2","Jesus says that the harvest is plentiful but the workers are few, so we should ask the Lord of the harvest to send workers into his harvest. More members joining outreach teams answers that prayer. Pray for workers, and invite others to join you."],
  ["Titus 3:14","Paul says that our people must learn to devote themselves to doing what is good, in order to meet pressing needs and not live unproductive lives. When local partners call the church for help, it shows that we are trusted. Keep your word, and respond promptly."]]}
};

/* Scriptures for the Character Qualities (every manual uses the same ones) */
const CQ_SCR={
 'Character and integrity':["Proverbs 10:9","Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out. Choose to be the same person in private and in public."],
 'Consistency':["Galatians 6:9","We are told not to grow weary in doing good, because in due season we will reap if we do not give up. Keep showing up the same way, even when it is hard."],
 'Accountability':["Hebrews 13:17","We are asked to obey and submit to our leaders, who keep watch over us and must give an account. Welcome correction, and answer honestly to the leader over you."],
 'Reliability':["Matthew 5:37","Jesus says to let your yes be yes and your no be no. Do what you said you would do, and tell your leader early when you cannot."],
 'Trustworthiness':["Proverbs 11:13","A gossip betrays a confidence, but a trustworthy person keeps a secret. Handle people, money, and information with honesty and discretion."],
 'Communication':["Ephesians 4:29","Paul says that no unwholesome talk should come out of our mouths, but only what is helpful for building others up. Speak clearly, kindly, and early."],
 'Faithfulness':["1 Corinthians 4:2","Paul says that those who have been given a trust must prove faithful. Be steady in the small things and in hard seasons, because God sees them."],
 'Prayer':["1 Thessalonians 5:16-18","Paul tells us to rejoice always, pray continually, and give thanks in all circumstances. Pray for your team, the people you serve, and your leaders."],
 'Giver':["2 Corinthians 9:7","Paul says that each person should give what he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver. Give your time, talents, and treasure with a glad heart."]
};

/* Servanthood section: shared scriptures for every manual */
const SERV_SCR={
 jesus:[
  ["Mark 10:42-45","Jesus teaches that, unlike the rulers of the world, whoever wants to be great must serve, and whoever wants to be first must be a slave of all. He then points to himself as the example. When you serve, you are following the King who came to serve."],
  ["John 13:12-17","After washing his disciples’ feet, Jesus says that he has given them an example, and that they are blessed if they do it. This is the model for every leader in the church. Look for a humble, unseen task and do it for someone else."],
  ["Philippians 2:3-5","Paul says to do nothing out of selfish ambition, but to value others above ourselves, and to have the same mindset as Christ. Servanthood begins in the heart. Check your motives before you serve, and ask God to give you Christ’s mindset."]],
 life:[
  ["John 15:4-5","Jesus says that a branch cannot bear fruit unless it remains in the vine, and that apart from him we can do nothing. Our service flows from our relationship with him. Spend time with Jesus before you serve for him."],
  ["Galatians 2:20","Paul says that he has been crucified with Christ, and that Christ now lives in him. A life led by Christ gives up control and trusts him. Ask the Holy Spirit each day to lead you."]],
 balance:[
  ["Matthew 11:28-30","Jesus invites the weary and burdened to come to him and promises rest, and says that his yoke is easy and his burden is light. He does not ask us to burn out. Bring your tiredness to him, and take on only what he is asking of you."],
  ["Exodus 18:17-18","Moses’ father-in-law tells him that what he is doing is not good, and that he will wear himself out, because the work is too heavy for him alone. Sharing the load is wise. Delegate, train others, and ask for help."],
  ["Mark 6:31","Jesus says to his disciples, “Come with me by yourselves to a quiet place and get some rest.” Rest is part of ministry. Protect a weekly day of rest, time with your family, and time for your health."]],
 prayer:[
  ["Matthew 6:6","Jesus says to go into your room, close the door, and pray to your Father, who sees what is done in secret. Private prayer is the root of public service. Set a regular time and place to pray alone."],
  ["Isaiah 58:6","God describes the fast he chooses as loosing the chains of injustice, setting the oppressed free, and breaking every yoke. Fasting that is joined with prayer leads us toward others in need. When you fast, ask God who needs your help, and then act."]]
};
/* Ministry-specific FAQs (10 to 12 per ministry) and leadership descriptions. Placeholder wording for pastor review. */
const FAQ_M={};
FAQ_M.children=[
['What ages does the Children’s Ministry serve?','We serve children from school age up to the youth group. Your leader will tell you which class or group you are assigned to and how the classes are divided.'],
['Do I need teaching experience to serve?','No. You need a heart for children, a willingness to learn, and a clean screening. New volunteers shadow an experienced teacher and use the approved lesson.'],
['What is the check-in and pickup process?','Every child is checked in by a parent or guardian and picked up only by an approved adult. Follow the written policy every time, with no exceptions.'],
['Can I be alone with a child?','No. Always keep two screened adults in the room, or keep the door open with the room visible. This protects the children and protects you.'],
['What do I do if a child is upset or misbehaves?','Stay calm, speak gently, and redirect the child. Never use physical discipline, shame, or threats. If the problem continues, tell your leader and let the leader speak with the parent.'],
['What do I do if a child gets hurt?','Care for the child first, call 911 for anything serious, and tell your leader right away. Write an incident report and give it to the pastor within 24 hours.'],
['What if I suspect a child is being harmed?','Tell your leader and the pastor immediately. Follow the church’s reporting policy and the law, and write down what you saw the same day. Do not question the child or investigate on your own.'],
['May I take photos of the children?','Only with the parents’ permission and only through approved channels. Never post a child’s photo or name online without written permission.'],
['What lesson material do we use?','We use the approved curriculum. Ask your leader before changing or adding to a lesson.'],
['How do I talk with parents?','Be warm, brief, and respectful. Share good news freely. Bring concerns to your leader so that one voice speaks for the ministry.'],
['What if a visiting family comes for the first time?','Greet them warmly, explain how check-in works, learn the child’s name, and record their details so the team can follow up during the week.'],
['How are volunteers trained?','You complete orientation, the required safeguarding training, and ongoing teacher trainings. You will also attend team meetings.']];
FAQ_M.youth=[
['What ages does the Youth & Young Adults Ministry serve?','We serve teenagers and young adults. Your leader will explain how the groups are arranged and which one you will help with.'],
['Do I need to be young to serve?','No. Students need mentors of every age. What matters is that you are screened, reliable, and glad to listen and walk with young people.'],
['How do I build trust with students?','Show up consistently, learn names, ask about their week, and listen more than you talk. Trust grows over time through small acts of faithfulness.'],
['Can I be alone with a student?','No. Keep another screened adult present, or meet in an open and visible place. This protects the student and you.'],
['What boundaries should I keep with students?','Keep conversations appropriate, avoid private one-on-one messages, and never keep secrets that involve safety. Use approved channels and include a second adult when messaging minors.'],
['What if a student tells me something serious?','Listen calmly and kindly, and do not promise to keep it secret. Tell your leader and the pastor right away so that the student gets proper help.'],
['What do I do when a student asks a hard question?','It is fine not to know. Say so, look into it with the Bible, and ask your leader or pastor. Honest questions are welcome here.'],
['How do I handle phones and social media?','Keep your own posts above reproach. Do not post students’ photos without permission, and use only approved group chats for ministry messages.'],
['What if a student is hurt or ill?','Care for the student, call 911 if it is serious, and tell your leader. Write an incident report and give it to the pastor within 24 hours. Contact the parents the same day.'],
['How do we communicate with parents?','Keep parents informed about events, locations, and times. Get permission slips when required, and answer their questions kindly.'],
['How can students begin to serve?','Help each student find one small role, such as greeting, sound, or leading a group. Give real responsibility and encourage them often.'],
['What trainings are required?','Orientation, safeguarding and compliance training, and ongoing ministry trainings. Plan to attend team meetings as well.']];
FAQ_M.men=[
['Who is the Men’s Ministry for?','It is for any man who wants to grow in Christ, become a better husband, father, and leader, and walk with other men.'],
['Do I need to be a member of the church?','Ask your leader and the pastor about the requirements. Visitors are welcome to attend the gatherings.'],
['What does the ministry do?','We meet for prayer and study, encourage one another in our homes and work, serve the church, and look for ways to help the neighborhood.'],
['How often do we meet?','Your leader will share the schedule for meetings, prayer, and service days. See the meeting rhythm in your manual.'],
['What if I am struggling and do not want others to know?','What is shared in the group stays in the group. Talk privately with your leader or the pastor, and you will be treated with care.'],
['What if I am not married or not a father?','You are welcome. The ministry is for men at every stage, and we learn from one another.'],
['How can I serve the church through this ministry?','Ask your leader. Men serve through setup, security, hospitality, mentoring, and special projects, according to their gifts.'],
['What is expected of me as a member?','Pray, attend when you can, keep confidences, speak with respect, and support the other men in the ministry.'],
['Can I help men outside the church?','Yes. Outreach to the neighborhood is part of our vision. Talk with your leader about service projects and partnerships.'],
['How do I get a mentor or become one?','Tell your leader. We pair younger men with seasoned believers, and we encourage mature men to open their lives to others.'],
['What if I miss a meeting?','Let your leader know, and catch up with a brother. We want you with us, not to keep score.'],
['What should I bring to meetings?','Bring a Bible, a notebook, and an open heart. Your leader will tell you if anything else is needed.']];
FAQ_M.women=[
['Who is the Women’s Ministry for?','It is for every woman who wants to grow in Christ and walk with other women, whatever her age or stage of life.'],
['Do I have to be a member to join?','Ask your leader or the pastor about the requirements. Guests are welcome at our gatherings.'],
['What does the ministry do?','We gather for prayer, Bible study, fellowship, and service. We also care for women who are going through hard times.'],
['How often do we meet?','Your leader will share the calendar. See the meeting rhythm in your manual.'],
['Is what I share kept private?','Yes. What is shared in the group stays in the group, except where safety requires telling the pastor.'],
['How can I serve?','Ask your leader. Women serve through hospitality, teaching, prayer, mentoring, events, and meeting practical needs.'],
['What if I am new to the faith?','You belong here. Come as you are, ask questions, and let an older sister walk with you.'],
['Can I bring a friend?','Yes. Bring friends and neighbors, greet them warmly, and invite them to the next gathering.'],
['How does mentoring work?','We pair women of different ages to pray, talk, and learn together. Ask your leader about being matched.'],
['What do we do when a sister is in need?','Tell your leader so the team can respond with prayer, meals, visits, or other help, and keep the details private.'],
['What if I disagree with something in a meeting?','Speak respectfully and privately with the leader. We pursue peace and honest conversation.'],
['What is expected of the leaders?','They pray for the women, prepare for each gathering, keep confidences, and report to the pastor on a regular schedule.']];
FAQ_M.usher=[
['What does an usher do?','Ushers greet people, help them find seats and rooms, hand out bulletins, help during offering and communion, and keep the service orderly.'],
['What time should I arrive?','Sunday service begins at 10:30 AM. Ushers and hospitality volunteers arrive 45 minutes to 1 hour before the service, between 9:30 and 9:45 AM.'],
['What do I wear?','Dress modestly and neatly, and follow your leader’s guidance on the team’s uniform or dress.'],
['How should I greet guests?','Greet them warmly within the first minute, learn their name, and walk them to where they need to go. Invite them back, and record their information for follow-up.'],
['What do I do with a first-time guest?','Welcome them, show them the nursery, children’s classes, and restrooms, and introduce them to a member. Follow up during the week.'],
['What if someone is disruptive during the service?','Stay calm and kind. Speak quietly with the person, and bring in your leader if needed. Do not argue or raise your voice.'],
['What do I do in a medical emergency?','Call 911 first, then tell your leader and the pastor. Keep the area clear and ask someone with training to help while you wait.'],
['What do I do in a fire or evacuation?','Help people move calmly to the nearest safe exits and the meeting point. Know the exits before service and follow the emergency plan.'],
['How do I help with the offering?','Follow your leader’s plan. Money is always handled by two people, and it is delivered to the approved person right away.'],
['How do I help people with limited mobility?','Offer help kindly and ask what they need. Keep aisles and entrances clear, and know where accessible seating is.'],
['What do I do if I see something unusual?','Notice it, stay calm, and tell your leader or the pastor right away. Do not confront anyone on your own.'],
['What should I do before and after service?','Use the checklists in your manual: check the building, supplies, and signs before; tidy, collect items, and report anything unusual after.']];
FAQ_M.nursery=[
['What ages does the nursery serve?','We care for babies and toddlers during services. Your leader will tell you the exact age range and room assignments.'],
['Do I need experience with babies?','Experience helps, but it is not required. You need a gentle heart, a clean screening, and training. You will serve with an experienced caregiver at first.'],
['What is the check-in and pickup process?','Parents check in each child and receive a matching tag. A child is released only to the adult with the matching tag, with no exceptions.'],
['Can I be alone with a child?','No. Always keep at least two screened adults in the nursery, and keep the door open or the room visible.'],
['How do we handle diapering?','Follow the written policy. Diaper in the open area, with another adult present, and wash your hands and clean the surface every time.'],
['What about allergies and feeding?','Check the allergy information at check-in. Feed a child only what the parent supplied and only when the parent has asked. Never give medicine.'],
['What if a baby will not stop crying?','Try comfort, a diaper change, a snack the parent supplied, or a quiet walk. If the child cannot be calmed, ask your leader to call the parent.'],
['What if a child is sick or hurt?','Care for the child, call 911 for anything serious, and tell your leader. Write an incident report and give it to the pastor within 24 hours. Tell the parent the same day.'],
['How do we keep the nursery clean?','Sanitize toys and surfaces after each service, wash hands often, and keep sick children at home. Your manual has a checklist.'],
['May I take photos of the babies?','No, unless the parents have given permission and the church allows it. Never post a child’s photo online.'],
['What if a parent seems upset or worried?','Listen kindly, reassure them, and call your leader if needed. Remember that leaving a child can be hard.'],
['What time should I arrive?','Arrive at least 15 minutes before the service so the room is clean, safe, and ready before the first family arrives.']];
FAQ_M.media=[
['What does the Media Ministry do?','We run sound, video, projection, lighting, live stream, and recordings so the church can worship and hear the Word clearly.'],
['Do I need technical experience?','No. We train you. A willingness to learn and to be on time matter most.'],
['What time should I arrive?','Sunday service begins at 10:30 AM. Media volunteers arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM, to set up and test.'],
['What happens if equipment fails during service?','Stay calm, use the backup plan, and tell your leader. Fix the problem if you can do so quickly, and write down what happened afterward.'],
['Who may touch the equipment?','Only trained and approved volunteers. Ask your leader before you move, repair, or borrow any equipment.'],
['May I post or share recordings?','Only with the approval of your leader and the pastor. Follow the church’s media and privacy policy.'],
['Can I record children or youth?','Only with parent permission and the leader’s approval. Never post identifying details of a child.'],
['How do we handle copyright for music and video?','Use only licensed or approved content. Ask your leader before playing or streaming anything new.'],
['How do I handle the live stream?','Test the stream before service, monitor it during service, and welcome online viewers. Report any problems to your leader.'],
['What do I do when someone asks me to change something during service?','Politely check with your leader. Changes during service follow the pastor’s direction.'],
['How do we schedule volunteers?','Your leader posts a schedule. Tell your leader early if you cannot serve so someone can fill in.'],
['What should I do before and after each service?','Use the checklists: test and set up before; shut down, store, and report issues after.']];
FAQ_M.communications=[
['What does the Communications Ministry do?','We share the church’s message through announcements, the website, social media, flyers, email, and text, so that people know what is happening.'],
['Do I need design or writing skills?','Helpful, but not required. We train you and give you templates. What matters is clarity, accuracy, and kindness.'],
['What time should I arrive on Sundays?','Sunday service begins at 10:30 AM. Communications volunteers arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM.'],
['Who approves what we publish?','Your director and the pastor. Nothing speaks for the church until it has been approved.'],
['What is the deadline for announcements?','Your leader will share the weekly deadline. Send material early so there is time to check and correct it.'],
['May I post photos of members?','Only with permission. Never post a child’s photo or name without written permission from a parent.'],
['What do I do if I make a mistake in a post?','Tell your director right away, correct it quickly, and apologize kindly if needed.'],
['How do I respond to comments and messages?','Reply kindly and promptly. Pass questions you cannot answer to your leader. Do not argue online.'],
['What if someone posts something negative about the church?','Do not respond in anger. Tell your leader, and follow the plan the pastor and director give you.'],
['What brand and style rules should I follow?','Use the church’s logo, names, colors, and tone. Ask your leader for the style guide.'],
['How do I protect private information?','Never share addresses, phone numbers, or prayer requests without permission. Keep passwords safe and use approved accounts only.'],
['How do I tell the church’s stories?','Ask ministries for stories and updates, check the facts, get permission, and tell them with honesty and gratitude to God.']];
FAQ_M.dance=[
['What is the purpose of the Dance Ministry?','We offer movement as worship and as a way to help the congregation enter God’s presence. We dance for God first.'],
['Do I need dance training?','No. We welcome dancers at every level, and we train together. A heart for worship, humility, and faithfulness matter most.'],
['How often do we rehearse?','Your leader will share the rehearsal schedule. Attend every rehearsal you can, and tell your leader early if you cannot.'],
['What should I wear?','Follow the ministry’s dress guidelines. We choose modest attire and movement that do not distract from the worship.'],
['What music do we use?','We use music approved by your leader and the pastor. Ask before adding or changing any piece.'],
['How do we prepare spiritually?','Pray before rehearsals and services, read Scripture, and keep a clean heart toward one another.'],
['What if I make a mistake during a performance?','Keep worshiping and keep going. The goal is worship, not perfection. Talk about it with your leader afterward.'],
['What time should I arrive for a service?','Arrive early enough to warm up, pray, and be ready before the service begins. Your leader will give the call time.'],
['Can I invite friends to join?','Yes. Invite them to a rehearsal or a service, and your leader will welcome them and explain how to join.'],
['How do we handle injuries?','Stop right away, tell your leader, and get care. Do not dance through pain. Call 911 for serious injuries.'],
['Are there rules for young dancers?','Yes. Follow the safeguarding policy: two screened adults present, parent permission, and approved communication only.'],
['How do we handle correction?','Receive it with humility. Leaders correct in private and with grace, and the team supports one another.']];
FAQ_M.pastoral=[
['What does the Pastoral Aid/Care Ministry do?','We support the pastor and the pastor’s family by handling practical needs, details, and care, so the pastor can focus on prayer and the Word.'],
['What time should I arrive on Sundays?','Sunday service begins at 10:30 AM. Pastoral aid volunteers arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM.'],
['What kinds of tasks will I do?','Tasks may include arranging the pulpit area, water and supplies, escorts, errands, scheduling help, and meeting practical needs for the pastor’s family.'],
['How confidential is this ministry?','Very. Anything you see or hear stays private, except where safety requires telling the pastor. Never gossip or share details.'],
['What if the pastor asks for something I am unsure about?','Ask kindly for clarity. If it conflicts with church policy, safety, or your conscience, speak with your director.'],
['How do we care for the pastor’s family?','Offer help with meals, rides, cards, and encouragement. Ask what would help, and respect their privacy and rest.'],
['Can I share pastoral concerns with others?','No. Take concerns only to the director or the pastor, and never discuss them with the congregation.'],
['How do we help during funerals, weddings, and special services?','Your leader will assign tasks, such as greeting families, arranging space, and assisting with the details. Follow the plan and serve quietly.'],
['How do we support the pastor in prayer?','Keep a regular time to pray for the pastor and family by name, and ask for specific needs.'],
['What if I make a mistake?','Tell your director right away. Honesty and a willingness to learn matter more than perfection.'],
['How do I handle visitors who ask to see the pastor?','Greet them kindly, ask how you can help, and pass the request to the pastor or director. Do not promise an appointment.'],
['What training is required?','Orientation, safeguarding and compliance training, and ministry trainings. You will also attend team meetings.']];
FAQ_M.admin=[
['What does the Administrative Ministry do?','We keep the church’s records, calendar, communication, files, and finances in order so that every ministry can serve well.'],
['What time should I arrive on Sundays?','Sunday service begins at 10:30 AM. Administrative volunteers arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM.'],
['Do I need office experience?','No. We train you. Honesty, accuracy, and a willingness to follow processes are what we need.'],
['Who may see church records?','Only people who need them to serve, as approved by the pastor. Keep records secure and private.'],
['How is money handled?','Always by two unrelated people, with receipts and records. Count together, deposit promptly, and report regularly.'],
['What do I do if the numbers do not match?','Stop, recount with a second person, and report the difference to your director and the pastor. Never adjust numbers to make them look right.'],
['How do I handle requests from other ministries?','Respond promptly and kindly, record the request, and follow the approval process set by the pastor.'],
['How do we manage the church calendar?','Use one shared calendar. Check for conflicts before approving a date, and keep the calendar current.'],
['What if I make a mistake in a record?','Tell your director right away and correct it openly. Do not hide errors.'],
['How do we store files?','Use the approved system and folders, name files clearly, and back them up. Never store private records on personal accounts.'],
['What about membership and attendance records?','Keep them accurate and up to date, and treat them as private. Share them only with approved leaders.'],
['What training is required?','Orientation, safeguarding and compliance training, and ministry trainings. You will also attend team meetings and keep up with the reporting schedule.']];
FAQ_M.couples=[
['Who is the Couples Ministry for?','It is for engaged couples, newly married couples, and couples at every stage who want a marriage centered on Christ.'],
['Do both spouses have to attend?','We encourage couples to come together, but single spouses and those who are separated are welcome to talk with the leader.'],
['What do we do in the ministry?','We study the Bible together, learn communication tools, pray with and for one another, and build friendships among couples.'],
['Is what we share kept private?','Yes. What is shared in the group stays in the group, except where safety requires telling the pastor.'],
['What if our marriage is in crisis?','Speak with your leader and the pastor right away. Help is available, and early help is the best help.'],
['Do you offer engaged couples preparation?','Yes. Ask your leader about the preparation process, which usually includes meetings with the pastor.'],
['What is a mentor couple?','A mentor couple is a seasoned, faithful couple who walk beside another couple. Ask your leader about being matched.'],
['Can I serve if I am not married?','Ask your leader. Single leaders and helpers may serve where it fits, while the couples teaching and mentoring are done by married couples.'],
['How do we handle disagreements within a group?','Speak with respect, listen first, and bring concerns to the leader. Do not give advice that belongs to a counselor or pastor.'],
['What if one spouse is not a believer?','You are welcome. Pray, be patient, and keep your own faith strong. Ask your leader for guidance.'],
['Does the ministry offer counseling?','The ministry offers friendship, teaching, and referral. For counseling, speak with the pastor.'],
['How often do we meet?','Your leader will share the schedule. See the meeting rhythm in your manual.']];
FAQ_M.deacon=[
['What does a deacon do?','Deacons serve the church by meeting practical needs, caring for the sick and needy, helping the pastor, and keeping order and peace.'],
['What time should I arrive on Sundays?','Sunday service begins at 10:30 AM. Deacons arrive 45 minutes to 1 hour before service, between 9:30 and 9:45 AM.'],
['What qualifies someone to serve as a deacon?','The Bible describes character: dignified, honest, sober, faithful, and tested. The church and the pastor confirm the calling.'],
['How are needs in the church handled?','Needs are brought privately to the deacons and the pastor. We respond with care and dignity, and we keep the details confidential.'],
['How is benevolence handled?','Follow the church’s benevolence process. Two deacons review each request, record the help given, and report to the pastor.'],
['How do deacons help during communion and baptism?','Your leader will explain the preparation and the steps. Serve with reverence and follow the pastor’s direction.'],
['What is the deacon’s relationship with the pastor?','Deacons serve beside the pastor, support the pastor’s direction, and pray for the pastor and family.'],
['What do I do in a medical emergency during service?','Call 911 first, then tell the pastor. Keep order, clear space, and ask someone trained to help.'],
['How do we visit the sick and the grieving?','Follow the visitation list. Go in pairs, pray, listen, and leave when it is time. Report back to the pastor.'],
['What if I disagree with a decision?','Speak privately with the chair or the pastor. Once a decision is made, support it.'],
['How do we keep confidences?','Never share what you learn. Share only with the pastor or the other deacons when needed to help.'],
['What training is required?','Orientation, safeguarding and compliance training, ministry trainings, and regular deacon meetings.']];
FAQ_M.cined=[
['What does Christian Education do?','We teach the Bible to every age through Sunday school, classes, and trainings, so that everyone grows in knowledge and faith.'],
['When is Sunday school?','Sunday school runs from 9:45 to 10:20 AM. Teachers arrive by 9:30 AM, 15 minutes before it begins.'],
['Do I need to be a teacher by profession?','No. You need a love for the Word, a teachable heart, and a clean screening. We provide curriculum and training.'],
['What curriculum do we use?','We use the approved curriculum. Ask your leader before changing or adding to a lesson.'],
['How do I prepare a lesson?','Pray, read the passage several times, study the notes, plan the lesson, and practice. Prepare in advance, not the night before.'],
['What if I do not know the answer to a question?','Say so honestly. Look it up, ask your leader or pastor, and bring the answer next week.'],
['What if a student is disruptive?','Stay calm, redirect kindly, and speak with the student privately. Tell your leader if the problem continues.'],
['Can I be alone with a child?','No. Keep two screened adults in the room, or keep the door open with the room visible.'],
['How do I follow up with absent students?','Contact them within the week with a call or note. Show that they were missed, and pray for them.'],
['What if a student is hurt?','Care for the student, call 911 for anything serious, and tell your leader. Write an incident report within 24 hours.'],
['How are teachers trained?','You complete orientation, safeguarding training, and ongoing teacher trainings. You will also attend team meetings.'],
['How do I keep my class safe and orderly?','Arrive early, set up the room, know the exits, follow check-in rules, and begin and end on time.']];
FAQ_M.outreach=[
['What does the Outreach Ministry do?','We share the love of Christ with our neighbors through service, events, invitations, and follow-up in Bushwick and beyond.'],
['Do I need evangelism training?','No. We train you. Start with kindness, listening, and a simple invitation, and grow from there.'],
['Where do we serve?','We serve in the neighborhood, at community events, and with partners. Your leader will share the plan.'],
['How do we approach people respectfully?','Smile, introduce yourself, ask questions, and listen. Never pressure anyone. Respect a no and leave the door open.'],
['What do we do when someone is interested in the church?','Record their name and contact details with permission, invite them to a service, and follow up within the week.'],
['How do we stay safe on outreach?','Go in pairs or teams, tell your leader where you will be, carry a phone, and follow the safety plan. Never go into a home alone.'],
['Can children and youth take part?','Yes, with parent permission and a screened adult. Follow the safeguarding policy at all times.'],
['May we hand out food or supplies?','Yes, following the church’s plan. Treat every person with dignity, and track what you give.'],
['What if someone asks for money or help we cannot give?','Be kind, explain what we can do, and refer them to the deacons or the pastor for care.'],
['How do we partner with other groups?','Ask your leader first. The pastor approves partnerships so that we work together in a way that honors Christ.'],
['What do I do in an emergency?','Call 911 first, then tell your leader and the pastor right away.'],
['How do we report results?','Keep simple records of contacts, events, and follow-up. Share them with your leader for the report to the pastor.']];
/* What a leader means in each ministry, and how a leader carries himself or herself there */
const LEAD_M={
children:['In the Children’s Ministry, a leader is a shepherd of little ones and a coach to the teachers. A leader protects the children, equips the volunteers, and stands beside the parents.',['Is gentle, patient, and joyful with children, and never harsh.','Models the safeguarding rules first: two adults, open doors, and the check-in and pickup process.','Prepares lessons in prayer and helps teachers do the same.','Knows the children by name and notices who is missing or struggling.','Speaks respectfully to parents and builds trust through honest communication.']],
youth:['In the Youth & Young Adults Ministry, a leader is a mentor and a safe adult. A leader walks beside students, listens before speaking, and points them to Jesus.',['Is real, consistent, and approachable, with students and with parents.','Keeps firm boundaries, with a second adult present and approved communication only.','Welcomes honest questions and answers from the Bible, without shame.','Gives students real responsibility and celebrates their growth.','Keeps their own faith, language, and online presence above reproach.']],
men:['In the Men’s Ministry, a leader is a brother and a servant who leads by example. A leader helps men grow as followers of Christ, in their homes, work, and church.',['Leads with humility, not pride, and serves before being served.','Keeps his word, shows up, and is the same man in public and private.','Listens well and keeps every confidence.','Encourages men to love and lead their families and to serve the church.','Invites correction and invests in younger men.']],
women:['In the Women’s Ministry, a leader is a sister, a teacher, and an encourager. A leader creates a place where women of every age are welcomed, taught, and supported.',['Leads with grace, wisdom, and kindness.','Welcomes every woman and makes room for different ages and seasons.','Keeps every confidence and handles hard stories with care.','Prepares in prayer and the Word before each gathering.','Encourages women to discover their gifts and use them.']],
usher:['In the Usher & Hospitality Ministry, a leader is the face of the church’s welcome. A leader sets the tone at the door, trains the team, and keeps the service calm and orderly.',['Arrives early, and is ready before the first guest arrives.','Greets everyone warmly and trains the team to do the same.','Stays calm and clear in any emergency and knows the plan.','Treats every guest and member with equal dignity.','Works closely with the pastor and the other ministries so the service flows.']],
nursery:['In the Nursery Ministry, a leader is a protector and a caregiver. A leader makes the nursery safe, clean, and loving, so parents can worship with peace.',['Is gentle, calm, and attentive, and models patience.','Follows and enforces the check-in, pickup, and diapering policies.','Keeps the room clean, supplied, and safe.','Trains and supports caregivers and helps them rest.','Communicates kindly and clearly with parents.']],
media:['In the Media Ministry, a leader is a servant with skill. A leader helps the team use technology to serve worship and the Word, without drawing attention to the team.',['Is calm, prepared, and humble, especially when something fails.','Trains volunteers patiently and shares knowledge freely.','Tests equipment early and keeps good records.','Honors the pastor’s direction and the church’s media policy.','Protects privacy, permission, and copyright.']],
communications:['In the Communications Ministry, a leader is a faithful voice for the church. A leader keeps messages clear, accurate, and kind, and protects the church’s name.',['Is careful, truthful, and timely.','Checks facts and gets approval before anything is published.','Keeps the church’s tone and style consistent.','Protects the privacy and dignity of every person.','Trains and encourages the team and meets deadlines.']],
dance:['In the Dance Ministry, a leader is a worshiper who leads others into worship. A leader sets the spiritual tone and helps dancers serve with humility.',['Prays with the team and leads with a humble spirit.','Teaches and corrects with grace, and celebrates others.','Chooses attire, music, and movement that serve the message.','Is punctual, prepared, and committed to rehearsal.','Cares for each dancer’s spiritual life and well-being.']],
pastoral:['In the Pastoral Aid/Care Ministry, a leader is a helper and a guardian of trust. A leader lifts the pastor’s arms and keeps confidences.',['Serves quietly, without seeking credit.','Keeps every confidence and speaks well of the pastor and family.','Anticipates needs and takes care of details.','Prays regularly for the pastor, the family, and the team.','Is dependable, flexible, and calm under pressure.']],
admin:['In the Administrative Ministry, a leader is a steward of order and trust. A leader keeps the church’s records, money, and plans accurate and honest.',['Is accurate, organized, and transparent.','Follows processes and never takes shortcuts with money or records.','Keeps private information private.','Responds quickly and kindly to other ministries.','Trains the team and admits and corrects mistakes openly.']],
couples:['In the Couples Ministry, a leader is a faithful example and a safe guide. A leader shows what a Christ-centered marriage looks like, and points couples to Jesus and to help.',['Is committed to his or her own marriage and open about growing in it.','Listens without judging and keeps every confidence.','Does not take the place of the pastor or a counselor and refers when needed.','Prays with and for the couples.','Treats single, married, and hurting people with respect.']],
deacon:['In the Deacon Ministry, a leader is a servant of the church with proven character. A leader meets needs, supports the pastor, and keeps peace.',['Lives with integrity at home, at work, and in the church.','Serves quietly and gladly, in small tasks as well as large.','Handles money, needs, and confidences with care.','Supports the pastor’s direction and speaks well of the church.','Notices and cares for the sick, the grieving, and the overlooked.']],
cined:['In the Christian Education Ministry, a leader is a teacher of teachers. A leader helps every class stay faithful to the Bible and grow in understanding.',['Studies the Word and models a teachable heart.','Prepares well, begins on time, and helps others prepare.','Welcomes questions and answers from Scripture.','Knows students and teachers by name and follows up.','Keeps classes safe, orderly, and welcoming.']],
outreach:['In the Outreach Ministry, a leader is a bridge between the church and the neighborhood. A leader helps the team love, listen, and invite, and follows through.',['Is warm, humble, and respectful with everyone.','Plans well, keeps the team safe, and follows the safety plan.','Listens before speaking and never pressures people.','Follows up faithfully and keeps careful records.','Partners with other groups as the pastor directs.']]
};

/* The opening of the Servanthood section, the same in every manual */
const SERV_INTRO=['When Jesus talked about servanthood, he was not describing a task or a title. He was describing a way of life. He said that he came not to be served but to serve and to give his life for many. Then he showed his disciples what he meant by kneeling and washing their feet. For Jesus, servanthood means putting the needs of others ahead of our own comfort, using our gifts to help people, and doing it with humility and love, not for praise.','Jesus wants every disciple and every leader in his church to serve this way. He does not ask us to rule over people but to lift them up. He calls leaders to go first, to carry the towel, and to serve with the joy of someone who belongs to him. The sections below connect what Jesus said with how we live and serve, so that each student can understand it and apply it, both in spirit and in practice.'];
/* KJV (public domain) text for scripture references used in the manuals */
const BIBLE={"Matthew 6:6":"But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly.","Isaiah 58:6":"Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke?","John 3:1-8":"There was a man of the Pharisees, named Nicodemus, a ruler of the Jews: The same came to Jesus by night, and said unto him, Rabbi, we know that thou art a teacher come from God: for no man can do these miracles that thou doest, except God be with him. Jesus answered and said unto him, Verily, verily, I say unto thee, Except a man be born again, he cannot see the kingdom of God. Nicodemus saith unto him, How can a man be born when he is old? can he enter the second time into his mother’s womb, and be born? Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God. That which is born of the flesh is flesh; and that which is born of the Spirit is spirit. Marvel not that I said unto thee, Ye must be born again. The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit.","2 Corinthians 5:17":"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.","Colossians 1:13-14":"Who hath delivered us from the power of darkness, and hath translated us into the kingdom of his dear Son: In whom we have redemption through his blood, even the forgiveness of sins:","Ephesians 1:3-14":"Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ: According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will, To the praise of the glory of his grace, wherein he hath made us accepted in the beloved. In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace; Wherein he hath abounded toward us in all wisdom and prudence; Having made known unto us the mystery of his will, according to his good pleasure which he hath purposed in himself: That in the dispensation of the fulness of times he might gather together in one all things in Christ, both which are in heaven, and which are on earth; even in him: In whom also we have obtained an inheritance, being predestinated according to the purpose of him who worketh all things after the counsel of his own will: That we should be to the praise of his glory, who first trusted in Christ. In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise, Which is the earnest of our inheritance until the redemption of the purchased possession, unto the praise of his glory.","1 John 3:1-3":"Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not. Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is. And every man that hath this hope in him purifieth himself, even as he is pure.","Romans 8:14-17":"For as many as are led by the Spirit of God, they are the sons of God. For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father. The Spirit itself beareth witness with our spirit, that we are the children of God: And if children, then heirs; heirs of God, and joint-heirs with Christ; if so be that we suffer with him, that we may be also glorified together.","John 10:27-30":"My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand. My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father’s hand. I and my Father are one.","Romans 8:31-39":"What shall we then say to these things? If God be for us, who can be against us? He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things? Who shall lay any thing to the charge of God’s elect? It is God that justifieth. Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us. Who shall separate us from the love of Christ? shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword? As it is written, For thy sake we are killed all the day long; we are accounted as sheep for the slaughter. Nay, in all these things we are more than conquerors through him that loved us. For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.","1 John 1:9":"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.","Luke 11:1-13":"And it came to pass, that, as he was praying in a certain place, when he ceased, one of his disciples said unto him, Lord, teach us to pray, as John also taught his disciples. And he said unto them, When ye pray, say, Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done, as in heaven, so in earth. Give us day by day our daily bread. And forgive us our sins; for we also forgive every one that is indebted to us. And lead us not into temptation; but deliver us from evil. And he said unto them, Which of you shall have a friend, and shall go unto him at midnight, and say unto him, Friend, lend me three loaves; For a friend of mine in his journey is come to me, and I have nothing to set before him? And he from within shall answer and say, Trouble me not: the door is now shut, and my children are with me in bed; I cannot rise and give thee. I say unto you, Though he will not rise and give him, because he is his friend, yet because of his importunity he will rise and give him as many as he needeth. And I say unto you, Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you. For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened. If a son shall ask bread of any of you that is a father, will he give him a stone? or if he ask a fish, will he for a fish give him a serpent? Or if he shall ask an egg, will he offer him a scorpion? If ye then, being evil, know how to give good gifts unto your children: how much more shall your heavenly Father give the Holy Spirit to them that ask him?","1 Thessalonians 5:16-18":"Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.","Psalm 119:105":"Thy word is a lamp unto my feet, and a light unto my path.","2 Timothy 2:15":"Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.","1 Peter 2:2":"As newborn babes, desire the sincere milk of the word, that ye may grow thereby:","John 14:15-21":"If ye love me, keep my commandments. And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever; Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you. I will not leave you comfortless: I will come to you. Yet a little while, and the world seeth me no more; but ye see me: because I live, ye shall live also. At that day ye shall know that I am in my Father, and ye in me, and I in you. He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me shall be loved of my Father, and I will love him, and will manifest myself to him.","James 1:22-25":"But be ye doers of the word, and not hearers only, deceiving your own selves. For if any be a hearer of the word, and not a doer, he is like unto a man beholding his natural face in a glass: For he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was. But whoso looketh into the perfect law of liberty, and continueth therein, he being not a forgetful hearer, but a doer of the work, this man shall be blessed in his deed.","Luke 6:46-49":"And why call ye me, Lord, Lord, and do not the things which I say? Whosoever cometh to me, and heareth my sayings, and doeth them, I will shew you to whom he is like: He is like a man which built an house, and digged deep, and laid the foundation on a rock: and when the flood arose, the stream beat vehemently upon that house, and could not shake it: for it was founded upon a rock. But he that heareth, and doeth not, is like a man that without a foundation built an house upon the earth; against which the stream did beat vehemently, and immediately it fell; and the ruin of that house was great.","Matthew 4:1-11":"Then was Jesus led up of the Spirit into the wilderness to be tempted of the devil. And when he had fasted forty days and forty nights, he was afterward an hungred. And when the tempter came to him, he said, If thou be the Son of God, command that these stones be made bread. But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God. Then the devil taketh him up into the holy city, and setteth him on a pinnacle of the temple, And saith unto him, If thou be the Son of God, cast thyself down: for it is written, He shall give his angels charge concerning thee: and in their hands they shall bear thee up, lest at any time thou dash thy foot against a stone. Jesus said unto him, It is written again, Thou shalt not tempt the Lord thy God. Again, the devil taketh him up into an exceeding high mountain, and sheweth him all the kingdoms of the world, and the glory of them; And saith unto him, All these things will I give thee, if thou wilt fall down and worship me. Then saith Jesus unto him, Get thee hence, Satan: for it is written, Thou shalt worship the Lord thy God, and him only shalt thou serve. Then the devil leaveth him, and, behold, angels came and ministered unto him.","Ephesians 6:10-18":"Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places. Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand. Stand therefore, having your loins girt about with truth, and having on the breastplate of righteousness; And your feet shod with the preparation of the gospel of peace; Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked. And take the helmet of salvation, and the sword of the Spirit, which is the word of God: Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints;","James 4:7":"Submit yourselves therefore to God. Resist the devil, and he will flee from you.","Proverbs 24:16":"For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief.","Psalm 51:1-12":"Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions. Wash me throughly from mine iniquity, and cleanse me from my sin. For I acknowledge my transgressions: and my sin is ever before me. Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified when thou speakest, and be clear when thou judgest. Behold, I was shapen in iniquity; and in sin did my mother conceive me. Behold, thou desirest truth in the inward parts: and in the hidden part thou shalt make me to know wisdom. Purge me with hyssop, and I shall be clean: wash me, and I shall be whiter than snow. Make me to hear joy and gladness; that the bones which thou hast broken may rejoice. Hide thy face from my sins, and blot out all mine iniquities. Create in me a clean heart, O God; and renew a right spirit within me. Cast me not away from thy presence; and take not thy holy spirit from me. Restore unto me the joy of thy salvation; and uphold me with thy free spirit.","1 Corinthians 15:33":"Be not deceived: evil communications corrupt good manners.","Galatians 5:1":"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.","Romans 12:1-2":"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.","Hebrews 10:24-25":"And let us consider one another to provoke unto love and to good works: Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.","Acts 2:42-47":"And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers. And fear came upon every soul: and many wonders and signs were done by the apostles. And all that believed were together, and had all things common; And sold their possessions and goods, and parted them to all men, as every man had need. And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.","Ephesians 4:15-16":"But speaking the truth in love, may grow up into him in all things, which is the head, even Christ: From whom the whole body fitly joined together and compacted by that which every joint supplieth, according to the effectual working in the measure of every part, maketh increase of the body unto the edifying of itself in love.","Mark 5:19":"Howbeit Jesus suffered him not, but saith unto him, Go home to thy friends, and tell them how great things the Lord hath done for thee, and hath had compassion on thee.","John 1:40-46":"One of the two which heard John speak, and followed him, was Andrew, Simon Peter’s brother. He first findeth his own brother Simon, and saith unto him, We have found the Messias, which is, being interpreted, the Christ. And he brought him to Jesus. And when Jesus beheld him, he said, Thou art Simon the son of Jona: thou shalt be called Cephas, which is by interpretation, A stone. The day following Jesus would go forth into Galilee, and findeth Philip, and saith unto him, Follow me. Now Philip was of Bethsaida, the city of Andrew and Peter. Philip findeth Nathanael, and saith unto him, We have found him, of whom Moses in the law, and the prophets, did write, Jesus of Nazareth, the son of Joseph. And Nathanael said unto him, Can there any good thing come out of Nazareth? Philip saith unto him, Come and see.","1 Peter 3:15":"But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear:","Acts 2:38-41":"Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. For the promise is unto you, and to your children, and to all that are afar off, even as many as the Lord our God shall call. And with many other words did he testify and exhort, saying, Save yourselves from this untoward generation. Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls.","Matthew 28:19-20":"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.","1 Peter 4:10":"As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.","Ephesians 2:19-22":"Now therefore ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God; And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone; In whom all the building fitly framed together groweth unto an holy temple in the Lord: In whom ye also are builded together for an habitation of God through the Spirit.","1 Timothy 3:15":"But if I tarry long, that thou mayest know how thou oughtest to behave thyself in the house of God, which is the church of the living God, the pillar and ground of the truth.","Matthew 28:18-20":"And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.","Ephesians 4:11-13":"And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ: Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ:","Luke 19:10":"For the Son of man is come to seek and to save that which was lost.","Jeremiah 29:4-7":"Thus saith the Lord of hosts, the God of Israel, unto all that are carried away captives, whom I have caused to be carried away from Jerusalem unto Babylon; Build ye houses, and dwell in them; and plant gardens, and eat the fruit of them; Take ye wives, and beget sons and daughters; and take wives for your sons, and give your daughters to husbands, that they may bear sons and daughters; that ye may be increased there, and not diminished. And seek the peace of the city whither I have caused you to be carried away captives, and pray unto the Lord for it: for in the peace thereof shall ye have peace.","Matthew 5:13-16":"Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men. Ye are the light of the world. A city that is set on an hill cannot be hid. Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house. Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.","Acts 17:26-27":"And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation; That they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us:","Romans 3:23":"For all have sinned, and come short of the glory of God;","Romans 6:23":"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.","John 3:16":"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.","Ephesians 2:8-9":"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.","Acts 3:19":"Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord;","Romans 10:9-10":"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.","1 John 5:11-13":"And this is the record, that God hath given to us eternal life, and this life is in his Son. He that hath the Son hath life; and he that hath not the Son of God hath not life. These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life, and that ye may believe on the name of the Son of God.","Philippians 1:6":"Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:","Galatians 5:16-25":"This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh. For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other: so that ye cannot do the things that ye would. But if ye be led of the Spirit, ye are not under the law. Now the works of the flesh are manifest, which are these; Adultery, fornication, uncleanness, lasciviousness, Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies, Envyings, murders, drunkenness, revellings, and such like: of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God. But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law. And they that are Christ’s have crucified the flesh with the affections and lusts. If we live in the Spirit, let us also walk in the Spirit.","2 Timothy 3:16-17":"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.","Matthew 28:19":"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost:","John 1:1-14":"In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not. There was a man sent from God, whose name was John. The same came for a witness, to bear witness of the Light, that all men through him might believe. He was not that Light, but was sent to bear witness of that Light. That was the true Light, which lighteth every man that cometh into the world. He was in the world, and the world was made by him, and the world knew him not. He came unto his own, and his own received him not. But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name: Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God. And the Word was made flesh, and dwelt among us, ( and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.","Philippians 2:5-11":"Let this mind be in you, which was also in Christ Jesus: Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross. Wherefore God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.","Acts 1:9-11":"And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight. And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel; Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven.","1 Thessalonians 4:16-18":"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord. Wherefore comfort one another with these words.","John 14:15-26":"If ye love me, keep my commandments. And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever; Even the Spirit of truth; whom the world cannot receive, because it seeth him not, neither knoweth him: but ye know him; for he dwelleth with you, and shall be in you. I will not leave you comfortless: I will come to you. Yet a little while, and the world seeth me no more; but ye see me: because I live, ye shall live also. At that day ye shall know that I am in my Father, and ye in me, and I in you. He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me shall be loved of my Father, and I will love him, and will manifest myself to him. Judas saith unto him, not Iscariot, Lord, how is it that thou wilt manifest thyself unto us, and not unto the world? Jesus answered and said unto him, If a man love me, he will keep my words: and my Father will love him, and we will come unto him, and make our abode with him. He that loveth me not keepeth not my sayings: and the word which ye hear is not mine, but the Father’s which sent me. These things have I spoken unto you, being yet present with you. But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.","Acts 2:1-4":"And when the day of Pentecost was fully come, they were all with one accord in one place. And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting. And there appeared unto them cloven tongues like as of fire, and it sat upon each of them. And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.","1 Peter 1:14-16":"As obedient children, not fashioning yourselves according to the former lusts in your ignorance: But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy.","Matthew 6:5-13":"And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward. But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly. But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking. Be not ye therefore like unto them: for your Father knoweth what things ye have need of, before ye ask him. After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen.","Philippians 4:6-7":"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.","Luke 18:1-8":"And he spake a parable unto them to this end, that men ought always to pray, and not to faint; Saying, There was in a city a judge, which feared not God, neither regarded man: And there was a widow in that city; and she came unto him, saying, Avenge me of mine adversary. And he would not for a while: but afterward he said within himself, Though I fear not God, nor regard man; Yet because this widow troubleth me, I will avenge her, lest by her continual coming she weary me. And the Lord said, Hear what the unjust judge saith. And shall not God avenge his own elect, which cry day and night unto him, though he bear long with them? I tell you that he will avenge them speedily. Nevertheless when the Son of man cometh, shall he find faith on the earth?","Psalm 119:9-16":"Wherewithal shall a young man cleanse his way? by taking heed thereto according to thy word. With my whole heart have I sought thee: O let me not wander from thy commandments. Thy word have I hid in mine heart, that I might not sin against thee. Blessed art thou, O Lord: teach me thy statutes. With my lips have I declared all the judgments of thy mouth. I have rejoiced in the way of thy testimonies, as much as in all riches. I will meditate in thy precepts, and have respect unto thy ways. I will delight myself in thy statutes: I will not forget thy word.","Joshua 1:8":"This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.","Acts 17:11":"These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.","Psalm 100":"Make a joyful noise unto the Lord, all ye lands. Serve the Lord with gladness: come before his presence with singing. Know ye that the Lord he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture. Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name. For the Lord is good; his mercy is everlasting; and his truth endureth to all generations.","Acts 2:42":"And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.","Romans 12:4-5":"For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ, and every one members one of another.","Hebrews 13:17":"Obey them that have the rule over you, and submit yourselves: for they watch for your souls, as they that must give account, that they may do it with joy, and not with grief: for that is unprofitable for you.","Malachi 3:10":"Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.","2 Corinthians 9:6-8":"But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully. Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver. And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work:","Luke 16:10-12":"He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much. If therefore ye have not been faithful in the unrighteous mammon, who will commit to your trust the true riches? And if ye have not been faithful in that which is another man’s, who shall give you that which is your own?","1 Peter 4:10-11":"As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God. If any man speak, let him speak as the oracles of God; if any man minister, let him do it as of the ability which God giveth: that God in all things may be glorified through Jesus Christ, to whom be praise and dominion for ever and ever. Amen.","Romans 12:6-8":"Having then gifts differing according to the grace that is given to us, whether prophecy, let us prophesy according to the proportion of faith; Or ministry, let us wait on our ministering: or he that teacheth, on teaching; Or he that exhorteth, on exhortation: he that giveth, let him do it with simplicity; he that ruleth, with diligence; he that sheweth mercy, with cheerfulness.","Galatians 6:9-10":"And let us not be weary in well doing: for in due season we shall reap, if we faint not. As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith.","Matthew 3:13-17":"Then cometh Jesus from Galilee to Jordan unto John, to be baptized of him. But John forbad him, saying, I have need to be baptized of thee, and comest thou to me? And Jesus answering said unto him, Suffer it to be so now: for thus it becometh us to fulfil all righteousness. Then he suffered him. And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him: And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.","Mark 16:15-16":"And he said unto them, Go ye into all the world, and preach the gospel to every creature. He that believeth and is baptized shall be saved; but he that believeth not shall be damned.","Romans 6:3-11":"Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life. For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection: Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin. For he that is dead is freed from sin. Now if we be dead with Christ, we believe that we shall also live with him: Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him. For in that he died, he died unto sin once: but in that he liveth, he liveth unto God. Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord.","Colossians 2:12":"Buried with him in baptism, wherein also ye are risen with him through the faith of the operation of God, who hath raised him from the dead.","1 Corinthians 15:3-4":"For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures:","Acts 2:37-41":"Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do? Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. For the promise is unto you, and to your children, and to all that are afar off, even as many as the Lord our God shall call. And with many other words did he testify and exhort, saying, Save yourselves from this untoward generation. Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls.","Acts 8:34-39":"And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man? Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus. And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized? And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God. And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him. And when they were come up out of the water, the Spirit of the Lord caught away Philip, that the eunuch saw him no more: and he went on his way rejoicing.","Acts 16:30-34":"And brought them out, and said, Sirs, what must I do to be saved? And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house. And they spake unto him the word of the Lord, and to all that were in his house. And he took them the same hour of the night, and washed their stripes; and was baptized, he and all his, straightway. And when he had brought them into his house, he set meat before them, and rejoiced, believing in God with all his house.","Acts 8:36-37":"And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized? And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God.","Acts 10:44-48":"While Peter yet spake these words, the Holy Ghost fell on all them which heard the word. And they of the circumcision which believed were astonished, as many as came with Peter, because that on the Gentiles also was poured out the gift of the Holy Ghost. For they heard them speak with tongues, and magnify God. Then answered Peter, Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we? And he commanded them to be baptized in the name of the Lord. Then prayed they him to tarry certain days.","Mark 16:16":"He that believeth and is baptized shall be saved; but he that believeth not shall be damned.","Acts 2:38":"Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.","1 Peter 3:21":"The like figure whereunto even baptism doth also now save us ( not the putting away of the filth of the flesh, but the answer of a good conscience toward God,) by the resurrection of Jesus Christ:","Luke 23:39-43":"And one of the malefactors which were hanged railed on him, saying, If thou be Christ, save thyself and us. But the other answering rebuked him, saying, Dost not thou fear God, seeing thou art in the same condemnation? And we indeed justly; for we receive the due reward of our deeds: but this man hath done nothing amiss. And he said unto Jesus, Lord, remember me when thou comest into thy kingdom. And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.","Romans 6:12-14":"Let not sin therefore reign in your mortal body, that ye should obey it in the lusts thereof. Neither yield ye your members as instruments of unrighteousness unto sin: but yield yourselves unto God, as those that are alive from the dead, and your members as instruments of righteousness unto God. For sin shall not have dominion over you: for ye are not under the law, but under grace.","Galatians 3:26-27":"For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.","Psalm 66:16":"Come and hear, all ye that fear God, and I will declare what he hath done for my soul.","Mark 5:18-20":"And when he was come into the ship, he that had been possessed with the devil prayed him that he might be with him. Howbeit Jesus suffered him not, but saith unto him, Go home to thy friends, and tell them how great things the Lord hath done for thee, and hath had compassion on thee. And he departed, and began to publish in Decapolis how great things Jesus had done for him: and all men did marvel.","Acts 26:1-23":"Then Agrippa said unto Paul, Thou art permitted to speak for thyself. Then Paul stretched forth the hand, and answered for himself: I think myself happy, king Agrippa, because I shall answer for myself this day before thee touching all the things whereof I am accused of the Jews: Especially because I know thee to be expert in all customs and questions which are among the Jews: wherefore I beseech thee to hear me patiently. My manner of life from my youth, which was at the first among mine own nation at Jerusalem, know all the Jews; Which knew me from the beginning, if they would testify, that after the most straitest sect of our religion I lived a Pharisee. And now I stand and am judged for the hope of the promise made of God unto our fathers: Unto which promise our twelve tribes, instantly serving God day and night, hope to come. For which hope’s sake, king Agrippa, I am accused of the Jews. Why should it be thought a thing incredible with you, that God should raise the dead? I verily thought with myself, that I ought to do many things contrary to the name of Jesus of Nazareth. Which thing I also did in Jerusalem: and many of the saints did I shut up in prison, having received authority from the chief priests; and when they were put to death, I gave my voice against them. And I punished them oft in every synagogue, and compelled them to blaspheme; and being exceedingly mad against them, I persecuted them even unto strange cities. Whereupon as I went to Damascus with authority and commission from the chief priests, At midday, O king, I saw in the way a light from heaven, above the brightness of the sun, shining round about me and them which journeyed with me. And when we were all fallen to the earth, I heard a voice speaking unto me, and saying in the Hebrew tongue, Saul, Saul, why persecutest thou me? it is hard for thee to kick against the pricks. And I said, Who art thou, Lord? And he said, I am Jesus whom thou persecutest. But rise, and stand upon thy feet: for I have appeared unto thee for this purpose, to make thee a minister and a witness both of these things which thou hast seen, and of those things in the which I will appear unto thee; Delivering thee from the people, and from the Gentiles, unto whom now I send thee, To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me. Whereupon, O king Agrippa, I was not disobedient unto the heavenly vision: But shewed first unto them of Damascus, and at Jerusalem, and throughout all the coasts of Judea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance. For these causes the Jews caught me in the temple, and went about to kill me. Having therefore obtained help of God, I continue unto this day, witnessing both to small and great, saying none other things than those which the prophets and Moses did say should come: That Christ should suffer, and that he should be the first that should rise from the dead, and should shew light unto the people, and to the Gentiles.","Acts 8:38":"And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him.","Romans 6:4":"Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.","Colossians 3:1-10":"If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth. For ye are dead, and your life is hid with Christ in God. When Christ, who is our life, shall appear, then shall ye also appear with him in glory. Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry: For which things’ sake the wrath of God cometh on the children of disobedience: In the which ye also walked some time, when ye lived in them. But now ye also put off all these; anger, wrath, malice, blasphemy, filthy communication out of your mouth. Lie not one to another, seeing that ye have put off the old man with his deeds; And have put on the new man, which is renewed in knowledge after the image of him that created him:","Galatians 3:27":"For as many of you as have been baptized into Christ have put on Christ.","Luke 9:23-25":"And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me. For whosoever will save his life shall lose it: but whosoever will lose his life for my sake, the same shall save it. For what is a man advantaged, if he gain the whole world, and lose himself, or be cast away?","Matthew 4:18-20":"And Jesus, walking by the sea of Galilee, saw two brethren, Simon called Peter, and Andrew his brother, casting a net into the sea: for they were fishers. And he saith unto them, Follow me, and I will make you fishers of men. And they straightway left their nets, and followed him.","John 8:31-32":"Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free.","John 15:1-11":"I am the true vine, and my Father is the husbandman. Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit. Now ye are clean through the word which I have spoken unto you. Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me. I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing. If a man abide not in me, he is cast forth as a branch, and is withered; and men gather them, and cast them into the fire, and they are burned. If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you. Herein is my Father glorified, that ye bear much fruit; so shall ye be my disciples. As the Father hath loved me, so have I loved you: continue ye in my love. If ye keep my commandments, ye shall abide in my love; even as I have kept my Father’s commandments, and abide in his love. These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.","Luke 18:1":"And he spake a parable unto them to this end, that men ought always to pray, and not to faint;","Proverbs 27:17":"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.","1 Corinthians 12:4-11":"Now there are diversities of gifts, but the same Spirit. And there are differences of administrations, but the same Lord. And there are diversities of operations, but it is the same God which worketh all in all. But the manifestation of the Spirit is given to every man to profit withal. For to one is given by the Spirit the word of wisdom; to another the word of knowledge by the same Spirit; To another faith by the same Spirit; to another the gifts of healing by the same Spirit; To another the working of miracles; to another prophecy; to another discerning of spirits; to another divers kinds of tongues; to another the interpretation of tongues: But all these worketh that one and the selfsame Spirit, dividing to every man severally as he will.","Romans 12:4-8":"For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ, and every one members one of another. Having then gifts differing according to the grace that is given to us, whether prophecy, let us prophesy according to the proportion of faith; Or ministry, let us wait on our ministering: or he that teacheth, on teaching; Or he that exhorteth, on exhortation: he that giveth, let him do it with simplicity; he that ruleth, with diligence; he that sheweth mercy, with cheerfulness.","Acts 1:8":"But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judea, and in Samaria, and unto the uttermost part of the earth.","John 14:15":"If ye love me, keep my commandments.","Galatians 6:9":"And let us not be weary in well doing: for in due season we shall reap, if we faint not.","2 Timothy 2:2":"And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also.","Colossians 1:28-29":"Whom we preach, warning every man, and teaching every man in all wisdom; that we may present every man perfect in Christ Jesus: Whereunto I also labour, striving according to his working, which worketh in me mightily.","1 Thessalonians 2:8":"So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own souls, because ye were dear unto us.","Mark 10:42-45":"But Jesus called them to him, and saith unto them, Ye know that they which are accounted to rule over the Gentiles exercise lordship over them; and their great ones exercise authority upon them. But so shall it not be among you: but whosoever will be great among you, shall be your minister: And whosoever of you will be the chiefest, shall be servant of all. For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.","1 Peter 5:1-4":"The elders which are among you I exhort, who am also an elder, and a witness of the sufferings of Christ, and also a partaker of the glory that shall be revealed: Feed the flock of God which is among you, taking the oversight thereof, not by constraint, but willingly; not for filthy lucre, but of a ready mind; Neither as being lords over God’s heritage, but being ensamples to the flock. And when the chief Shepherd shall appear, ye shall receive a crown of glory that fadeth not away.","Exodus 3:1-12":"Now Moses kept the flock of Jethro his father in law, the priest of Midian: and he led the flock to the backside of the desert, and came to the mountain of God, even to Horeb. And the angel of the Lord appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush was not consumed. And Moses said, I will now turn aside, and see this great sight, why the bush is not burnt. And when the Lord saw that he turned aside to see, God called unto him out of the midst of the bush, and said, Moses, Moses. And he said, Here am I. And he said, Draw not nigh hither: put off thy shoes from off thy feet, for the place whereon thou standest is holy ground. Moreover he said, I am the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob. And Moses hid his face; for he was afraid to look upon God. And the Lord said, I have surely seen the affliction of my people which are in Egypt, and have heard their cry by reason of their taskmasters; for I know their sorrows; And I am come down to deliver them out of the hand of the Egyptians, and to bring them up out of that land unto a good land and a large, unto a land flowing with milk and honey; unto the place of the Canaanites, and the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites. Now therefore, behold, the cry of the children of Israel is come unto me: and I have also seen the oppression wherewith the Egyptians oppress them. Come now therefore, and I will send thee unto Pharaoh, that thou mayest bring forth my people the children of Israel out of Egypt. And Moses said unto God, Who am I, that I should go unto Pharaoh, and that I should bring forth the children of Israel out of Egypt? And he said, Certainly I will be with thee; and this shall be a token unto thee, that I have sent thee: When thou hast brought forth the people out of Egypt, ye shall serve God upon this mountain.","1 Timothy 3:1-7":"This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach; Not given to wine, no striker, not greedy of filthy lucre; but patient, not a brawler, not covetous; One that ruleth well his own house, having his children in subjection with all gravity; ( For if a man know not how to rule his own house, how shall he take care of the church of God?) Not a novice, lest being lifted up with pride he fall into the condemnation of the devil. Moreover he must have a good report of them which are without; lest he fall into reproach and the snare of the devil.","Psalm 78:70-72":"He chose David also his servant, and took him from the sheepfolds: From following the ewes great with young he brought him to feed Jacob his people, and Israel his inheritance. So he fed them according to the integrity of his heart; and guided them by the skilfulness of his hands.","Daniel 6:3-5":"Then this Daniel was preferred above the presidents and princes, because an excellent spirit was in him; and the king thought to set him over the whole realm. Then the presidents and princes sought to find occasion against Daniel concerning the kingdom; but they could find none occasion nor fault; forasmuch as he was faithful, neither was there any error or fault found in him. Then said these men, We shall not find any occasion against this Daniel, except we find it against him concerning the law of his God.","John 13:1-17":"Now before the feast of the passover, when Jesus knew that his hour was come that he should depart out of this world unto the Father, having loved his own which were in the world, he loved them unto the end. And supper being ended, the devil having now put into the heart of Judas Iscariot, Simon’s son, to betray him; Jesus knowing that the Father had given all things into his hands, and that he was come from God, and went to God; He riseth from supper, and laid aside his garments; and took a towel, and girded himself. After that he poureth water into a bason, and began to wash the disciples’ feet, and to wipe them with the towel wherewith he was girded. Then cometh he to Simon Peter: and Peter saith unto him, Lord, dost thou wash my feet? Jesus answered and said unto him, What I do thou knowest not now; but thou shalt know hereafter. Peter saith unto him, Thou shalt never wash my feet. Jesus answered him, If I wash thee not, thou hast no part with me. Simon Peter saith unto him, Lord, not my feet only, but also my hands and my head. Jesus saith to him, He that is washed needeth not save to wash his feet, but is clean every whit: and ye are clean, but not all. For he knew who should betray him; therefore said he, Ye are not all clean. So after he had washed their feet, and had taken his garments, and was set down again, he said unto them, Know ye what I have done to you? Ye call me Master and Lord: and ye say well; for so I am. If I then, your Lord and Master, have washed your feet; ye also ought to wash one another’s feet. For I have given you an example, that ye should do as I have done to you. Verily, verily, I say unto you, The servant is not greater than his lord; neither he that is sent greater than he that sent him. If ye know these things, happy are ye if ye do them.","Philippians 2:3-8":"Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others. Let this mind be in you, which was also in Christ Jesus: Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.","Habakkuk 2:2-3":"And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it. For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.","Proverbs 29:18":"Where there is no vision, the people perish: but he that keepeth the law, happy is he.","Nehemiah 2:11-18":"So I came to Jerusalem, and was there three days. And I arose in the night, I and some few men with me; neither told I any man what my God had put in my heart to do at Jerusalem: neither was there any beast with me, save the beast that I rode upon. And I went out by night by the gate of the valley, even before the dragon well, and to the dung port, and viewed the walls of Jerusalem, which were broken down, and the gates thereof were consumed with fire. Then I went on to the gate of the fountain, and to the king’s pool: but there was no place for the beast that was under me to pass. Then went I up in the night by the brook, and viewed the wall, and turned back, and entered by the gate of the valley, and so returned. And the rulers knew not whither I went, or what I did; neither had I as yet told it to the Jews, nor to the priests, nor to the nobles, nor to the rulers, nor to the rest that did the work. Then said I unto them, Ye see the distress that we are in, how Jerusalem lieth waste, and the gates thereof are burned with fire: come, and let us build up the wall of Jerusalem, that we be no more a reproach. Then I told them of the hand of my God which was good upon me; as also the king’s words that he had spoken unto me. And they said, Let us rise up and build. So they strengthened their hands for this good work.","Mark 1:35-38":"And in the morning, rising up a great while before day, he went out, and departed into a solitary place, and there prayed. And Simon and they that were with him followed after him. And when they had found him, they said unto him, All men seek for thee. And he said unto them, Let us go into the next towns, that I may preach there also: for therefore came I forth.","Luke 5:15-16":"But so much the more went there a fame abroad of him: and great multitudes came together to hear, and to be healed by him of their infirmities. And he withdrew himself into the wilderness, and prayed.","Exodus 18:13-23":"And it came to pass on the morrow, that Moses sat to judge the people: and the people stood by Moses from the morning unto the evening. And when Moses’ father in law saw all that he did to the people, he said, What is this thing that thou doest to the people? why sittest thou thyself alone, and all the people stand by thee from morning unto even? And Moses said unto his father in law, Because the people come unto me to enquire of God: When they have a matter, they come unto me; and I judge between one and another, and I do make them know the statutes of God, and his laws. And Moses’ father in law said unto him, The thing that thou doest is not good. Thou wilt surely wear away, both thou, and this people that is with thee: for this thing is too heavy for thee; thou art not able to perform it thyself alone. Hearken now unto my voice, I will give thee counsel, and God shall be with thee: Be thou for the people to God-ward, that thou mayest bring the causes unto God: And thou shalt teach them ordinances and laws, and shalt shew them the way wherein they must walk, and the work that they must do. Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens: And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thyself, and they shall bear the burden with thee. If thou shalt do this thing, and God command thee so, then thou shalt be able to endure, and all this people shall also go to their place in peace.","James 1:19-20":"Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath: For the wrath of man worketh not the righteousness of God.","Proverbs 15:1":"A soft answer turneth away wrath: but grievous words stir up anger.","Proverbs 18:13":"He that answereth a matter before he heareth it, it is folly and shame unto him.","Acts 6:1-7":"And in those days, when the number of the disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows were neglected in the daily ministration. Then the twelve called the multitude of the disciples unto them, and said, It is not reason that we should leave the word of God, and serve tables. Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business. But we will give ourselves continually to prayer, and to the ministry of the word. And the saying pleased the whole multitude: and they chose Stephen, a man full of faith and of the Holy Ghost, and Philip, and Prochorus, and Nicanor, and Timon, and Parmenas, and Nicolas a proselyte of Antioch: Whom they set before the apostles: and when they had prayed, they laid their hands on them. And the word of God increased; and the number of the disciples multiplied in Jerusalem greatly; and a great company of the priests were obedient to the faith.","Exodus 18:21-23":"Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens: And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thyself, and they shall bear the burden with thee. If thou shalt do this thing, and God command thee so, then thou shalt be able to endure, and all this people shall also go to their place in peace.","Matthew 18:15-20":"Moreover if thy brother shall trespass against thee, go and tell him his fault between thee and him alone: if he shall hear thee, thou hast gained thy brother. But if he will not hear thee, then take with thee one or two more, that in the mouth of two or three witnesses every word may be established. And if he shall neglect to hear them, tell it unto the church: but if he neglect to hear the church, let him be unto thee as an heathen man and a publican. Verily I say unto you, Whatsoever ye shall bind on earth shall be bound in heaven: and whatsoever ye shall loose on earth shall be loosed in heaven. Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven. For where two or three are gathered together in my name, there am I in the midst of them.","Ephesians 4:29-32":"Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers. And grieve not the holy Spirit of God, whereby ye are sealed unto the day of redemption. Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice: And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ’s sake hath forgiven you.","Proverbs 27:6":"Faithful are the wounds of a friend; but the kisses of an enemy are deceitful.","Psalm 1:1-3":"Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful. But his delight is in the law of the Lord; and in his law doth he meditate day and night. And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.","Luke 11:1-4":"And it came to pass, that, as he was praying in a certain place, when he ceased, one of his disciples said unto him, Lord, teach us to pray, as John also taught his disciples. And he said unto them, When ye pray, say, Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done, as in heaven, so in earth. Give us day by day our daily bread. And forgive us our sins; for we also forgive every one that is indebted to us. And lead us not into temptation; but deliver us from evil.","Matthew 6:16-18":"Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward. But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.","Psalm 95:1-7":"O come, let us sing unto the Lord: let us make a joyful noise to the rock of our salvation. Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms. For the Lord is a great God, and a great King above all gods. In his hand are the deep places of the earth: the strength of the hills is his also. The sea is his, and he made it: and his hands formed the dry land. O come, let us worship and bow down: let us kneel before the Lord our maker. For he is our God; and we are the people of his pasture, and the sheep of his hand. To day if ye will hear his voice,","Nehemiah 8:1-8":"And all the people gathered themselves together as one man into the street that was before the water gate; and they spake unto Ezra the scribe to bring the book of the law of Moses, which the Lord had commanded to Israel. And Ezra the priest brought the law before the congregation both of men and women, and all that could hear with understanding, upon the first day of the seventh month. And he read therein before the street that was before the water gate from the morning until midday, before the men and the women, and those that could understand; and the ears of all the people were attentive unto the book of the law. And Ezra the scribe stood upon a pulpit of wood, which they had made for the purpose; and beside him stood Mattithiah, and Shema, and Anaiah, and Urijah, and Hilkiah, and Maaseiah, on his right hand; and on his left hand, Pedaiah, and Mishael, and Malchiah, and Hashum, and Hashbadana, Zechariah, and Meshullam. And Ezra opened the book in the sight of all the people; ( for he was above all the people;) and when he opened it, all the people stood up: And Ezra blessed the Lord, the great God. And all the people answered, Amen, Amen, with lifting up their hands: and they bowed their heads, and worshipped the Lord with their faces to the ground. Also Jeshua, and Bani, and Sherebiah, Jamin, Akkub, Shabbethai, Hodijah, Maaseiah, Kelita, Azariah, Jozabad, Hanan, Pelaiah, and the Levites, caused the people to understand the law: and the people stood in their place. So they read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading.","Luke 24:25-27":"Then he said unto them, O fools, and slow of heart to believe all that the prophets have spoken: Ought not Christ to have suffered these things, and to enter into his glory? And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.","Mark 3:13-15":"And he goeth up into a mountain, and calleth unto him whom he would: and they came unto him. And he ordained twelve, that they should be with him, and that he might send them forth to preach, And to have power to heal sicknesses, and to cast out devils:","John 1:35-39":"Again the next day after John stood, and two of his disciples; And looking upon Jesus as he walked, he saith, Behold the Lamb of God! And the two disciples heard him speak, and they followed Jesus. Then Jesus turned, and saw them following, and saith unto them, What seek ye? They said unto him, Rabbi, ( which is to say, being interpreted, Master,) where dwellest thou? He saith unto them, Come and see. They came and saw where he dwelt, and abode with him that day: for it was about the tenth hour.","Philippians 4:9":"Those things, which ye have both learned, and received, and heard, and seen in me, do: and the God of peace shall be with you.","Ephesians 5:15-17":"See then that ye walk circumspectly, not as fools, but as wise, Redeeming the time, because the days are evil. Wherefore be ye not unwise, but understanding what the will of the Lord is.","Psalm 90:12":"So teach us to number our days, that we may apply our hearts unto wisdom.","Luke 4:42-44":"And when it was day, he departed and went into a desert place: and the people sought him, and came unto him, and stayed him, that he should not depart from them. And he said unto them, I must preach the kingdom of God to other cities also: for therefore am I sent. And he preached in the synagogues of Galilee.","Mark 6:30-32":"And the apostles gathered themselves together unto Jesus, and told him all things, both what they had done, and what they had taught. And he said unto them, Come ye yourselves apart into a desert place, and rest a while: for there were many coming and going, and they had no leisure so much as to eat. And they departed into a desert place by ship privately.","Ezra 7:10":"For Ezra had prepared his heart to seek the law of the Lord, and to do it, and to teach in Israel statutes and judgments.","Colossians 4:2-4":"Continue in prayer, and watch in the same with thanksgiving; Withal praying also for us, that God would open unto us a door of utterance, to speak the mystery of Christ, for which I am also in bonds: That I may make it manifest, as I ought to speak.","1 Corinthians 2:1-5":"And I, brethren, when I came to you, came not with excellency of speech or of wisdom, declaring unto you the testimony of God. For I determined not to know any thing among you, save Jesus Christ, and him crucified. And I was with you in weakness, and in fear, and in much trembling. And my speech and my preaching was not with enticing words of man’s wisdom, but in demonstration of the Spirit and of power: That your faith should not stand in the wisdom of men, but in the power of God.","Nehemiah 8:8":"So they read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading.","Proverbs 15:22":"Without counsel purposes are disappointed: but in the multitude of counsellors they are established.","Acts 15:6-12":"And the apostles and elders came together for to consider of this matter. And when there had been much disputing, Peter rose up, and said unto them, Men and brethren, ye know how that a good while ago God made choice among us, that the Gentiles by my mouth should hear the word of the gospel, and believe. And God, which knoweth the hearts, bare them witness, giving them the Holy Ghost, even as he did unto us; And put no difference between us and them, purifying their hearts by faith. Now therefore why tempt ye God, to put a yoke upon the neck of the disciples, which neither our fathers nor we were able to bear? But we believe that through the grace of the Lord Jesus Christ we shall be saved, even as they. Then all the multitude kept silence, and gave audience to Barnabas and Paul, declaring what miracles and wonders God had wrought among the Gentiles by them.","Nehemiah 2:17-18":"Then said I unto them, Ye see the distress that we are in, how Jerusalem lieth waste, and the gates thereof are burned with fire: come, and let us build up the wall of Jerusalem, that we be no more a reproach. Then I told them of the hand of my God which was good upon me; as also the king’s words that he had spoken unto me. And they said, Let us rise up and build. So they strengthened their hands for this good work.","Luke 14:28-30":"For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it? Lest haply, after he hath laid the foundation, and is not able to finish it, all that behold it begin to mock him, Saying, This man began to build, and was not able to finish.","Ephesians 2:8-10":"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast. For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.","Acts 17:22-28":"Then Paul stood in the midst of Mars’ hill, and said, Ye men of Athens, I perceive that in all things ye are too superstitious. For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you. God that made the world and all things therein, seeing that he is Lord of heaven and earth, dwelleth not in temples made with hands; Neither is worshipped with men’s hands, as though he needed any thing, seeing he giveth to all life, and breath, and all things; And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation; That they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us: For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.","1 Corinthians 9:19-23":"For though I be free from all men, yet have I made myself servant unto all, that I might gain the more. And unto the Jews I became as a Jew, that I might gain the Jews; to them that are under the law, as under the law, that I might gain them that are under the law; To them that are without law, as without law, ( being not without law to God, but under the law to Christ,) that I might gain them that are without law. To the weak became I as weak, that I might gain the weak: I am made all things to all men, that I might by all means save some. And this I do for the gospel’s sake, that I might be partaker thereof with you.","Galatians 3:26-28":"For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ. There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.","Revelation 7:9-10":"After this I beheld, and, lo, a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb, clothed with white robes, and palms in their hands; And cried with a loud voice, saying, Salvation to our God which sitteth upon the throne, and unto the Lamb.","Luke 7:1-10":"Now when he had ended all his sayings in the audience of the people, he entered into Capernaum. And a certain centurion’s servant, who was dear unto him, was sick, and ready to die. And when he heard of Jesus, he sent unto him the elders of the Jews, beseeching him that he would come and heal his servant. And when they came to Jesus, they besought him instantly, saying, That he was worthy for whom he should do this: For he loveth our nation, and he hath built us a synagogue. Then Jesus went with them. And when he was now not far from the house, the centurion sent friends to him, saying unto him, Lord, trouble not thyself: for I am not worthy that thou shouldest enter under my roof: Wherefore neither thought I myself worthy to come unto thee: but say in a word, and my servant shall be healed. For I also am a man set under authority, having under me soldiers, and I say unto one, Go, and he goeth; and to another, Come, and he cometh; and to my servant, Do this, and he doeth it. When Jesus heard these things, he marvelled at him, and turned him about, and said unto the people that followed him, I say unto you, I have not found so great faith, no, not in Israel. And they that were sent, returning to the house, found the servant whole that had been sick.","Proverbs 20:5":"Counsel in the heart of man is like deep water; but a man of understanding will draw it out.","Ephesians 4:11-16":"And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ: Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ: That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine, by the sleight of men, and cunning craftiness, whereby they lie in wait to deceive; But speaking the truth in love, may grow up into him in all things, which is the head, even Christ: From whom the whole body fitly joined together and compacted by that which every joint supplieth, according to the effectual working in the measure of every part, maketh increase of the body unto the edifying of itself in love.","Acts 20:28":"Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers, to feed the church of God, which he hath purchased with his own blood.","Luke 10:1-9":"After these things the Lord appointed other seventy also, and sent them two and two before his face into every city and place, whither he himself would come. Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest. Go your ways: behold, I send you forth as lambs among wolves. Carry neither purse, nor scrip, nor shoes: and salute no man by the way. And into whatsoever house ye enter, first say, Peace be to this house. And if the son of peace be there, your peace shall rest upon it: if not, it shall turn to you again. And in the same house remain, eating and drinking such things as they give: for the labourer is worthy of his hire. Go not from house to house. And into whatsoever city ye enter, and they receive you, eat such things as are set before you: And heal the sick that are therein, and say unto them, The kingdom of God is come nigh unto you.","Exodus 18:21":"Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens:","Proverbs 21:5":"The thoughts of the diligent tend only to plenteousness; but of every one that is hasty only to want.","1 Corinthians 14:40":"Let all things be done decently and in order.","John 10:11-15":"I am the good shepherd: the good shepherd giveth his life for the sheep. But he that is an hireling, and not the shepherd, whose own the sheep are not, seeth the wolf coming, and leaveth the sheep, and fleeth: and the wolf catcheth them, and scattereth the sheep. The hireling fleeth, because he is an hireling, and careth not for the sheep. I am the good shepherd, and know my sheep, and am known of mine. As the Father knoweth me, even so know I the Father: and I lay down my life for the sheep.","Proverbs 27:23":"Be thou diligent to know the state of thy flocks, and look well to thy herds.","Luke 15:4-7":"What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine in the wilderness, and go after that which is lost, until he find it? And when he hath found it, he layeth it on his shoulders, rejoicing. And when he cometh home, he calleth together his friends and neighbours, saying unto them, Rejoice with me; for I have found my sheep which was lost. I say unto you, that likewise joy shall be in heaven over one sinner that repenteth, more than over ninety and nine just persons, which need no repentance.","Romans 12:15":"Rejoice with them that do rejoice, and weep with them that weep.","James 5:13-16":"Is any among you afflicted? let him pray. Is any merry? let him sing psalms. Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him. Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.","2 Corinthians 1:3-4":"Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.","Proverbs 11:14":"Where no counsel is, the people fall: but in the multitude of counsellors there is safety.","Deuteronomy 6:6-7":"And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up.","Luke 24:13-32":"And, behold, two of them went that same day to a village called Emmaus, which was from Jerusalem about threescore furlongs. And they talked together of all these things which had happened. And it came to pass, that, while they communed together and reasoned, Jesus himself drew near, and went with them. But their eyes were holden that they should not know him. And he said unto them, What manner of communications are these that ye have one to another, as ye walk, and are sad? And the one of them, whose name was Cleopas, answering said unto him, Art thou only a stranger in Jerusalem, and hast not known the things which are come to pass there in these days? And he said unto them, What things? And they said unto him, Concerning Jesus of Nazareth, which was a prophet mighty in deed and word before God and all the people: And how the chief priests and our rulers delivered him to be condemned to death, and have crucified him. But we trusted that it had been he which should have redeemed Israel: and beside all this, to day is the third day since these things were done. Yea, and certain women also of our company made us astonished, which were early at the sepulchre; And when they found not his body, they came, saying, that they had also seen a vision of angels, which said that he was alive. And certain of them which were with us went to the sepulchre, and found it even so as the women had said: but him they saw not. Then he said unto them, O fools, and slow of heart to believe all that the prophets have spoken: Ought not Christ to have suffered these things, and to enter into his glory? And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself. And they drew nigh unto the village, whither they went: and he made as though he would have gone further. But they constrained him, saying, Abide with us: for it is toward evening, and the day is far spent. And he went in to tarry with them. And it came to pass, as he sat at meat with them, he took bread, and blessed it, and brake, and gave to them. And their eyes were opened, and they knew him; and he vanished out of their sight. And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?","Luke 6:12-13":"And it came to pass in those days, that he went out into a mountain to pray, and continued all night in prayer to God. And when it was day, he called unto him his disciples: and of them he chose twelve, whom also he named apostles;","Nehemiah 1:4-11":"And it came to pass, when I heard these words, that I sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven, And said, I beseech thee, O Lord God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments: Let thine ear now be attentive, and thine eyes open, that thou mayest hear the prayer of thy servant, which I pray before thee now, day and night, for the children of Israel thy servants, and confess the sins of the children of Israel, which we have sinned against thee: both I and my father’s house have sinned. We have dealt very corruptly against thee, and have not kept the commandments, nor the statutes, nor the judgments, which thou commandedst thy servant Moses. Remember, I beseech thee, the word that thou commandedst thy servant Moses, saying, If ye transgress, I will scatter you abroad among the nations: But if ye turn unto me, and keep my commandments, and do them; though there were of you cast out unto the uttermost part of the heaven, yet will I gather them from thence, and will bring them unto the place that I have chosen to set my name there. Now these are thy servants and thy people, whom thou hast redeemed by thy great power, and by thy strong hand. O Lord, I beseech thee, let now thine ear be attentive to the prayer of thy servant, and to the prayer of thy servants, who desire to fear thy name: and prosper, I pray thee, thy servant this day, and grant him mercy in the sight of this man. For I was the king’s cupbearer.","Colossians 4:2":"Continue in prayer, and watch in the same with thanksgiving;","Matthew 6:1-18":"Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven. Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward. But when thou doest alms, let not thy left hand know what thy right hand doeth: That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly. And when thou prayest, thou shalt not be as the hypocrites are: for they love to pray standing in the synagogues and in the corners of the streets, that they may be seen of men. Verily I say unto you, They have their reward. But thou, when thou prayest, enter into thy closet, and when thou hast shut thy door, pray to thy Father which is in secret; and thy Father which seeth in secret shall reward thee openly. But when ye pray, use not vain repetitions, as the heathen do: for they think that they shall be heard for their much speaking. Be not ye therefore like unto them: for your Father knoweth what things ye have need of, before ye ask him. After this manner therefore pray ye: Our Father which art in heaven, Hallowed be thy name. Thy kingdom come. Thy will be done in earth, as it is in heaven. Give us this day our daily bread. And forgive us our debts, as we forgive our debtors. And lead us not into temptation, but deliver us from evil: For thine is the kingdom, and the power, and the glory, for ever. Amen. For if ye forgive men their trespasses, your heavenly Father will also forgive you: But if ye forgive not men their trespasses, neither will your Father forgive your trespasses. Moreover when ye fast, be not, as the hypocrites, of a sad countenance: for they disfigure their faces, that they may appear unto men to fast. Verily I say unto you, They have their reward. But thou, when thou fastest, anoint thine head, and wash thy face; That thou appear not unto men to fast, but unto thy Father which is in secret: and thy Father, which seeth in secret, shall reward thee openly.","1 Timothy 4:7-8":"But refuse profane and old wives’ fables, and exercise thyself rather unto godliness. For bodily exercise profiteth little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come.","1 Thessalonians 2:7-8":"But we were gentle among you, even as a nurse cherisheth her children: So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own souls, because ye were dear unto us.","Exodus 18:17-23":"And Moses’ father in law said unto him, The thing that thou doest is not good. Thou wilt surely wear away, both thou, and this people that is with thee: for this thing is too heavy for thee; thou art not able to perform it thyself alone. Hearken now unto my voice, I will give thee counsel, and God shall be with thee: Be thou for the people to God-ward, that thou mayest bring the causes unto God: And thou shalt teach them ordinances and laws, and shalt shew them the way wherein they must walk, and the work that they must do. Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens: And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thyself, and they shall bear the burden with thee. If thou shalt do this thing, and God command thee so, then thou shalt be able to endure, and all this people shall also go to their place in peace.","Acts 18:24-26":"And a certain Jew named Apollos, born at Alexandria, an eloquent man, and mighty in the scriptures, came to Ephesus. This man was instructed in the way of the Lord; and being fervent in the spirit, he spake and taught diligently the things of the Lord, knowing only the baptism of John. And he began to speak boldly in the synagogue: whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly.","Ephesians 4:15":"But speaking the truth in love, may grow up into him in all things, which is the head, even Christ:","Galatians 6:1-2":"Brethren, if a man be overtaken in a fault, ye which are spiritual, restore such an one in the spirit of meekness; considering thyself, lest thou also be tempted. Bear ye one another’s burdens, and so fulfil the law of Christ.","John 21:15-19":"So when they had dined, Jesus saith to Simon Peter, Simon, son of Jonas, lovest thou me more than these? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my lambs. He saith to him again the second time, Simon, son of Jonas, lovest thou me? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my sheep. He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep. Verily, verily, I say unto thee, When thou wast young, thou girdedst thyself, and walkedst whither thou wouldest: but when thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not. This spake he, signifying by what death he should glorify God. And when he had spoken this, he saith unto him, Follow me.","Psalm 51:10-13":"Create in me a clean heart, O God; and renew a right spirit within me. Cast me not away from thy presence; and take not thy holy spirit from me. Restore unto me the joy of thy salvation; and uphold me with thy free spirit. Then will I teach transgressors thy ways; and sinners shall be converted unto thee.","2 Corinthians 2:6-8":"Sufficient to such a man is this punishment, which was inflicted of many. So that contrariwise ye ought rather to forgive him, and comfort him, lest perhaps such a one should be swallowed up with overmuch sorrow. Wherefore I beseech you that ye would confirm your love toward him.","John 4:23-24":"But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him. God is a Spirit: and they that worship him must worship him in spirit and in truth.","Hebrews 13:15":"By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.","Romans 10:14-15":"How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher? And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!","Acts 8:26-35":"And the angel of the Lord spake unto Philip, saying, Arise, and go toward the south unto the way that goeth down from Jerusalem unto Gaza, which is desert. And he arose and went: and, behold, a man of Ethiopia, an eunuch of great authority under Candace queen of the Ethiopians, who had the charge of all her treasure, and had come to Jerusalem for to worship, Was returning, and sitting in his chariot read Esaias the prophet. Then the Spirit said unto Philip, Go near, and join thyself to this chariot. And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest? And he said, How can I, except some man should guide me? And he desired Philip that he would come up and sit with him. The place of the scripture which he read was this, He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth: In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth. And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man? Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.","Luke 14:12-14":"Then said he also to him that bade him, When thou makest a dinner or a supper, call not thy friends, nor thy brethren, neither thy kinsmen, nor thy rich neighbours; lest they also bid thee again, and a recompence be made thee. But when thou makest a feast, call the poor, the maimed, the lame, the blind: And thou shalt be blessed; for they cannot recompense thee: for thou shalt be recompensed at the resurrection of the just.","Romans 15:7":"Wherefore receive ye one another, as Christ also received us to the glory of God.","Philippians 2:1-4":"If there be therefore any consolation in Christ, if any comfort of love, if any fellowship of the Spirit, if any bowels and mercies, Fulfil ye my joy, that ye be likeminded, having the same love, being of one accord, of one mind. Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others.","Romans 12:9-13":"Let love be without dissimulation. Abhor that which is evil; cleave to that which is good. Be kindly affectioned one to another with brotherly love; in honour preferring one another; Not slothful in business; fervent in spirit; serving the Lord; Rejoicing in hope; patient in tribulation; continuing instant in prayer; Distributing to the necessity of saints; given to hospitality.","1 John 4:1-3":"Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world. Hereby know ye the Spirit of God: Every spirit that confesseth that Jesus Christ is come in the flesh is of God: And every spirit that confesseth not that Jesus Christ is come in the flesh is not of God: and this is that spirit of antichrist, whereof ye have heard that it should come; and even now already is it in the world.","Acts 20:28-31":"Take heed therefore unto yourselves, and to all the flock, over the which the Holy Ghost hath made you overseers, to feed the church of God, which he hath purchased with his own blood. For I know this, that after my departing shall grievous wolves enter in among you, not sparing the flock. Also of your own selves shall men arise, speaking perverse things, to draw away disciples after them. Therefore watch, and remember, that by the space of three years I ceased not to warn every one night and day with tears.","Hebrews 5:14":"But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.","James 4:7-8":"Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.","2 Corinthians 10:3-5":"For though we walk in the flesh, we do not war after the flesh: ( For the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds;) Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ;","Proverbs 22:3":"A prudent man foreseeth the evil, and hideth himself: but the simple pass on, and are punished.","Matthew 18:6":"But whoso shall offend one of these little ones which believe in me, it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea.","Psalm 82:3-4":"Defend the poor and fatherless: do justice to the afflicted and needy. Deliver the poor and needy: rid them out of the hand of the wicked.","Romans 8:14":"For as many as are led by the Spirit of God, they are the sons of God.","Acts 13:1-3":"Now there were in the church that was at Antioch certain prophets and teachers; as Barnabas, and Simeon that was called Niger, and Lucius of Cyrene, and Manaen, which had been brought up with Herod the tetrarch, and Saul. As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them. And when they had fasted and prayed, and laid their hands on them, they sent them away.","1 Corinthians 14:1-5":"Follow after charity, and desire spiritual gifts, but rather that ye may prophesy. For he that speaketh in an unknown tongue speaketh not unto men, but unto God: for no man understandeth him; howbeit in the spirit he speaketh mysteries. But he that prophesieth speaketh unto men to edification, and exhortation, and comfort. He that speaketh in an unknown tongue edifieth himself; but he that prophesieth edifieth the church. I would that ye all spake with tongues, but rather that ye prophesied: for greater is he that prophesieth than he that speaketh with tongues, except he interpret, that the church may receive edifying.","2 Corinthians 7:1":"Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh and spirit, perfecting holiness in the fear of God.","Exodus 20:8-11":"Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it.","1 Kings 19:1-9":"And Ahab told Jezebel all that Elijah had done, and withal how he had slain all the prophets with the sword. Then Jezebel sent a messenger unto Elijah, saying, So let the gods do to me, and more also, if I make not thy life as the life of one of them by to morrow about this time. And when he saw that, he arose, and went for his life, and came to Beer–sheba, which belongeth to Judah, and left his servant there. But he himself went a day’s journey into the wilderness, and came and sat down under a juniper tree: and he requested for himself that he might die; and said, It is enough; now, O Lord, take away my life; for I am not better than my fathers. And as he lay and slept under a juniper tree, behold, then an angel touched him, and said unto him, Arise and eat. And he looked, and, behold, there was a cake baken on the coals, and a cruse of water at his head. And he did eat and drink, and laid him down again. And the angel of the Lord came again the second time, and touched him, and said, Arise and eat; because the journey is too great for thee. And he arose, and did eat and drink, and went in the strength of that meat forty days and forty nights unto Horeb the mount of God. And he came thither unto a cave, and lodged there; and, behold, the word of the Lord came to him, and he said unto him, What doest thou here, Elijah?","James 5:16":"Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.","Ecclesiastes 4:9-12":"Two are better than one; because they have a good reward for their labour. For if they fall, the one will lift up his fellow: but woe to him that is alone when he falleth; for he hath not another to help him up. Again, if two lie together, then they have heat: but how can one be warm alone? And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.","Isaiah 40:28-31":"Hast thou not known? hast thou not heard, that the everlasting God, the Lord, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding. He giveth power to the faint; and to them that have no might he increaseth strength. Even the youths shall faint and be weary, and the young men shall utterly fall: But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.","2 Timothy 4:6-8":"For I am now ready to be offered, and the time of my departure is at hand. I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing.","Luke 2:52":"And Jesus increased in wisdom and stature, and in favour with God and man.","Psalm 78:5-7":"For he established a testimony in Jacob, and appointed a law in Israel, which he commanded our fathers, that they should make them known to their children: That the generation to come might know them, even the children which should be born; who should arise and declare them to their children: That they might set their hope in God, and not forget the works of God, but keep his commandments:","Titus 1:5":"For this cause left I thee in Crete, that thou shouldest set in order the things that are wanting, and ordain elders in every city, as I had appointed thee:","Acts 15:36-41":"And some days after Paul said unto Barnabas, Let us go again and visit our brethren in every city where we have preached the word of the Lord, and see how they do. And Barnabas determined to take with them John, whose surname was Mark. But Paul thought not good to take him with them, who departed from them from Pamphylia, and went not with them to the work. And the contention was so sharp between them, that they departed asunder one from the other: and so Barnabas took Mark, and sailed unto Cyprus; And Paul chose Silas, and departed, being recommended by the brethren unto the grace of God. And he went through Syria and Cilicia, confirming the churches.","Deuteronomy 6:6-9":"And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up. And thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes. And thou shalt write them upon the posts of thy house, and on thy gates.","Psalm 82:3":"Defend the poor and fatherless: do justice to the afflicted and needy.","Acts 16:1-3":"Then came he to Derbe and Lystra: and, behold, a certain disciple was there, named Timotheus, the son of a certain woman, which was a Jewess, and believed; but his father was a Greek: Which was well reported of by the brethren that were at Lystra and Iconium. Him would Paul have to go forth with him; and took and circumcised him because of the Jews which were in those quarters: for they knew all that his father was a Greek.","Numbers 27:15-23":"And Moses spake unto the Lord, saying, Let the Lord, the God of the spirits of all flesh, set a man over the congregation, Which may go out before them, and which may go in before them, and which may lead them out, and which may bring them in; that the congregation of the Lord be not as sheep which have no shepherd. And the Lord said unto Moses, Take thee Joshua the son of Nun, a man in whom is the spirit, and lay thine hand upon him; And set him before Eleazar the priest, and before all the congregation; and give him a charge in their sight. And thou shalt put some of thine honour upon him, that all the congregation of the children of Israel may be obedient. And he shall stand before Eleazar the priest, who shall ask counsel for him after the judgment of Urim before the Lord: at his word shall they go out, and at his word they shall come in, both he, and all the children of Israel with him, even all the congregation. And Moses did as the Lord commanded him: and he took Joshua, and set him before Eleazar the priest, and before all the congregation: And he laid his hands upon him, and gave him a charge, as the Lord commanded by the hand of Moses.","Deuteronomy 31:7-8":"And Moses called unto Joshua, and said unto him in the sight of all Israel, Be strong and of a good courage: for thou must go with this people unto the land which the Lord hath sworn unto their fathers to give them; and thou shalt cause them to inherit it. And the Lord, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.","Mark 10:14":"But when Jesus saw it, he was much displeased, and said unto them, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God.","James 3:1":"My brethren, be not many masters, knowing that we shall receive the greater condemnation.","Exodus 31:1-6":"And the Lord spake unto Moses, saying, See, I have called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah: And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship, To devise cunning works, to work in gold, and in silver, and in brass, And in cutting of stones, to set them, and in carving of timber, to work in all manner of workmanship. And I, behold, I have given with him Aholiab, the son of Ahisamach, of the tribe of Dan: and in the hearts of all that are wise hearted I have put wisdom, that they may make all that I have commanded thee;","Proverbs 14:15":"The simple believeth every word: but the prudent man looketh well to his going.","Psalm 78:4-7":"We will not hide them from their children, shewing to the generation to come the praises of the Lord, and his strength, and his wonderful works that he hath done. For he established a testimony in Jacob, and appointed a law in Israel, which he commanded our fathers, that they should make them known to their children: That the generation to come might know them, even the children which should be born; who should arise and declare them to their children: That they might set their hope in God, and not forget the works of God, but keep his commandments:","Ecclesiastes 3:1":"To every thing there is a season, and a time to every purpose under the heaven:","Proverbs 22:6":"Train up a child in the way he should go: and when he is old, he will not depart from it.","Ephesians 6:4":"And, ye fathers, provoke not your children to wrath: but bring them up in the nurture and admonition of the Lord.","Luke 6:40":"The disciple is not above his master: but every one that is perfect shall be as his master.","Nehemiah 4:14-23":"And I looked, and rose up, and said unto the nobles, and to the rulers, and to the rest of the people, Be not ye afraid of them: remember the Lord, which is great and terrible, and fight for your brethren, your sons, and your daughters, your wives, and your houses. And it came to pass, when our enemies heard that it was known unto us, and God had brought their counsel to nought, that we returned all of us to the wall, every one unto his work. And it came to pass from that time forth, that the half of my servants wrought in the work, and the other half of them held both the spears, the shields, and the bows, and the habergeons; and the rulers were behind all the house of Judah. They which builded on the wall, and they that bare burdens, with those that laded, every one with one of his hands wrought in the work, and with the other hand held a weapon. For the builders, every one had his sword girded by his side, and so builded. And he that sounded the trumpet was by me. And I said unto the nobles, and to the rulers, and to the rest of the people, The work is great and large, and we are separated upon the wall, one far from another. In what place therefore ye hear the sound of the trumpet, resort ye thither unto us: our God shall fight for us. So we laboured in the work: and half of them held the spears from the rising of the morning till the stars appeared. Likewise at the same time said I unto the people, Let every one with his servant lodge within Jerusalem, that in the night they may be a guard to us, and labour on the day. So neither I, nor my brethren, nor my servants, nor the men of the guard which followed me, none of us put off our clothes, saving that every one put them off for washing.","Proverbs 13:20":"He that walketh with wise men shall be wise: but a companion of fools shall be destroyed.","1 Kings 19:19-21":"So he departed thence, and found Elisha the son of Shaphat, who was plowing with twelve yoke of oxen before him, and he with the twelfth: and Elijah passed by him, and cast his mantle upon him. And he left the oxen, and ran after Elijah, and said, Let me, I pray thee, kiss my father and my mother, and then I will follow thee. And he said unto him, Go back again: for what have I done to thee? And he returned back from him, and took a yoke of oxen, and slew them, and boiled their flesh with the instruments of the oxen, and gave unto the people, and they did eat. Then he arose, and went after Elijah, and ministered unto him.","Hebrews 13:7":"Remember them which have the rule over you, who have spoken unto you the word of God: whose faith follow, considering the end of their conversation.","Ephesians 5:25-33":"Husbands, love your wives, even as Christ also loved the church, and gave himself for it; That he might sanctify and cleanse it with the washing of water by the word, That he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish. So ought men to love their wives as their own bodies. He that loveth his wife loveth himself. For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church: For we are members of his body, of his flesh, and of his bones. For this cause shall a man leave his father and mother, and shall be joined unto his wife, and they two shall be one flesh. This is a great mystery: but I speak concerning Christ and the church. Nevertheless let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband.","Micah 6:8":"He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?","James 1:27":"Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction, and to keep himself unspotted from the world.","Titus 2:3-5":"The aged women likewise, that they be in behaviour as becometh holiness, not false accusers, not given to much wine, teachers of good things; That they may teach the young women to be sober, to love their husbands, to love their children, To be discreet, chaste, keepers at home, good, obedient to their own husbands, that the word of God be not blasphemed.","Acts 16:13-15":"And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither. And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul. And when she was baptized, and her household, she besought us, saying, If ye have judged me to be faithful to the Lord, come into my house, and abide there. And she constrained us.","Proverbs 31:26":"She openeth her mouth with wisdom; and in her tongue is the law of kindness.","Exodus 15:20-21":"And Miriam the prophetess, the sister of Aaron, took a timbrel in her hand; and all the women went out after her with timbrels and with dances. And Miriam answered them, Sing ye to the Lord, for he hath triumphed gloriously; the horse and his rider hath he thrown into the sea.","Judges 4:4-9":"And Deborah, a prophetess, the wife of Lapidoth, she judged Israel at that time. And she dwelt under the palm tree of Deborah between Ramah and Beth–el in mount Ephraim: and the children of Israel came up to her for judgment. And she sent and called Barak the son of Abinoam out of Kedesh–naphtali, and said unto him, Hath not the Lord God of Israel commanded, saying, Go and draw toward mount Tabor, and take with thee ten thousand men of the children of Naphtali and of the children of Zebulun? And I will draw unto thee to the river Kishon Sisera, the captain of Jabin’s army, with his chariots and his multitude; and I will deliver him into thine hand. And Barak said unto her, If thou wilt go with me, then I will go: but if thou wilt not go with me, then I will not go. And she said, I will surely go with thee: notwithstanding the journey that thou takest shall not be for thine honour; for the Lord shall sell Sisera into the hand of a woman. And Deborah arose, and went with Barak to Kedesh.","Romans 16:12":"Salute Tryphena and Tryphosa, who labour in the Lord. Salute the beloved Persis, which laboured much in the Lord.","Galatians 6:2":"Bear ye one another’s burdens, and so fulfil the law of Christ.","Acts 6:1-3":"And in those days, when the number of the disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows were neglected in the daily ministration. Then the twelve called the multitude of the disciples unto them, and said, It is not reason that we should leave the word of God, and serve tables. Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business.","Nehemiah 8:1-3":"And all the people gathered themselves together as one man into the street that was before the water gate; and they spake unto Ezra the scribe to bring the book of the law of Moses, which the Lord had commanded to Israel. And Ezra the priest brought the law before the congregation both of men and women, and all that could hear with understanding, upon the first day of the seventh month. And he read therein before the street that was before the water gate from the morning until midday, before the men and the women, and those that could understand; and the ears of all the people were attentive unto the book of the law.","Acts 18:26":"And he began to speak boldly in the synagogue: whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly.","Jeremiah 29:7":"And seek the peace of the city whither I have caused you to be carried away captives, and pray unto the Lord for it: for in the peace thereof shall ye have peace.","Acts 2:41-47":"Then they that gladly received his word were baptized: and the same day there were added unto them about three thousand souls. And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers. And fear came upon every soul: and many wonders and signs were done by the apostles. And all that believed were together, and had all things common; And sold their possessions and goods, and parted them to all men, as every man had need. And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.","Nehemiah 3:1-12":"Then Eliashib the high priest rose up with his brethren the priests, and they builded the sheep gate; they sanctified it, and set up the doors of it; even unto the tower of Meah they sanctified it, unto the tower of Hananeel. And next unto him builded the men of Jericho. And next to them builded Zaccur the son of Imri. But the fish gate did the sons of Hassenaah build, who also laid the beams thereof, and set up the doors thereof, the locks thereof, and the bars thereof. And next unto them repaired Meremoth the son of Urijah, the son of Koz. And next unto them repaired Meshullam the son of Berechiah, the son of Meshezabeel. And next unto them repaired Zadok the son of Baana. And next unto them the Tekoites repaired; but their nobles put not their necks to the work of their Lord. Moreover the old gate repaired Jehoiada the son of Paseah, and Meshullam the son of Besodeiah; they laid the beams thereof, and set up the doors thereof, and the locks thereof, and the bars thereof. And next unto them repaired Melatiah the Gibeonite, and Jadon the Meronothite, the men of Gibeon, and of Mizpah, unto the throne of the governor on this side the river. Next unto him repaired Uzziel the son of Harhaiah, of the goldsmiths. Next unto him also repaired Hananiah the son of one of the apothecaries, and they fortified Jerusalem unto the broad wall. And next unto them repaired Rephaiah the son of Hur, the ruler of the half part of Jerusalem. And next unto them repaired Jedaiah the son of Harumaph, even over against his house. And next unto him repaired Hattush the son of Hashabniah. Malchijah the son of Harim, and Hashub the son of Pahath–moab, repaired the other piece, and the tower of the furnaces. And next unto him repaired Shallum the son of Halohesh, the ruler of the half part of Jerusalem, he and his daughters.","Luke 10:1-2":"After these things the Lord appointed other seventy also, and sent them two and two before his face into every city and place, whither he himself would come. Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest.","Proverbs 14:23":"In all labour there is profit: but the talk of the lips tendeth only to penury.","Matthew 24:14":"And this gospel of the kingdom shall be preached in all the world for a witness unto all nations; and then shall the end come.","3 John 5-8":"Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers; Which have borne witness of thy charity before the church: whom if thou bring forward on their journey after a godly sort, thou shalt do well: Because that for his name’s sake they went forth, taking nothing of the Gentiles. We therefore ought to receive such, that we might be fellowhelpers to the truth.","Philippians 4:15-17":"Now ye Philippians know also, that in the beginning of the gospel, when I departed from Macedonia, no church communicated with me as concerning giving and receiving, but ye only. For even in Thessalonica ye sent once and again unto my necessity. Not because I desire a gift: but I desire fruit that may abound to your account.","Habakkuk 2:2":"And the Lord answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it.","1 Corinthians 14:8-9":"For if the trumpet give an uncertain sound, who shall prepare himself to the battle? So likewise ye, except ye utter by the tongue words easy to be understood, how shall it be known what is spoken? for ye shall speak into the air.","Exodus 35:30-35":"And Moses said unto the children of Israel, See, the Lord hath called by name Bezaleel the son of Uri, the son of Hur, of the tribe of Judah; And he hath filled him with the spirit of God, in wisdom, in understanding, and in knowledge, and in all manner of workmanship; And to devise curious works, to work in gold, and in silver, and in brass, And in the cutting of stones, to set them, and in carving of wood, to make any manner of cunning work. And he hath put in his heart that he may teach, both he, and Aholiab, the son of Ahisamach, of the tribe of Dan. Them hath he filled with wisdom of heart, to work all manner of work, of the engraver, and of the cunning workman, and of the embroiderer, in blue, and in purple, in scarlet, and in fine linen, and of the weaver, even of them that do any work, and of those that devise cunning work.","Colossians 3:23":"And whatsoever ye do, do it heartily, as to the Lord, and not unto men;","Proverbs 22:1":"A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.","Matthew 7:12":"Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.","Luke 14:28":"For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?","Colossians 1:28":"Whom we preach, warning every man, and teaching every man in all wisdom; that we may present every man perfect in Christ Jesus:","Luke 24:27":"And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself.","1 Corinthians 3:6-9":"I have planted, Apollos watered; but God gave the increase. So then neither is he that planteth any thing, neither he that watereth; but God that giveth the increase. Now he that planteth and he that watereth are one: and every man shall receive his own reward according to his own labour. For we are labourers together with God: ye are God’s husbandry, ye are God’s building.","Hebrews 5:12-14":"For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat. For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil.","Psalm 149:3":"Let them praise his name in the dance: let them sing praises unto him with the timbrel and harp.","Psalm 150:4":"Praise him with the timbrel and dance: praise him with stringed instruments and organs.","2 Samuel 6:14-15":"And David danced before the Lord with all his might; and David was girded with a linen ephod. So David and all the house of Israel brought up the ark of the Lord with shouting, and with the sound of the trumpet.","Philippians 4:8":"Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.","Colossians 3:17":"And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.","Exodus 18:21-22":"Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens: And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thyself, and they shall bear the burden with thee.","1 Corinthians 12:18-20":"But now hath God set the members every one of them in the body, as it hath pleased him. And if they were all one member, where were the body? But now are they many members, yet but one body.","Romans 12:1":"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.","Hebrews 12:28":"Wherefore we receiving a kingdom which cannot be moved, let us have grace, whereby we may serve God acceptably with reverence and godly fear:","Romans 14:13":"Let us not therefore judge one another any more: but judge this rather, that no man put a stumblingblock or an occasion to fall in his brother’s way.","1 Corinthians 8:9":"But take heed lest by any means this liberty of yours become a stumblingblock to them that are weak.","1 Corinthians 10:31":"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.","Acts 6:1-6":"And in those days, when the number of the disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows were neglected in the daily ministration. Then the twelve called the multitude of the disciples unto them, and said, It is not reason that we should leave the word of God, and serve tables. Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business. But we will give ourselves continually to prayer, and to the ministry of the word. And the saying pleased the whole multitude: and they chose Stephen, a man full of faith and of the Holy Ghost, and Philip, and Prochorus, and Nicanor, and Timon, and Parmenas, and Nicolas a proselyte of Antioch: Whom they set before the apostles: and when they had prayed, they laid their hands on them.","1 Timothy 3:8-13":"Likewise must the deacons be grave, not doubletongued, not given to much wine, not greedy of filthy lucre; Holding the mystery of the faith in a pure conscience. And let these also first be proved; then let them use the office of a deacon, being found blameless. Even so must their wives be grave, not slanderers, sober, faithful in all things. Let the deacons be the husbands of one wife, ruling their children and their own houses well. For they that have used the office of a deacon well purchase to themselves a good degree, and great boldness in the faith which is in Christ Jesus.","Philippians 1:1":"Paul and Timotheus, the servants of Jesus Christ, to all the saints in Christ Jesus which are at Philippi, with the bishops and deacons:","Romans 12:13":"Distributing to the necessity of saints; given to hospitality.","Galatians 6:10":"As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith.","Proverbs 11:13":"A talebearer revealeth secrets: but he that is of a faithful spirit concealeth the matter.","Ephesians 4:3":"Endeavouring to keep the unity of the Spirit in the bond of peace.","2 Corinthians 8:20-21":"Avoiding this, that no man should blame us in this abundance which is administered by us: Providing for honest things, not only in the sight of the Lord, but also in the sight of men.","Matthew 25:35-40":"For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in: Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me. Then shall the righteous answer him, saying, Lord, when saw we thee an hungred, and fed thee? or thirsty, and gave thee drink? When saw we thee a stranger, and took thee in? or naked, and clothed thee? Or when saw we thee sick, or in prison, and came unto thee? And the King shall answer and say unto them, Verily I say unto you, Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.","Acts 4:32-35":"And the multitude of them that believed were of one heart and of one soul: neither said any of them that ought of the things which he possessed was his own; but they had all things common. And with great power gave the apostles witness of the resurrection of the Lord Jesus: and great grace was upon them all. Neither was there any among them that lacked: for as many as were possessors of lands or houses sold them, and brought the prices of the things that were sold, And laid them down at the apostles’ feet: and distribution was made unto every man according as he had need.","James 5:14-15":"Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him.","John 13:14-15":"If I then, your Lord and Master, have washed your feet; ye also ought to wash one another’s feet. For I have given you an example, that ye should do as I have done to you.","1 Corinthians 11:23-26":"For I have received of the Lord that which also I delivered unto you, That the Lord Jesus the same night in which he was betrayed took bread: And when he had given thanks, he brake it, and said, Take, eat: this is my body, which is broken for you: this do in remembrance of me. After the same manner also he took the cup, when he had supped, saying, This cup is the new testament in my blood: this do ye, as oft as ye drink it, in remembrance of me. For as often as ye eat this bread, and drink this cup, ye do shew the Lord’s death till he come.","Hebrews 13:2":"Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.","1 Peter 4:9":"Use hospitality one to another without grudging.","Psalm 84:10":"For a day in thy courts is better than a thousand. I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness.","1 Chronicles 9:22-27":"All these which were chosen to be porters in the gates were two hundred and twelve. These were reckoned by their genealogy in their villages, whom David and Samuel the seer did ordain in their set office. So they and their children had the oversight of the gates of the house of the Lord, namely, the house of the tabernacle, by wards. In four quarters were the porters, toward the east, west, north, and south. And their brethren, which were in their villages, were to come after seven days from time to time with them. For these Levites, the four chief porters, were in their set office, and were over the chambers and treasuries of the house of God. And they lodged round about the house of God, because the charge was upon them, and the opening thereof every morning pertained to them.","Matthew 25:35":"For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in:","Luke 14:23":"And the lord said unto the servant, Go out into the highways and hedges, and compel them to come in, that my house may be filled.","Leviticus 19:14":"Thou shalt not curse the deaf, nor put a stumblingblock before the blind, but shalt fear thy God: I am the Lord.","Genesis 2:18-24":"And the Lord God said, It is not good that the man should be alone; I will make him an help meet for him. And out of the ground the Lord God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof. And Adam gave names to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him. And the Lord God caused a deep sleep to fall upon Adam, and he slept: and he took one of his ribs, and closed up the flesh instead thereof; And the rib, which the Lord God had taken from man, made he a woman, and brought her unto the man. And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called Woman, because she was taken out of Man. Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.","Matthew 19:4-6":"And he answered and said unto them, Have ye not read, that he which made them at the beginning made them male and female, And said, For this cause shall a man leave father and mother, and shall cleave to his wife: and they twain shall be one flesh? Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.","Hebrews 13:4":"Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.","Ephesians 5:21-33":"Submitting yourselves one to another in the fear of God. Wives, submit yourselves unto your own husbands, as unto the Lord. For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body. Therefore as the church is subject unto Christ, so let the wives be to their own husbands in every thing. Husbands, love your wives, even as Christ also loved the church, and gave himself for it; That he might sanctify and cleanse it with the washing of water by the word, That he might present it to himself a glorious church, not having spot, or wrinkle, or any such thing; but that it should be holy and without blemish. So ought men to love their wives as their own bodies. He that loveth his wife loveth himself. For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church: For we are members of his body, of his flesh, and of his bones. For this cause shall a man leave his father and mother, and shall be joined unto his wife, and they two shall be one flesh. This is a great mystery: but I speak concerning Christ and the church. Nevertheless let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband.","1 Corinthians 13:4-7":"Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.","Ephesians 4:26-27":"Be ye angry, and sin not: let not the sun go down upon your wrath: Neither give place to the devil.","1 Timothy 5:1-2":"Rebuke not an elder, but intreat him as a father; and the younger men as brethren; The elder women as mothers; the younger as sisters, with all purity.","Proverbs 24:3-4":"Through wisdom is an house builded; and by understanding it is established: And by knowledge shall the chambers be filled with all precious and pleasant riches.","Amos 3:3":"Can two walk together, except they be agreed?","Colossians 3:12-14":"Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering; Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye. And above all these things put on charity, which is the bond of perfectness.","Psalm 127:1":"Except the Lord build the house, they labour in vain that build it: except the Lord keep the city, the watchman waketh but in vain.","Isaiah 61:3-4":"To appoint unto them that mourn in Zion, to give unto them beauty for ashes, the oil of joy for mourning, the garment of praise for the spirit of heaviness; that they might be called trees of righteousness, the planting of the Lord, that he might be glorified. And they shall build the old wastes, they shall raise up the former desolations, and they shall repair the waste cities, the desolations of many generations.","Psalm 34:18":"The Lord is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.","Mark 10:13-16":"And they brought young children to him, that he should touch them: and his disciples rebuked those that brought them. But when Jesus saw it, he was much displeased, and said unto them, Suffer the little children to come unto me, and forbid them not: for of such is the kingdom of God. Verily I say unto you, Whosoever shall not receive the kingdom of God as a little child, he shall not enter therein. And he took them up in his arms, put his hands upon them, and blessed them.","Psalm 127:3":"Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.","Matthew 18:5":"And whoso shall receive one such little child in my name receiveth me.","Luke 17:1-2":"Then said he unto the disciples, It is impossible but that offences will come: but woe unto him, through whom they come! It were better for him that a millstone were hanged about his neck, and he cast into the sea, than that he should offend one of these little ones.","1 Corinthians 12:12-14":"For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ. For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit. For the body is not one member, but many.","Isaiah 40:11":"He shall feed his flock like a shepherd: he shall gather the lambs with his arm, and carry them in his bosom, and shall gently lead those that are with young.","1 Thessalonians 2:7":"But we were gentle among you, even as a nurse cherisheth her children:","Philippians 2:4":"Look not every man on his own things, but every man also on the things of others.","1 Corinthians 4:2":"Moreover it is required in stewards, that a man be found faithful.","Proverbs 27:23-24":"Be thou diligent to know the state of thy flocks, and look well to thy herds. For riches are not for ever: and doth the crown endure to every generation?","Acts 6:3":"Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business.","Nehemiah 13:13":"And I made treasurers over the treasuries, Shelemiah the priest, and Zadok the scribe, and of the Levites, Pedaiah: and next to them was Hanan the son of Zaccur, the son of Mattaniah: for they were counted faithful, and their office was to distribute unto their brethren.","Romans 12:17":"Recompense to no man evil for evil. Provide things honest in the sight of all men.","Proverbs 11:1":"A false balance is abomination to the Lord: but a just weight is his delight.","Acts 6:1-4":"And in those days, when the number of the disciples was multiplied, there arose a murmuring of the Grecians against the Hebrews, because their widows were neglected in the daily ministration. Then the twelve called the multitude of the disciples unto them, and said, It is not reason that we should leave the word of God, and serve tables. Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and wisdom, whom we may appoint over this business. But we will give ourselves continually to prayer, and to the ministry of the word.","Nehemiah 4:6":"So built we the wall; and all the wall was joined together unto the half thereof: for the people had a mind to work.","Colossians 4:1":"Masters, give unto your servants that which is just and equal; knowing that ye also have a Master in heaven.","1 Timothy 5:17-18":"Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine. For the scripture saith, Thou shalt not muzzle the ox that treadeth out the corn. And, The labourer is worthy of his reward.","Acts 15:1-31":"And certain men which came down from Judea taught the brethren, and said, Except ye be circumcised after the manner of Moses, ye cannot be saved. When therefore Paul and Barnabas had no small dissension and disputation with them, they determined that Paul and Barnabas, and certain other of them, should go up to Jerusalem unto the apostles and elders about this question. And being brought on their way by the church, they passed through Phenice and Samaria, declaring the conversion of the Gentiles: and they caused great joy unto all the brethren. And when they were come to Jerusalem, they were received of the church, and of the apostles and elders, and they declared all things that God had done with them. But there rose up certain of the sect of the Pharisees which believed, saying, That it was needful to circumcise them, and to command them to keep the law of Moses. And the apostles and elders came together for to consider of this matter. And when there had been much disputing, Peter rose up, and said unto them, Men and brethren, ye know how that a good while ago God made choice among us, that the Gentiles by my mouth should hear the word of the gospel, and believe. And God, which knoweth the hearts, bare them witness, giving them the Holy Ghost, even as he did unto us; And put no difference between us and them, purifying their hearts by faith. Now therefore why tempt ye God, to put a yoke upon the neck of the disciples, which neither our fathers nor we were able to bear? But we believe that through the grace of the Lord Jesus Christ we shall be saved, even as they. Then all the multitude kept silence, and gave audience to Barnabas and Paul, declaring what miracles and wonders God had wrought among the Gentiles by them. And after they had held their peace, James answered, saying, Men and brethren, hearken unto me: Simeon hath declared how God at the first did visit the Gentiles, to take out of them a people for his name. And to this agree the words of the prophets; as it is written, After this I will return, and will build again the tabernacle of David, which is fallen down; and I will build again the ruins thereof, and I will set it up: That the residue of men might seek after the Lord, and all the Gentiles, upon whom my name is called, saith the Lord, who doeth all these things. Known unto God are all his works from the beginning of the world. Wherefore my sentence is, that we trouble not them, which from among the Gentiles are turned to God: But that we write unto them, that they abstain from pollutions of idols, and from fornication, and from things strangled, and from blood. For Moses of old time hath in every city them that preach him, being read in the synagogues every sabbath day. Then pleased it the apostles and elders, with the whole church, to send chosen men of their own company to Antioch with Paul and Barnabas; namely, Judas surnamed Barsabas, and Silas, chief men among the brethren: And they wrote letters by them after this manner; The apostles and elders and brethren send greeting unto the brethren which are of the Gentiles in Antioch and Syria and Cilicia: Forasmuch as we have heard, that certain which went out from us have troubled you with words, subverting your souls, saying, Ye must be circumcised, and keep the law: to whom we gave no such commandment: It seemed good unto us, being assembled with one accord, to send chosen men unto you with our beloved Barnabas and Paul, Men that have hazarded their lives for the name of our Lord Jesus Christ. We have sent therefore Judas and Silas, who shall also tell you the same things by mouth. For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things; That ye abstain from meats offered to idols, and from blood, and from things strangled, and from fornication: from which if ye keep yourselves, ye shall do well. Fare ye well. So when they were dismissed, they came to Antioch: and when they had gathered the multitude together, they delivered the epistle: Which when they had read, they rejoiced for the consolation.","Romans 13:1-7":"Let every soul be subject unto the higher powers. For there is no power but of God: the powers that be are ordained of God. Whosoever therefore resisteth the power, resisteth the ordinance of God: and they that resist shall receive to themselves damnation. For rulers are not a terror to good works, but to the evil. Wilt thou then not be afraid of the power? do that which is good, and thou shalt have praise of the same: For he is the minister of God to thee for good. But if thou do that which is evil, be afraid; for he beareth not the sword in vain: for he is the minister of God, a revenger to execute wrath upon him that doeth evil. Wherefore ye must needs be subject, not only for wrath, but also for conscience sake. For for this cause pay ye tribute also: for they are God’s ministers, attending continually upon this very thing. Render therefore to all their dues: tribute to whom tribute is due; custom to whom custom; fear to whom fear; honour to whom honour.","Mark 12:17":"And Jesus answering said unto them, Render to Cesar the things that are Cesar’s, and to God the things that are God’s. And they marvelled at him.","1 Timothy 3:8-10":"Likewise must the deacons be grave, not doubletongued, not given to much wine, not greedy of filthy lucre; Holding the mystery of the faith in a pure conscience. And let these also first be proved; then let them use the office of a deacon, being found blameless.","Luke 16:10":"He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.","Nehemiah 7:1-2":"Now it came to pass, when the wall was built, and I had set up the doors, and the porters and the singers and the Levites were appointed, That I gave my brother Hanani, and Hananiah the ruler of the palace, charge over Jerusalem: for he was a faithful man, and feared God above many.","Proverbs 16:9":"A man’s heart deviseth his way: but the Lord directeth his steps.","Genesis 41:34-36":"Let Pharaoh do this, and let him appoint officers over the land, and take up the fifth part of the land of Egypt in the seven plenteous years. And let them gather all the food of those good years that come, and lay up corn under the hand of Pharaoh, and let them keep food in the cities. And that food shall be for store to the land against the seven years of famine, which shall be in the land of Egypt; that the land perish not through the famine.","Leviticus 19:13":"Thou shalt not defraud thy neighbour, neither rob him: the wages of him that is hired shall not abide with thee all night until the morning.","Proverbs 19:17":"He that hath pity upon the poor lendeth unto the Lord; and that which he hath given will he pay him again.","Matthew 6:1-4":"Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven. Therefore when thou doest thine alms, do not sound a trumpet before thee, as the hypocrites do in the synagogues and in the streets, that they may have glory of men. Verily I say unto you, They have their reward. But when thou doest alms, let not thy left hand know what thy right hand doeth: That thine alms may be in secret: and thy Father which seeth in secret himself shall reward thee openly.","Philippians 4:14-19":"Notwithstanding ye have well done, that ye did communicate with my affliction. Now ye Philippians know also, that in the beginning of the gospel, when I departed from Macedonia, no church communicated with me as concerning giving and receiving, but ye only. For even in Thessalonica ye sent once and again unto my necessity. Not because I desire a gift: but I desire fruit that may abound to your account. But I have all, and abound: I am full, having received of Epaphroditus the things which were sent from you, an odour of a sweet smell, a sacrifice acceptable, wellpleasing to God. But my God shall supply all your need according to his riches in glory by Christ Jesus.","1 Chronicles 29:14":"But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.","Nehemiah 4:9":"Nevertheless we made our prayer unto our God, and set a watch against them day and night, because of them.","1 Thessalonians 5:12-13":"And we beseech you, brethren, to know them which labour among you, and are over you in the Lord, and admonish you; And to esteem them very highly in love for their work’s sake. And be at peace among yourselves.","Proverbs 27:12":"A prudent man foreseeth the evil, and hideth himself; but the simple pass on, and are punished.","Acts 15:28":"For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things;","Exodus 18:19-23":"Hearken now unto my voice, I will give thee counsel, and God shall be with thee: Be thou for the people to God-ward, that thou mayest bring the causes unto God: And thou shalt teach them ordinances and laws, and shalt shew them the way wherein they must walk, and the work that they must do. Moreover thou shalt provide out of all the people able men, such as fear God, men of truth, hating covetousness; and place such over them, to be rulers of thousands, and rulers of hundreds, rulers of fifties, and rulers of tens: And let them judge the people at all seasons: and it shall be, that every great matter they shall bring unto thee, but every small matter they shall judge: so shall it be easier for thyself, and they shall bear the burden with thee. If thou shalt do this thing, and God command thee so, then thou shalt be able to endure, and all this people shall also go to their place in peace.","Lamentations 3:40":"Let us search and try our ways, and turn again to the Lord.","Deuteronomy 6:4-9":"Hear, O Israel: The Lord our God is one Lord: And thou shalt love the Lord thy God with all thine heart, and with all thy soul, and with all thy might. And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up. And thou shalt bind them for a sign upon thine hand, and they shall be as frontlets between thine eyes. And thou shalt write them upon the posts of thy house, and on thy gates.","1 Timothy 4:12-16":"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity. Till I come, give attendance to reading, to exhortation, to doctrine. Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery. Meditate upon these things; give thyself wholly to them; that thy profiting may appear to all. Take heed unto thyself, and unto the doctrine; continue in them: for in doing this thou shalt both save thyself, and them that hear thee.","Titus 2:7-8":"In all things shewing thyself a pattern of good works: in doctrine shewing uncorruptness, gravity, sincerity, Sound speech, that cannot be condemned; that he that is of the contrary part may be ashamed, having no evil thing to say of you.","Luke 2:46-52":"And it came to pass, that after three days they found him in the temple, sitting in the midst of the doctors, both hearing them, and asking them questions. And all that heard him were astonished at his understanding and answers. And when they saw him, they were amazed: and his mother said unto him, Son, why hast thou thus dealt with us? behold, thy father and I have sought thee sorrowing. And he said unto them, How is it that ye sought me? wist ye not that I must be about my Father’s business? And they understood not the saying which he spake unto them. And he went down with them, and came to Nazareth, and was subject unto them: but his mother kept all these sayings in her heart. And Jesus increased in wisdom and stature, and in favour with God and man.","1 Corinthians 3:1-2":"And I, brethren, could not speak unto you as unto spiritual, but as unto carnal, even as unto babes in Christ. I have fed you with milk, and not with meat: for hitherto ye were not able to bear it, neither yet now are ye able.","Mark 4:33-34":"And with many such parables spake he the word unto them, as they were able to hear it. But without a parable spake he not unto them: and when they were alone, he expounded all things to his disciples.","Acts 8:30-35":"And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest? And he said, How can I, except some man should guide me? And he desired Philip that he would come up and sit with him. The place of the scripture which he read was this, He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth: In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth. And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man? Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.","Proverbs 4:1-7":"Hear, ye children, the instruction of a father, and attend to know understanding. For I give you good doctrine, forsake ye not my law. For I was my father’s son, tender and only beloved in the sight of my mother. He taught me also, and said unto me, Let thine heart retain my words: keep my commandments, and live. Get wisdom, get understanding: forget it not; neither decline from the words of my mouth. Forsake her not, and she shall preserve thee: love her, and she shall keep thee. Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding.","Psalm 119:18":"Open thou mine eyes, that I may behold wondrous things out of thy law.","Luke 10:25-37":"And, behold, a certain lawyer stood up, and tempted him, saying, Master, what shall I do to inherit eternal life? He said unto him, What is written in the law? how readest thou? And he answering said, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy strength, and with all thy mind; and thy neighbour as thyself. And he said unto him, Thou hast answered right: this do, and thou shalt live. But he, willing to justify himself, said unto Jesus, And who is my neighbour? And Jesus answering said, A certain man went down from Jerusalem to Jericho, and fell among thieves, which stripped him of his raiment, and wounded him, and departed, leaving him half dead. And by chance there came down a certain priest that way: and when he saw him, he passed by on the other side. And likewise a Levite, when he was at the place, came and looked on him, and passed by on the other side. But a certain Samaritan, as he journeyed, came where he was: and when he saw him, he had compassion on him, And went to him, and bound up his wounds, pouring in oil and wine, and set him on his own beast, and brought him to an inn, and took care of him. And on the morrow when he departed, he took out two pence, and gave them to the host, and said unto him, Take care of him; and whatsoever thou spendest more, when I come again, I will repay thee. Which now of these three, thinkest thou, was neighbour unto him that fell among the thieves? And he said, He that shewed mercy on him. Then said Jesus unto him, Go, and do thou likewise.","Luke 24:13-35":"And, behold, two of them went that same day to a village called Emmaus, which was from Jerusalem about threescore furlongs. And they talked together of all these things which had happened. And it came to pass, that, while they communed together and reasoned, Jesus himself drew near, and went with them. But their eyes were holden that they should not know him. And he said unto them, What manner of communications are these that ye have one to another, as ye walk, and are sad? And the one of them, whose name was Cleopas, answering said unto him, Art thou only a stranger in Jerusalem, and hast not known the things which are come to pass there in these days? And he said unto them, What things? And they said unto him, Concerning Jesus of Nazareth, which was a prophet mighty in deed and word before God and all the people: And how the chief priests and our rulers delivered him to be condemned to death, and have crucified him. But we trusted that it had been he which should have redeemed Israel: and beside all this, to day is the third day since these things were done. Yea, and certain women also of our company made us astonished, which were early at the sepulchre; And when they found not his body, they came, saying, that they had also seen a vision of angels, which said that he was alive. And certain of them which were with us went to the sepulchre, and found it even so as the women had said: but him they saw not. Then he said unto them, O fools, and slow of heart to believe all that the prophets have spoken: Ought not Christ to have suffered these things, and to enter into his glory? And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself. And they drew nigh unto the village, whither they went: and he made as though he would have gone further. But they constrained him, saying, Abide with us: for it is toward evening, and the day is far spent. And he went in to tarry with them. And it came to pass, as he sat at meat with them, he took bread, and blessed it, and brake, and gave to them. And their eyes were opened, and they knew him; and he vanished out of their sight. And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures? And they rose up the same hour, and returned to Jerusalem, and found the eleven gathered together, and them that were with them, Saying, The Lord is risen indeed, and hath appeared to Simon. And they told what things were done in the way, and how he was known of them in breaking of bread.","Colossians 4:5-6":"Walk in wisdom toward them that are without, redeeming the time. Let your speech be alway with grace, seasoned with salt, that ye may know how ye ought to answer every man.","Matthew 19:13-15":"Then were there brought unto him little children, that he should put his hands on them, and pray: and the disciples rebuked them. But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven. And he laid his hands on them, and departed thence.","Mark 9:42":"And whosoever shall offend one of these little ones that believe in me, it is better for him that a millstone were hanged about his neck, and he were cast into the sea.","Deuteronomy 31:12-13":"Gather the people together, men, and women, and children, and thy stranger that is within thy gates, that they may hear, and that they may learn, and fear the Lord your God, and observe to do all the words of this law: And that their children, which have not known any thing, may hear, and learn to fear the Lord your God, as long as ye live in the land whither ye go over Jordan to possess it.","2 Timothy 3:14-15":"But continue thou in the things which thou hast learned and hast been assured of, knowing of whom thou hast learned them; And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.","Romans 6:3-4":"Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.","Acts 8:36-38":"And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized? And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God. And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him.","Matthew 18:10":"Take heed that ye despise not one of these little ones; for I say unto you, That in heaven their angels do always behold the face of my Father which is in heaven.","2 Timothy 3:15":"And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.","Psalm 100:2":"Serve the Lord with gladness: come before his presence with singing.","Psalm 119:11":"Thy word have I hid in mine heart, that I might not sin against thee.","1 Corinthians 15:58":"Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.","Acts 2:47":"Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.","1 Timothy 4:12":"Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.","Ecclesiastes 12:1":"Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them;","Colossians 1:18":"And he is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all things he might have the preeminence.","Romans 12:5":"So we, being many, are one body in Christ, and every one members one of another.","John 1:46":"And Nathanael said unto him, Can there any good thing come out of Nazareth? Philip saith unto him, Come and see.","John 10:3":"To him the porter openeth; and the sheep hear his voice: and he calleth his own sheep by name, and leadeth them out.","Joshua 24:15":"And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the Lord.","Ephesians 5:25":"Husbands, love your wives, even as Christ also loved the church, and gave himself for it;","Proverbs 20:6":"Most men will proclaim every one his own goodness: but a faithful man who can find?","Luke 22:26":"But ye shall not be so: but he that is greatest among you, let him be as the younger; and he that is chief, as he that doth serve.","Proverbs 20:7":"The just man walketh in his integrity: his children are blessed after him.","Colossians 3:21":"Fathers, provoke not your children to anger, lest they be discouraged.","Titus 2:6-7":"Young men likewise exhort to be sober minded. In all things shewing thyself a pattern of good works: in doctrine shewing uncorruptness, gravity, sincerity,","Matthew 5:16":"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.","Titus 2:3-4":"The aged women likewise, that they be in behaviour as becometh holiness, not false accusers, not given to much wine, teachers of good things; That they may teach the young women to be sober, to love their husbands, to love their children,","Psalm 1:2-3":"But his delight is in the law of the Lord; and in his law doth he meditate day and night. And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.","Psalm 71:18":"Now also when I am old and grayheaded, O God, forsake me not; until I have shewed thy strength unto this generation, and thy power to every one that is to come.","Philippians 1:3-4":"I thank my God upon every remembrance of you, Always in every prayer of mine for you all making request with joy,","1 Corinthians 12:7":"But the manifestation of the Spirit is given to every man to profit withal.","Luke 12:35-36":"Let your loins be girded about, and your lights burning; And ye yourselves like unto men that wait for their lord, when he will return from the wedding; that when he cometh and knocketh, they may open unto him immediately.","1 Corinthians 14:33":"For God is not the author of confusion, but of peace, as in all churches of the saints.","Mark 10:16":"And he took them up in his arms, put his hands upon them, and blessed them.","Psalm 4:8":"I will both lay me down in peace, and sleep: for thou, Lord, only makest me dwell in safety.","Ecclesiastes 4:9":"Two are better than one; because they have a good reward for their labour.","Isaiah 66:13":"As one whom his mother comforteth, so will I comfort you; and ye shall be comforted in Jerusalem.","Romans 12:11-12":"Not slothful in business; fervent in spirit; serving the Lord; Rejoicing in hope; patient in tribulation; continuing instant in prayer;","Psalm 33:3":"Sing unto him a new song; play skilfully with a loud noise.","Exodus 31:3-5":"And I have filled him with the spirit of God, in wisdom, and in understanding, and in knowledge, and in all manner of workmanship, To devise cunning works, to work in gold, and in silver, and in brass, And in cutting of stones, to set them, and in carving of timber, to work in all manner of workmanship.","John 3:30":"He must increase, but I must decrease.","Proverbs 25:13":"As the cold of snow in the time of harvest, so is a faithful messenger to them that send him: for he refresheth the soul of his masters.","1 Corinthians 14:8":"For if the trumpet give an uncertain sound, who shall prepare himself to the battle?","Romans 10:14":"How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?","Ephesians 4:12":"For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:","Proverbs 25:11":"A word fitly spoken is like apples of gold in pictures of silver.","1 Corinthians 14:9":"So likewise ye, except ye utter by the tongue words easy to be understood, how shall it be known what is spoken? for ye shall speak into the air.","Ephesians 4:25":"Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.","Proverbs 15:23":"A man hath joy by the answer of his mouth: and a word spoken in due season, how good is it!","1 Corinthians 12:12":"For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ.","Matthew 5:14":"Ye are the light of the world. A city that is set on an hill cannot be hid.","Philippians 2:2":"Fulfil ye my joy, that ye be likeminded, having the same love, being of one accord, of one mind.","John 4:24":"God is a Spirit: and they that worship him must worship him in spirit and in truth.","1 Corinthians 10:23":"All things are lawful for me, but all things are not expedient: all things are lawful for me, but all things edify not.","1 Corinthians 9:25":"And every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible.","James 4:10":"Humble yourselves in the sight of the Lord, and he shall lift you up.","2 Samuel 6:14":"And David danced before the Lord with all his might; and David was girded with a linen ephod.","Psalm 133:1":"Behold, how good and how pleasant it is for brethren to dwell together in unity!","Romans 12:10":"Be kindly affectioned one to another with brotherly love; in honour preferring one another;","Exodus 17:12":"But Moses’ hands were heavy; and they took a stone, and put it under him, and he sat thereon; and Aaron and Hur stayed up his hands, the one on the one side, and the other on the other side; and his hands were steady until the going down of the sun.","Nehemiah 2:18":"Then I told them of the hand of my God which was good upon me; as also the king’s words that he had spoken unto me. And they said, Let us rise up and build. So they strengthened their hands for this good work.","Proverbs 25:9-10":"Debate thy cause with thy neighbour himself; and discover not a secret to another: Lest he that heareth it put thee to shame, and thine infamy turn not away.","Ephesians 6:18-19":"Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints; And for me, that utterance may be given unto me, that I may open my mouth boldly, to make known the mystery of the gospel,","Mark 6:31":"And he said unto them, Come ye yourselves apart into a desert place, and rest a while: for there were many coming and going, and they had no leisure so much as to eat.","Galatians 6:6":"Let him that is taught in the word communicate unto him that teacheth in all good things.","Acts 6:4":"But we will give ourselves continually to prayer, and to the ministry of the word.","Proverbs 17:9":"He that covereth a transgression seeketh love; but he that repeateth a matter separateth very friends.","1 Corinthians 4:1-2":"Let a man so account of us, as of the ministers of Christ, and stewards of the mysteries of God. Moreover it is required in stewards, that a man be found faithful.","Proverbs 24:27":"Prepare thy work without, and make it fit for thyself in the field; and afterwards build thine house.","1 Corinthians 12:28":"And God hath set some in the church, first apostles, secondarily prophets, thirdly teachers, after that miracles, then gifts of healings, helps, governments, diversities of tongues.","Proverbs 20:19":"He that goeth about as a talebearer revealeth secrets: therefore meddle not with him that flattereth with his lips.","1 Corinthians 12:21":"And the eye cannot say unto the hand, I have no need of thee: nor again the head to the feet, I have no need of you.","Genesis 2:24":"Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.","Ephesians 5:31-33":"For this cause shall a man leave his father and mother, and shall be joined unto his wife, and they two shall be one flesh. This is a great mystery: but I speak concerning Christ and the church. Nevertheless let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband.","Matthew 19:6":"Wherefore they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.","Lamentations 3:22-23":"It is of the Lord’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.","Matthew 20:26-27":"But it shall not be so among you: but whosoever will be great among you, let him be your minister; And whosoever will be chief among you, let him be your servant:","1 Timothy 3:8-9":"Likewise must the deacons be grave, not doubletongued, not given to much wine, not greedy of filthy lucre; Holding the mystery of the faith in a pure conscience.","Matthew 9:36":"But when he saw the multitudes, he was moved with compassion on them, because they fainted, and were scattered abroad, as sheep having no shepherd.","Romans 16:1-2":"I commend unto you Phebe our sister, which is a servant of the church which is at Cenchrea: That ye receive her in the Lord, as becometh saints, and that ye assist her in whatsoever business she hath need of you: for she hath been a succourer of many, and of myself also.","Acts 4:34-35":"Neither was there any among them that lacked: for as many as were possessors of lands or houses sold them, and brought the prices of the things that were sold, And laid them down at the apostles’ feet: and distribution was made unto every man according as he had need.","Matthew 25:36":"Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.","1 Timothy 5:17":"Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine.","1 Timothy 3:10":"And let these also first be proved; then let them use the office of a deacon, being found blameless.","Colossians 3:16":"Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.","John 17:17":"Sanctify them through thy truth: thy word is truth.","2 Peter 3:18":"But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.","Matthew 18:12":"How think ye? if a man have an hundred sheep, and one of them be gone astray, doth he not leave the ninety and nine, and goeth into the mountains, and seeketh that which is gone astray?","1 John 3:18":"My little children, let us not love in word, neither in tongue; but in deed and in truth.","Luke 19:5":"And when Jesus came to the place, he looked up, and saw him, and said unto him, Zaccheus, make haste, and come down; for to day I must abide at thy house.","Acts 15:36":"And some days after Paul said unto Barnabas, Let us go again and visit our brethren in every city where we have preached the word of the Lord, and see how they do.","1 Peter 2:12":"Having your conversation honest among the Gentiles: that, whereas they speak against you as evildoers, they may by your good works, which they shall behold, glorify God in the day of visitation.","John 4:35":"Say not ye, There are yet four months, and then cometh harvest? behold, I say unto you, Lift up your eyes, and look on the fields; for they are white already to harvest.","Luke 10:2":"Therefore said he unto them, The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest.","Titus 3:14":"And let ours also learn to maintain good works for necessary uses, that they be not unfruitful.","Proverbs 10:9":"He that walketh uprightly walketh surely: but he that perverteth his ways shall be known.","Matthew 5:37":"But let your communication be, Yea, yea; Nay, nay: for whatsoever is more than these cometh of evil.","Ephesians 4:29":"Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.","2 Corinthians 9:7":"Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.","John 13:12-17":"So after he had washed their feet, and had taken his garments, and was set down again, he said unto them, Know ye what I have done to you? Ye call me Master and Lord: and ye say well; for so I am. If I then, your Lord and Master, have washed your feet; ye also ought to wash one another’s feet. For I have given you an example, that ye should do as I have done to you. Verily, verily, I say unto you, The servant is not greater than his lord; neither he that is sent greater than he that sent him. If ye know these things, happy are ye if ye do them.","Philippians 2:3-5":"Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others. Let this mind be in you, which was also in Christ Jesus:","John 15:4-5":"Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me. I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.","Galatians 2:20":"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.","Matthew 11:28-30":"Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.","Exodus 18:17-18":"And Moses’ father in law said unto him, The thing that thou doest is not good. Thou wilt surely wear away, both thou, and this people that is with thee: for this thing is too heavy for thee; thou art not able to perform it thyself alone."};
function bibleText(r){return BIBLE[r]||"";}
