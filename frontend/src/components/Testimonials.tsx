import React from 'react';

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Mrigank Singh",
      position: "Developer",
      avatar: "/images/mrigank_icon.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/mrigank-singh",
        github: "https://github.com/mrigank118"
      }
    },
    {
      name: "Ritika Jain",
      position: "Developer",
      avatar: "/images/ritika_icon.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/ritika-jain",
        github: "https://github.com/ritika-jain"
      }
    },
    {
      name: "Narendra Singh",
      position: "Developer",
      avatar: "/images/narendra_icon.jpg",
      socials: {
        linkedin: "https://www.linkedin.com/in/narendra-singh",
        github: "https://github.com/narendra-singh"
      }
    },
    {
      name: "Sarthak",
      position: "Developer",
      avatar: null,
      socials: {
        linkedin: "",
        github: ""
      }
    },
    {
      name: "Pragyan",
      position: "Developer",
      avatar: null,
      socials: {
        linkedin: "",
        github: ""
      }
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-card relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-medium text-foreground">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            The engineers building AutoMind AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-background/80 hover:border-blue-500/40 transition-colors"
            >
              {/* Avatar */}
              <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-muted">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-semibold text-blue-500">
                    {member.name.charAt(0)}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-foreground">
                  {member.name}
                </h4>

                {/* Position */}
                <p className="text-sm text-blue-500">
                  {member.position}
                </p>

                {/* Socials */}
                <div className="flex gap-4 mt-2 text-sm">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
