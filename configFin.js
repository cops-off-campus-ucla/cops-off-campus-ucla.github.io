var config = {
    accessToken: 'pk.eyJ1IjoiY2dpYW1hcmlubyIsImEiOiJjanAyd2hwNWUwYnJ3M3dzMHF4MnJkZ29uIn0.7tLnplw65tLmywvvIPGSKA',
    style: 'mapbox://styles/cgiamarino/ckkimtxjp0i6i17ld54ku7e2z',
    theme: 'light',
    alignment: 'left',
    title: 'UCLA Cops off Campus Abolition Map',
    byline: 'A Spatial and Temporal Journey Towards a Campus and a World without Cops',
    description: 'In 1969, Black, Indigenous, and People of Color (BIPOC) students at UCLA and across the country demanded that their universities confront racial inequity and systemic injustices. At UCLA, this movement led to the creation of our Ethnic Studies Research Centers, amongst other advances towards confronting the historically white UC system. </br></br>Now, over 50 years later, BIPOC students at UCLA and allied abolitionists are again speaking out against systemic racism—in order to get <em>Cops Off Campus</em>. At UCLA, the Cops Off Campus movement has been inspired largely by actions of both the COLA (Cost of Living Adjustment) movement led by graduate student workers in 2019 and the Black Lives Matter uprisings of 2020. At UCLA, additional anti-carceral groups include Cops Off Campus, No UCPD, the Divest/Invest Faculty Collective, Prison Education Program, Underground Scholars Initiative, Million Dollar Hoods at the Ralph J. Bunche Center for African American Studies, the Criminal Justice Program at UCLA Law, and more.</br></br> Imagining the UC system without a dedicated police department is not difficult, given that the University of California Police Department (UCPD) was only created in 1947 at UC Berkeley, before eventually expanding to other campuses. Police presence on UC campuses is no different from other spaces in the way it reproduces systemic racism. A 2018 Daily Bruin analysis found that UCPD activity disproportionately targeted Black and Latinx people in Westwood, where Black people comprise a mere 2 percent of the resident population, and Latinx people 7 percent. However, nearly 29 percent of UCPD suspicious activity stops from July 2015 to June 2016 were of Black people, while Latinx people made up 10.5 percent of stops.</br></br>We believe that one of the first steps towards abolishing UCPD is to map sites of carceral violence on campus. In this mapping, we seek to disrupt the university&#8217;s complicity with carceral violence, and demand the abolition of the UCPD and investment in COLA, racial equity, and social services on campus instead of funding the police.</br></br>A simple map of the UCLA campus cannot express the depth of the UC&#8217;s academic, financial, and political complicity with police and policing. As you look at this map, please keep this in mind: <h5 class="tab">(1) Academia generally has long been a site of carceral violence that reproduces punitive, surveillance, and racist frameworks. Each department and discipline on campus can be mapped for the ways that it perpetuates the logic of the police state, in manners that have material consequences for Los Angeles and the world.</h5><h5 class="tab">(2) UCLA, as a campus, is not confined to Westwood but is a real estate enterprise that acquires or contracts land and buildings throughout Southern California, from UCLA Conference Center in Lake Arrowhead to Harbor-UCLA Medical Center in Carson, and so much more.</h5></br></br>',
    footer: 'Story map by <a href="https://twitter.com/cdgiamarino9" target="_blank">Chris Giamarino</a>, <a href="https://scholar.google.com/citations?user=JFjdQ94AAAAJ&hl=en" target="_blank">PhD student</a> in urban planning at UCLA Luskin. Design inspired by <a href="https://pointsunknown.nyc/" target=”_blank”>Points Unknown</a> from their Mapbox Story Map tutorial.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a>',
    chapters: [
        {
            id: 'slide-0',
            alignment: 'left',
            hidden: false,
            title: 'Cops off Campus at UCLA',
            image: 'protest-1.jpg',
            description: 'The UCLA Abolition Map is a growing catalog that aims to pressure our campus to end its legacy of policing students and community. This map will reflect on a portion of the carceral actions of UCLA and continue to build towards a campus and a world without cops.',
            location: {
                center: [-118.57914, 33.94910],
                zoom: 10.09,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sites',
                     opacity: 1,
                     duration: 5000
                },
                {
                    layer: 'property',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sites',
                    opacity: 0,
                    duration: 5000
               },
               {
                   layer: 'property',
                   opacity: 0,
                   duration: 5000
               }
            ]
        },
        {
            id: 'slide-1',
            alignment: 'left',
            hidden: false,
            title: 'Harbor-UCLA Medical Center, October 6, 2020',
            image: 'harbor.jpg',
            imageCredit: '<a href="https://www.kmdarchitects.com/harbor-ucla" target="_blank">kmd</a>',
            description: 'A <a href="https://www.lataco.com/ucla-hospital-man-shot/" target="_blank">patient</a> experiencing a psychiatric crisis was shot seven times and killed by a Los Angeles County Sheriff&#8217;s Department deputy. Subsequently, healthcare workers <a href="https://www.latimes.com/california/story/2020-10-13/hosptial-workers-protest-sheriff-violence" target="_blank">protested</a> against police violence in hospitals.',
            location: {
                center: [-118.29936, 33.83028],
                zoom: 15.06,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                  layer:'property',
                  opacity:.7,
                  duration:5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
            onChapterExit: [
              {
                layer:'property',
                opacity:0,
                duration:1500
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 1500
              }
            ]
        },
        {
            id: 'slide-2',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Faculty Center, April 28, 1993',
            image: 'hunger.jpg',
            imageCredit: '<a href="https://alumni.ucla.edu/ucla-history/ucla-history-26/">Daily Bruin</a>',
            description: '99 students were arrested when protesting budget cuts to the Chicano Studies Program. UCLA pressed charges against the students and enabled an environment where UCPD and LAPD clashed, in <a href="https://guides.library.ucla.edu/hunger-strike" target="_blank">riot gear</a>, with their students. Eventually, after <a href="https://oac.cdlib.org/findaid/ark:/13030/kt0b69p9s1/" target="_blank">facing incarceration</a> by the hands of their university, the students won a right to the departmentalization of Chicano Studies and a learning environment that included their histories.',
            location: {
                center: [-118.43996, 34.07028 ],
                zoom: 17.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-3',
            alignment: 'left',
            hidden: false,
            title: 'Jackie Robinson Stadium, June 1, 2020',
            image: 'jackie.jfif',
            imageCredit: '<a href="https://www.latimes.com/california/story/2020-06-04/ucla-chancellor-calls-lapd-use-of-jackie-robinson-stadium-to-process-arrests-a-violation" target="_blank">Kent Nishimura</a>',
            description: 'In the midst of Black Lives Matter Protests (after the murder of George Floyd, Breonna Taylor, and countless other Black people by the police) LAPD used UCLA&#8217;s <a href="https://dailybruin.com/2020/11/01/activists-gather-at-jackie-robinson-stadium-to-protest-ucpd-lapd" target="_blank">Jackie Robinson Stadium</a> as a &#8220;field jail&#8221; to detain protesters and others arrested for curfew violations, including UCLA students. LA County Sheriff&#8217;s Department and LAPD violated all social distancing protocols during the COVID-19 pandemic, with unmasked officers deliberately crowding protestors into buses. Protesters were held on these buses at UCLA for five to six hours, without access to restrooms, food, water, information, or medical attention.',
            location: {
                center: [-118.46032,  34.05932],
                zoom: 17.22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-4',
            alignment: 'left',
            hidden: false,
            title: 'Residence of the Chancellor, 2005',
            image: 'chance.jpg',
            imageCredit: '<a href="https://blog.admissions.ucla.edu/2012/06/22/chancellors-residence/">UCLA Bruin Blog</a>',
            description: 'UCLA&#8216;s Chancellors have historically colluded with federal law enforcement agencies to surveil, investigate, and share information about UCLA students, faculty, and staff.<a href="https://www.aau.edu/sites/default/files/AAU-Files/Key-Issues/Science-Security/Letter-FBI-NSHEAB.pdf" target="_blank">The National Security Higher Education Advisory Board (NSHEAB)</a> was created in <a href="https://archives.fbi.gov/archives/news/pressrel/press-releases/fbi-appoints-national-security-higher-education-advisory-board" target="_blank">2005 by FBI Director Robert S. Mueller III</a>, and chancellors from UCLA, UC San Diego, and UC Davis sat on the Board. The purpose of the NSHEAB was stated to be &#8220;a forum for discussion of national security issues,&#8221; including participation not only by the FBI and higher educational institutions, but the CIA, the NSA, DHS, the Office of National Intelligence, the DoD, CBP, and ICE. The NSHEAB was disbanded in 2018, but a joint resolution, the Homeland Security Higher Education Advisory Council Act, was introduced by <a href="https://www.congress.gov/bill/116th-congress/house-bill/6588/text?r=7&s=1" target="_blank">Congress in 2020</a>. Its text proposes a similarly structured Council as the NSHEAB, with similar functions and purpose.',
            location: {
                center: [-118.44303, 34.07632],
                zoom: 17.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-5',
            alignment: 'left',
            hidden: false,
            title: 'UCPD Station, ongoing',
            image: 'march.jpg',
            imageCredit: '<a href="https://dailybruin.com/2020/10/01/protesters-march-down-westwood-boulevard-call-for-removal-of-police-from-campuses" target="_blank">Naveed Pour</a>',
            description: '<a href="https://www.police.ucla.edu/other/violent-crime-behavioral-analysis-seminar" target="_blank">UCLA UCPD</a> alone has a projected budget for Fiscal Year 20-21 of $22,182,739.00. Despite <a href="https://youtu.be/o2VCO-jbPKw" target="_blank">continued protests</a>, this budget continues to expand year after year. This police budget includes hundreds of thousands of dollars for firearms, ammunition, and tasers. Many BIPOC students do not feel safe and are hyper-policed while at UCLA.',
            location: {
                center: [ -118.44581, 34.06733],
                zoom: 18.40,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-6',
            alignment: 'left',
            hidden: false,
            title: 'Westwood Parking Lots and other locations, ongoing',
            image: 'cso.jfif',
            imageCredit: '<a href="https://www.linkedin.com/company/cso-programs-ucla/" target="_blank">CSO LinkedIn</a>',
            description: 'The Community Service Officer (CSO) program pays students to be the &#8220;<a href="https://www.police.ucla.edu/cso/about-cso" target="_blank">eyes and ears</a>&#8221; of UCPD. The CSO patrols are stationed in designated campus buildings or off-campus locations. The CSOs communicate and monitor via a two-way radio with police officers. This program promotes complicity with campus police at its most extreme. It pays students to perpetuate systems of surveillance and punishment.',
            location: {
              center: [-118.44758, 34.06811],
              zoom: 17.05,
              pitch: 2.05,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                }
              ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-7',
            alignment: 'left',
            hidden: false,
            title: 'Fraternity Row, May 1990',
            image: 'theta-facade.jpg',
            imageCredit: '<a href="https://www.facebook.com/UCLA-Theta-Xi-348036155226283/" target="_blank">Theta Xi Facebook</a>',
            description: 'Officer Terence Duren was accused of using his <a href="https://www.latimes.com/archives/la-xpm-2006-nov-21-me-taser21-story.html" target="_blank">nightstick to choke someone</a> who was hanging out on a Saturday in front of a UCLA fraternity. Kente S. Scott alleged that Duren confronted him while he was walking on the street outside the Theta Xi fraternity house. Scott sued the university, and according to court records, UCLA officials moved to have Duren dismissed from the police force. But after an independent administrative hearing, officials overturned the dismissal, suspending him for 90 days.',
            location: {
                center: [-118.44917,  34.06737 ],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-8',
            alignment: 'left',
            hidden: false,
            title: 'Weyburn Ave & Gayley Ave in Westwood, April 3 1995',
            image: '1995.jfif',
            imageCredit: '<a href="https://www.latimes.com/archives/la-xpm-1995-04-04-me-50631-story.html">LA Times</a>',
            description: 'One day after a UCLA Basketball National Championship victory <a href="https://www.latimes.com/sports/ucla/story/2020-04-06/wild-westwood-police-had-to-restrain-raucous-ucla-victory-celebration-in-1995" target="_blank">celebration</a> in Westwood, many students questioned the tactics of the Los Angeles Police Deptartment (LAPD) in  <a href="https://dailybruin.com/1995/04/04/students-question-polices-use" target="_blank">quelling</a> the celebration. Several students who were hit by police batons or rubber bullets criticized the LAPD for its use of force, saying that it did more to ignite conflict than stop it. In an interview, LAPD officials confirmed 15 official arrests and more than 20 people were treated at the UCLA Medical Center Emergency Room. The head of UCPD, Chief Clarence Chapman, agreed with Commander Tim McBride (spokesman for the LAPD) saying that the riots proved to police that early forceful responses are good.',
            location: {
                center: [-118.44841, 34.06194],
                zoom: 18.31,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-9',
            alignment: 'left',
            hidden: false,
            title: 'Gayley Avenue, November 2013',
            image: 'cunningham.jfif',
            imageCredit: '<a href="https://www.latimes.com/local/lanow/la-xpm-2013-nov-25-la-me-ln-black-judge-ucla-police-20131125-story.html" target="_blank">Ken Hively</a>',
            description: 'Judge David S. Cunningham III, a former president of the Los Angeles Police Commision, was pulled over by two UCPD officers on Gayley Avenue near <a href="https://dailybruin.com/2013/11/25/la-judge-files-excessive-force-complaint-against-ucpd" target="_blank">Whole Foods Market</a>. He was pulled over for not wearing a seatbelt and was handcuffed for resisting arrest, and was shoved into the back of the police car. UCPD were found to have used racially-motivated excessive force, and Cunningham won a <a href="https://dailybruin.com/2014/07/11/la-judge-uc-reach-settlement-over-10m-damages-claim-against-ucpd" target="_blank">$500,000 settlement</a>. ',
            location: {
                center: [-118.44749, 34.06113 ],
                zoom: 18.58,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
                ],
            onChapterExit: [
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }

            ]
        },
        {
            id: 'slide-10',
            alignment: 'left',
            hidden: false,
            title: 'Strathmore Drive and Levering Avenue, August 27, 2014',
            image: 'claudius.jpg',
            imageCredit: '<a href="https://dailybruin.com/2016/05/25/ucla-employee-files-lawsuit-alleging-ucpd-racially-profiled-him" target="_blank">Carl Douglas</a>',
            description: 'Claudius Gaines, a UCLA Facilities Management worker, alleged a UCPD officer assaulted and falsely imprisoned him during a traffic stop in the North Village in <a href="https://dailybruin.com/2016/05/25/ucla-employee-files-lawsuit-alleging-ucpd-racially-profiled-him" target="_blank">2014</a> because he is Black. According to the police, he was pulled over for a broken license plate light and for using his phone. However, Claudius reported that this was false information because his license plate was recently repaired after a similar stop mere weeks before. When Gaines asserted this, and remained in his car without producing the paperwork police demanded from him, police escalated the situation through <a href="https://dailybruin.com/2014/09/08/editorial-ucpd-must-recognize-racial-profiling-issue" target="_blank">use of force</a> and the threat of pepper spray. Gaines was arrested for obstruction of a police officer and resisting arrest, and subsequently filed a <a href="https://www.latimes.com/local/lanow/la-me-ln-black-ucla-employee-alleges-racial-profiling-in-arrest-by-campus-police-20140902-story.html" target="_blank">racial profiling lawsuit</a> against the UCPD.',
            location: {
                center: [-118.45105,  34.06564 ],
                zoom: 18.17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
                ],
            onChapterExit: [
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }

            ]
        },
        {
            id: 'slide-11',
            alignment: 'left',
            hidden: false,
            title: 'Fielding School of Public Health, ongoing',
            image: 'dhs.jpg',
            imageCredit: '<a href="https://advocacy.ucla.edu/homeland-security-helps-unveil-institute-to-address-school-violence/" target="_blank">Jonathan Van Dyke</a>',
            description: 'The UCLA Fielding School of Public Health, National Education Safety and Security Institute <a href="https://cphd.ph.ucla.edu/national-education-safety-and-security-initiative-nessi/nessi-faculty-and-associates" target="_blank">(NESSI)</a> collaborates with the <a href="https://advocacy.ucla.edu/homeland-security-helps-unveil-institute-to-address-school-violence/" target="_blank">Department of Homeland Security</a>. NESSI focuses on natural disasters, terrorist attacks and cyber-attacks. This <a href="https://cphd.ph.ucla.edu/national-education-safety-and-security-institute-nessi/nessi-courses" target="_blank">program</a> offers courses such as &#8220;The Surveillance Detection Course [which] instructs participants on the fundamental principles and methodologies of human surveillance.&#8221;',
            location: {
                center: [-118.44417, 34.06653  ],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 1000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 0
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 0
              }
            ]
        },
        {
            id: 'slide-12',
            alignment: 'left',
            hidden: false,
            title: 'Kerckhoff Hall, October 2003',
            image: 'kerck.jpg',
            imageCredit: '<a href="https://asucla.ucla.edu/kerckhoff-hall-and-patio-2/">ASUCLA</a>',
            description: '<a href="https://www.latimes.com/archives/la-xpm-2006-nov-21-me-taser21-story.html" target="_blank">Officer Terence Duren</a> shot Willie Davis Frazier Jr., an unhoused man, in the bathroom of the downstairs study lounge in Kerckhoff Hall in 2003. Frazier said he had been writing a letter in the study lounge for close to an hour and a half before he was confronted by Duren. He said the officer approached him and asked if he was a student. Frazier said he responded, &#8220;<a href="https://dailybruin.com/2004/01/27/accounts-of-october-shooting-d" target="_blank">I’m leaving</a>,&#8221; and got up to leave. That was when Frazier said the physical confrontation began and Duren began beating him on his legs. The confrontation continued and Frazier said he was able to escape and ran to a nearby bathroom. Frazier said Duren followed him into the bathroom and that was where he was shot. Frazier was later convicted of assaulting an officer.',
            location: {
                center: [-118.44406, 34.07048 ],
                zoom: 18.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 7000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-13',
            alignment: 'left',
            hidden: false,
            title: 'Murphy Hall, Office of the Administrative Vice Chancellor, February 2020',
            image: 'face.png',
            imageCredit: '<a href="https://fightfortheftr.medium.com/backlash-forces-ucla-to-abandon-plans-for-facial-recognition-surveillance-on-campus-ebe005e3f715" target="_blank">Fight for the Future</a>',
            description: 'At the beginning of 2020, the Vice Chancellor&#8217;s Office issued a revision to Policy 133, which governs the university&#8217;s use and management of security systems. The revision proposed the implementation of facial recognition technology on UCLA&#8217;s campus, which at the time, made UCLA the <a href="https://www.insidehighered.com/news/2020/02/21/ucla-drops-plan-use-facial-recognition-security-surveillance-other-colleges-may-be" target="_blank">first</a> and only university in the country to use facial recognition technology in this manner. This biometric surveillance technology would have used the school&#8217;s CCTV cameras to constantly scan the faces of people on campus and check them against a database. Students at UCLA organized with <a href="https://fightfortheftr.medium.com/backlash-forces-ucla-to-abandon-plans-for-facial-recognition-surveillance-on-campus-ebe005e3f715" target="_blank">Fight For the Future</a>, a digital privacy advocacy group, against Policy 110&#8217;s revision. After student and community <a href="https://dailybruin.com/2020/01/31/students-share-concerns-about-facial-recognition-on-campus-security-cameras" target="_blank">backlash</a> culminating in a national day of action, which was scheduled for March 2, 2020, the Administrative Vice Chancellor, Michael Beck, issued a letter on February 18, 2020 stating that UCLA would no longer pursue the use of facial recognition software technology on campus.',
            location: {
                center: [-118.43913, 34.07162],
                zoom: 18.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [  {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }],
              onChapterExit: [  {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }]
        },
        {
            id: 'slide-14',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Law, April 2020',
            image: 'law.png',
            imageCredit: '<a href=https://dailybruin.com/2020/07/17/ucla-school-of-law-holds-contracts-with-companies-selling-personal-data-to-ice" target="_blank">Daily Bruin</a>',
            description: ' In 2020, the UCLA Law chapter of Law Students Against ICE, a coalition of several law student organizations, demanded that UCLA Law School <a href="https://www.promisehumanrights.blog/blog/2020/5/ucla-law-students-demand-westlaw-and-lexisnexis-parent-companies-divest-from-ice" target="_blank">divest</a> from legal search database companies that share personal information data with ICE. UCLA disclosed its contracts with Westlaw and LexisNexis, the legal database companies, on April 9, 2020. The law school has paid $339,239 to Westlaw since 2015, and $248,490 to LexisNexis.',
            location: {
                center: [-118.43923,  34.07297],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }]
        },
        {
            id: 'slide-15',
            alignment: 'left',
            hidden: false,
            title: 'Haines Hall, Department of Anthropology',
            image: 'spy.jpg',
            imageCredit: '<a href="https://twitter.com/stoplapdspying/status/1191880674178822144" target="_blank">Stop LAPD Spying</a>',
            description: 'UCLA Professor of Anthropology Jeffrey Brantingham is the co-founder of the for-profit company <a href="https://www.predpol.com/" target="_blank">PredPol</a>, an acronym for predictive policing. PredPol uses historical crime data (known to be deeply racially biased) to predict future crime and inform policing. This <a href="https://www.buzzfeednews.com/article/carolinehaskins1/los-angeles-police-department-dumping-predpol-predictive" target="_blank">technology</a> automates and reproduces long histories of racial capitalism. The racist policing it produces uses the prestige of UCLA for cover. PredPol grew out of a research project between the Los Angeles Police Department and UCLA. Professor Brantingham is far from <a href="https://www.vice.com/en/article/d3m7jq/dozens-of-cities-have-secretly-experimented-with-predictive-policing-software" target="_blank">alone</a> in direct research collaboration and support with the LAPD, the US military, and other arms of state around the country.',
            location: {
              center: [-118.44172, 34.07294],
              zoom: 18.27,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }]
        },
        {
            id: 'slide-16',
            alignment: 'left',
            hidden: false,
            title: 'Luskin School of Public Affairs, March 2020',
            image: 'jorja.jpg',
            imageCredit: '<a href="https://dailybruin.com/2010/05/25/memory-project-memorializes-remembers-black-panthe" target="_blank">UCLA Optimism</a>',
            description: 'Principal Investigator Jorja Leap (in collaboration with co-authors from the Luskin School of Social Welfare, Department of Anthropology and other UCLA data managers and researchers) released a report entitled &#8220;Evaluation of the LAPD Community Safety Partnership.&#8221; As is common in &#8220;reform&#8221; research, the report offered a <a href="https://luskin.ucla.edu/ucla-study-finds-strong-support-for-lapds-community-policing-program" target="_blank">positive</a> evaluation of CSP programs and recommended more money to the LAPD (not, notably, more money to the impoverished communities they are policing). This high profile report was immediately used by LA Mayor Eric Garcetti to justify millions of dollars directed toward the LAPD during the Summer of 2020 when a massive uprising for Black life was calling for precisely the opposite: defunding and divesting from policing, and investing in Black communities. ',
            location: {
              center: [-118.44005, 34.07447 ],
              zoom: 17.82,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }]
        },
        {
            id: 'slide-17',
            alignment: 'left',
            hidden: false,
            title: ' Royce Hall, September 19, 1969 - June 20, 1970',
            image: 'angela.jpg',
            imageCredit: '<a href="https://100.ucla.edu/timeline/angela-davis-lectures-in-royce-hall" target=”_blank” >UCLA 100</a>',
            description: '<a href="https://newsroom.ucla.edu/stories/angela-davis-returns-to-ucla-classroom-45-years-after-controversy" target="_blank">Angela Davis</a>, civil rights activist and abolitionist, was hired as an Assistant Professor of Philosophy at UCLA for the 1969-1970 academic year, and was fired by the UC Board of Regents at the urging of then-Governor <a href="https://oac.cdlib.org/findaid/ark:/13030/c8bz6brj/entire_text/" target="_blank">Ronald Reagan</a>. The basis for her firing were her political beliefs and membership in the American Communist Party. After protests over her firing and a court ruling, Davis resumed teaching, but was fired again in June 1970 for &#8220;<a href="https://archive.nytimes.com/www.nytimes.com/books/98/03/08/home/davis-regents.html" target="_blank">inflammatory language</a>&#8221; in four different speeches. The report written regarding her dismissal stated, &#8220;We deem particularly offensive such utterances as her statement that the [UC] regents &#8216;killed, brutalized (and) murdered&#8217; the People&#8217;s Park demonstrators, and her repeated characterizations of the police as &#8216;pigs.&#8217;&#8221; UCLA continues to use her story and her image in promotional materials and on social media.',
            location: {
                center: [-118.44295, 34.07288 ],
                zoom: 18.05,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 5000
              }
            ]
        },
        {
            id: 'slide-18',
            alignment: 'left',
            hidden: false,
            title: 'Powell Library, November 14, 2006',
            image: 'tase.jpg',
            imageCredit: '<a href="https://laist.com/2009/05/18/ucla_taser_incident_lawsuit_settled.php">Henry David, LAist</a>',
            description: '<a href="https://latimesblogs.latimes.com/lanow/2009/05/ucla-settles-lawsuit-with-tasered-student.html" target="_blank">Mostafa Tabatabainejad</a>, a fourth-year undergraduate student, was tazed five times with a taser by UCPD while handcuffed. Tabatabainejad was studying for finals in the library after hours and was asked to show his ID by a community service officer. He refused to do so, believing that he had been asked because of his Middle Eastern ethnicity. The community service officer called UCPD. When UCPD arrived, Tabatabainejad started to leave the library, but an officer grabbed his arm and he was handcuffed. The police then tasered him, continuing to do so even though he was handcuffed and had gone limp. After the incident, UCPD arrested and cited him for resisting and obstructing a police officer. Tabatabainejad filed a federal lawsuit alleging that the officers used excessive force and violated the ADA, which was settled with UCLA agreeing to pay <a href="https://laist.com/2009/05/18/ucla_taser_incident_lawsuit_settled.php" target="_blank">$220,000</a>.',
            location: {
                center: [-118.44267,  34.07158 ],
                zoom: 18.36,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 1,
                    duration: 5000
                }
              ],
              onChapterExit: [
                {
                    layer: 'satellite',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'label',
                    opacity: 0,
                    duration: 5000
                }
              ]
        },
        {
            id: 'slide-19',
            alignment: 'left',
            hidden: false,
            title: 'Janns Steps, May 1970',
            image: '1970.png',
            imageCredit: '<a href="https://newsletter.alumni.ucla.edu/connect/2019/dec/ucla-in-the-1970s/default.htm" target="_blank">UCLA Alumni</a>',
            description: 'In late April 1970, <a href="https://newsletter.alumni.ucla.edu/connect/2019/dec/ucla-in-the-1970s/default.htm" target="_blank">President Nixon ordered</a> U.S. troops to invade Cambodia. On May 4, students at Kent State College in Ohio were protesting the Vietnam War and the invasion of Cambodia. The Ohio National Guard fired into the protesters, killing four people and sparking massive protests and student strikes at colleges and universities across the U.S. In response, UCLA students held an anti-Vietnam war protest that culminated in a standoff between protesters and police at <a href="https://arcg.is/1TXmqT" target="_blank">Janss Steps</a>, and eventually spanned across several UCLA buildings on campus. It began when students refused an order to disperse from Janss Steps, administrators declared an <a href="https://www.google.com/maps/d/embed?mid=1gBY6XEWJXZ7cxUn2haxXPuWVHJE" target="_blank">illegal assembly</a>, and called in LAPD and CHP. The police used force, <a href="https://newsletter.alumni.ucla.edu/connect/2017/feb/black-history/default.htm#civil" target="_blank">arresting 74 students</a> and injuring another dozen. In response, then-Governor Ronald Reagan shut down all California colleges and universities for four days.',
            location: {
              center: [-118.44334, 34.07212],
              zoom: 18.85,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'satellite',
                opacity: 1,
                duration: 5000
            },
            {
                layer: 'label',
                opacity: 0,
                duration: 5000
            }
          ],
          onChapterExit: [
            {
                layer: 'satellite',
                opacity: 1,
                duration: 5000
            },
            {
                layer: 'label',
                opacity: 0,
                duration: 5000
            }]
        },
        {
            id: 'slide-20',
            alignment: 'left',
            hidden: false,
            title: 'Drake Stadium, Summer 2028',
            image: 'pauley.jpg',
            imageCredit: '<a href="https://dailybruin.com/2017/09/13/la-to-host-2028-summer-olympics-athletes-to-use-ucla-facilities" target="_blank">Daily Bruin</a>',
            description: 'The 2028 Summer Olympics will be hosted by the City of Los Angeles. UCLA will play a <a href="https://dailybruin.com/2017/09/13/la-to-host-2028-summer-olympics-athletes-to-use-ucla-facilities" target="_blank">prominent role</a> in the Games, as Olympic athletes and support personnel will live in the Olympic Village on the Hill and train at Drake Stadium; some medal events will be held in Pauley Pavilion; and athletes will use the Ronald Reagan UCLA Medical Center and the Harbor-UCLA Medical Center for medical services. The Games have been designated a <a href="https://nolympicsla.com/2020/01/22/what-is-a-national-special-security-event-nsse/" target="_blank">National Special Security Event</a> (NSSE), which designates local law enforcement to work closely with the Department of Homeland Security, ICE, CBP, and other federal law enforcement agencies, likely for years and months before and during the event. The NSSE will give more power to both federal and local law enforcement agencies to surveill, intimidate, sweep, and incarcerate marginalized groups and communities of color in Los Angeles. Historically, after the last Olympic Games in Los Angeles (1984), Los Angeles saw increases in arrests in communities of color and the <a href="https://sundial.csun.edu/160552/news/activists-say-the-2028-olympics-could-cause-police-militarization-and-increase-disparity-in-l-a-s-low-income-neighborhoods/" target="_blank">militarization</a> of local police. Through its participation in the Olympics, UCLA is complicit in furthering surveillance tactics, over-policing, and police militarization of the surrounding Los Angeles community, not to mention UCLA students, faculty, and staff.',
            location: {
                center: [-118.44966, 34.07197],
                zoom: 17.24,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
              onChapterEnter: [{
                  layer: 'satellite',
                  opacity: 1,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 1,
                  duration: 5000
              }
            ],
            onChapterExit: [
              {
                  layer: 'satellite',
                  opacity: 0,
                  duration: 5000
              },
              {
                  layer: 'label',
                  opacity: 0,
                  duration: 500
              }
            ]
        },
        {
            id: 'slide-21',
            alignment: 'left',
            hidden: false,
            title: 'UCLA Cops off Campus Map',
            image: 'https://i.imgur.com/LTERFLn.jpg',
            imageCredit:'<a href="https://twitter.com/ananyaUCLA/status/1323759724433563648?s=20" target="_blank">Ananya Roy</a>',
            description: 'The UCLA Abolition Map is a growing catalog that aims to pressure our campus to end its legacy of policing students and community. This map will reflect on a portion of the carceral actions of UCLA and continue to build towards a campus and a world without cops.',
            location: {
                center: [-118.45516, 34.07124],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sites',
                     opacity: 1,
                     duration: 5000
                },
                {
                    layer: 'property',
                    opacity: .6,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sites',
                    opacity: 0,
                    duration: 5000
               },
               {
                   layer: 'property',
                   opacity: 0,
                   duration: 5000
               }
            ]
        }
    ]
};
