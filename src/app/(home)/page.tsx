import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import ThesisIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WebsiteIcon from "@mui/icons-material/Language";
import SoccerIcon from "@mui/icons-material/SportsSoccer";
import { SxProps, Theme } from "@mui/material/styles";
import Slider from "./_page/Slider";
import Link from "next/link";

export default function Page() {
  return (
    <React.Fragment>
      <Container
        maxWidth={"lg"}
        sx={{
          paddingY: {
            xs: 0,
            sm: 2,
          },
          paddingX: {
            xs: 0,
            sm: 4,
          },

          "@media print": {
            paddingY: 0,
          },
        }}
      >
        <Box
          sx={{
            py: 4,
            paddingX: {
              xs: 3,
              sm: 4,
            },
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,

            "@media print": {
              border: "none",
              paddingX: 1,
            },
          }}
        >
          <Header />
          <Box sx={{ mb: 6 }} />

          <Grid container columnSpacing={5} rowSpacing={0}>
            <Grid
              size={{
                xs: 12,
                md: 7,
              }}
            >
              <JobExperienceSection />
              <Spacing />

              <Education />
              <Spacing />
            </Grid>

            <Grid
              size={{
                xs: 12,
                md: 5,
              }}
            >
              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
                  mb: 3,
                }}
              />

              <Languages />
              <Spacing />

              <Skills />
              <Spacing />

              <BonusSkills />
              <Spacing />

              <Projects />
              <Spacing />

              <PersonalInterests />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function Spacing() {
  return <Box sx={{ mb: 3 }} />;
}

function Header() {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
        }}
      >
        Leonardo Lombardi
      </Typography>

      <Stack
        direction={"row"}
        columnGap={2}
        alignItems="center"
        sx={{ mt: 0.5 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            // mt: -0.5,
          }}
        >
          Software Engineer
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Available to relocate · EU passport holder
        </Typography>
      </Stack>

      <Stack
        direction="row"
        columnGap={2}
        rowGap={0}
        useFlexGap
        sx={{ mt: 0.5, flexWrap: "wrap" }}
      >
        <IconLink Icon={EmailIcon} href="mailto:leonardolombardi07@gmail.com">
          leonardolombardi07@gmail.com
        </IconLink>

        <IconLink Icon={WhatsAppIcon} href="https://wa.me/5521989986625">
          +5521989986625
        </IconLink>

        <IconLink
          Icon={GitHubIcon}
          href="https://github.com/leonardolombardi07"
        >
          leonardolombardi07
        </IconLink>

        <IconLink
          Icon={LinkedInIcon}
          href="https://www.linkedin.com/in/leonardo-lombardi-b360951a1/?locale=en_US"
        >
          Leonardo Lombardi
        </IconLink>
      </Stack>
    </Box>
  );
}

function IconLink({
  children,
  Icon,
  href,
  sx,
}: {
  children: React.ReactNode;
  Icon: typeof EmailIcon;
  href: string;
  sx?: SxProps<Theme>;
}) {
  return (
    <Typography
      component={"a"}
      target="_blank"
      href={href}
      variant="subtitle1"
      sx={{
        color: "text.secondary",
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    >
      <Icon
        sx={{
          fontSize: 20,
          mr: 0.5,
        }}
      />

      {children}
    </Typography>
  );
}

function Languages() {
  return (
    <Box>
      <SectionTitle>Languages</SectionTitle>

      <Grid container columnSpacing={2} rowSpacing={0}>
        <Grid size={6}>
          <Slider
            label="English"
            value={100}
            shortDescription="Had to use it in most of my jobs."
          />
        </Grid>

        <Grid size={6}>
          <Slider
            label="Portuguese"
            value={100}
            shortDescription="This is my native language. I'm from Brazil!"
          />
        </Grid>

        <Grid size={6}>
          <Slider
            label="Spanish"
            value={60}
            shortDescription="Learned mostly by traveling and speaking with friends from spanish speaking countries."
          />
        </Grid>

        <Grid size={6}>
          <Slider
            label="Italian"
            value={20}
            shortDescription={
              <Box>
                Altough my dad is italian, I shamefully don&apos;t speak it
                fluently. <br />
                Must learn!
              </Box>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

function Skills() {
  return (
    <Box>
      <SectionTitle>Skills</SectionTitle>

      <Grid container columnSpacing={2} rowSpacing={0}>
        <Grid size={6}>
          <Slider
            label="Typescript/Javascript"
            value={80}
            shortDescription={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1">
                  Most Influential Resources
                </Typography>

                <Link
                  href="https://frontendmasters.com/courses/archive/javascript-hard-parts-v2/"
                  target="_blank"
                >
                  JavaScript: The Hard Parts
                </Link>

                <Link href="https://eloquentjavascript.net/" target="_blank">
                  Eloquent Javascript
                </Link>

                <Link
                  href="https://frontendmasters.com/courses/archive/getting-started-javascript-v2/"
                  target="_blank"
                >
                  Getting Started with JavaScript
                </Link>

                <Link
                  href="https://www.udemy.com/course/typescript-the-complete-developers-guide"
                  target="_blank"
                >
                  Typescript: The Complete Developer&apos;s Guide
                </Link>

                <Link
                  href="https://frontendmasters.com/courses/archive/typescript-v2/"
                  target="_blank"
                >
                  TypeScript 3 Fundamentals
                </Link>
              </Box>
            }
          />
        </Grid>

        <Grid size={6}>
          <Slider label="React" value={75} />
        </Grid>

        <Grid size={6}>
          <Slider
            label="HTML/CSS"
            value={65}
            shortDescription={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body2">
                  Most Influential Resources
                </Typography>

                <Link
                  href="https://meyerweb.com/eric/books/css-tdg/"
                  target="_blank"
                >
                  CSS: The Definitive Guide
                </Link>
              </Box>
            }
          />
        </Grid>

        <Grid size={6}>
          <Slider
            label="NextJS"
            value={70}
            shortDescription={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body2">
                  Most Influential Resources
                </Typography>

                <Link
                  href="https://www.udemy.com/course/next-js-the-complete-developers-guide"
                  target="_blank"
                >
                  Next JS: The Complete Developer&apos;s Guide
                </Link>
              </Box>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

function BonusSkills() {
  return (
    <Box>
      <SectionTitle>Bonus Skills</SectionTitle>

      <Grid container columnSpacing={2} rowSpacing={0}>
        <Grid size={6}>
          <Slider
            label="Python"
            value={70}
            shortDescription={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body2">
                  Most Influential Resources
                </Typography>

                <Link
                  href="https://www.youtube.com/playlist?list=PL4C4720A6F225E074"
                  target="_blank"
                >
                  MIT 6.00 Intro to Computer Science & Programming, Fall 2008
                </Link>

                <Link
                  href="https://www.youtube.com/playlist?list=PLUl4u3cNGP619EG1wp0kT-7rDE_Az5TNd"
                  target="_blank"
                >
                  MIT 6.0002 Introduction to Computational Thinking and Data
                  Science
                </Link>
              </Box>
            }
          />
        </Grid>

        <Grid size={6}>
          <Slider
            label="React Native/Expo"
            value={60}
            shortDescription={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body2">
                  Most Influential Resources
                </Typography>

                <Link
                  href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706422?start=0#overview"
                  target="_blank"
                >
                  The Complete React Native + Hooks Course
                </Link>
              </Box>
            }
          />
        </Grid>

        <Grid size={6}>
          <Slider label="Firebase" value={75} />
        </Grid>

        <Grid size={6}>
          <Slider label="Version Control (Git/GitHub)" value={60} />
        </Grid>

        <Grid size={6}>
          <Slider label="Express.js" value={45} />
        </Grid>

        <Grid size={6}>
          <Slider label="Tailwind CSS" value={25} />
        </Grid>

        <Grid size={6}>
          <Slider label="Redux/Redux Toolkit" value={60} />
        </Grid>

        <Grid size={6}>
          <Slider label="Material UI" value={85} />
        </Grid>
      </Grid>
    </Box>
  );
}

function Projects() {
  return (
    <Box>
      <SectionTitle>Relevant Projects</SectionTitle>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <IconLink
          href="https://leonardolombardi.vercel.app/"
          Icon={WebsiteIcon}
          sx={{
            lineHeight: 1.15,
          }}
        >
          My Website <br />
          (leonardolombardi.vercel.app)
        </IconLink>
      </Stack>

      <Box sx={{ mb: 1 }} />

      <IconLink
        href="https://futmacacos.vercel.app/"
        Icon={SoccerIcon}
        sx={{
          lineHeight: 1.15,
        }}
      >
        FutMacacos <br />
        (NextJS + Firebase + Material UI app to manage soccer sessions)
      </IconLink>

      <Box sx={{ mb: 1 }} />

      <IconLink
        href="http://www.repositorio.poli.ufrj.br/monografias/projpoli10046694.pdf"
        Icon={ThesisIcon}
        sx={{
          lineHeight: 1.15,
        }}
      >
        Bachelor&apos;s thesis <br />
        (Genetic Algorithm for Direct Vertical Connection Analysis)
      </IconLink>
    </Box>
  );
}

function JobExperienceSection() {
  return (
    <Box>
      <SectionTitle>Job Experience</SectionTitle>

      <JobExperience
        position="Software Engineer"
        company="Hub Security"
        companyLink="https://hub-technologies.com"
        location="Tel Aviv"
        from="January 2020"
        to="March 2020"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Automated lead-generation workflows (Python, Selenium) by building
            scripts that extracted and processed business data from LinkedIn.
          </BulletPointListItem>

          <BulletPointListItem>
            Enabled the marketing team to expand client outreach and reduce
            manual work.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>

      <JobExperience
        position="Software Engineer"
        company="Fluxo Consultoria"
        companyLink="https://fluxoconsultoria.poli.ufrj.br"
        location="Rio de Janeiro"
        from="December 2019"
        to="July 2021"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Designed and delivered web and mobile solutions for diverse clients
            as part of a student-led consultancy.
          </BulletPointListItem>

          <BulletPointListItem>
            Specialized in mobile development with React Native/Expo and
            Firebase, integrating backend systems to deliver scalable
            applications under agile methodologies.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>

      <JobExperience
        position="Software Engineer"
        company="RBNA Consult"
        companyLink="https://rbnaconsult.com"
        location="Rio de Janeiro"
        from="March 2023"
        to="December 2023"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Built a fullstack B2B SaaS certification dashboard from scratch
            using Next.js, TypeScript, and Material UI, streamlining client
            interactions and reporting for certification workflows.
          </BulletPointListItem>

          <BulletPointListItem>
            Integrated Firebase for real-time data, Auth0 for authentication,
            and AI APIs for document processing, improving data security and
            client access to certification metrics.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>

      <JobExperience
        position="Installation Analysis Engineer"
        company="Subsea7"
        companyLink="https://www.subsea7.com"
        location="Rio de Janeiro"
        from="February 2024"
        to="Present"
        divider={false}
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Built Python automation tools and optimization algorithms
            (OrcFXAPI), including a genetic algorithm that reduced manual
            analysis time for deepwater installation workflows.
          </BulletPointListItem>

          <BulletPointListItem>
            Developed Excel/VBA tooling and data processing pipelines for
            engineering analysis, handling complex cross-referencing and report
            generation.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>
    </Box>
  );
}

function BulletPointListContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component={"ul"}
      sx={{
        marginBlockStart: 1,
        marginBlockEnd: 0,
        marginInlineStart: 0,
        marginInlineEnd: 0,
        ml: -2.5,
      }}
    >
      {children}
    </Box>
  );
}

function BulletPointListItem({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      component={"li"}
      variant="body2"
      sx={{ color: "text.secondary" }}
    >
      {children}
    </Typography>
  );
}

function JobExperience({
  position,
  company,
  companyLink,
  location,
  from,
  to,
  divider,
  children,
}: {
  position: string;
  company: string;
  companyLink?: string;
  location: string;
  from?: string;
  to: string;
  divider?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant={"body1"}>{position}</Typography>

        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          {from ? `${from} - ${to}` : `${to}`}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -0.2,
        }}
      >
        <Typography
          variant="body2"
          component={companyLink ? "a" : "span"}
          href={companyLink}
          target="_blank"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            textDecoration: "none",

            "&:hover": {
              textDecoration: companyLink ? "underline" : "none",
            },
          }}
        >
          {company}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          {location}
        </Typography>
      </Box>

      {children}

      {divider === false ? null : <Divider sx={{ mt: 1, mb: 2 }} />}
    </Box>
  );
}

function Education() {
  return (
    <Box>
      <SectionTitle>Education</SectionTitle>

      <EducationExperience
        degree="Bachelor, Naval and Oceanic Engineering"
        organization="Universidade Federal do Rio de Janeiro"
        organizationLink="https://ufrj.br"
        location=""
        to="March 2025"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Excelled in Computing, Numerical Calculus, and Scientific Calculus,
            developing strong foundations in programming, algorithms, and
            applied mathematics.
          </BulletPointListItem>
        </BulletPointListContainer>
      </EducationExperience>
      <Box sx={{ mt: 1 }} />

      <EducationExperience
        degree="Exchange Program, Naval Engineering"
        organization="Instituto Superior Técnico"
        organizationLink="https://tecnico.ulisboa.pt/"
        location="Lisbon"
        from="August 2021"
        to="August 2022"
        divider={false}
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Continued frontend development alongside coursework - completed a UX
            design course, building a prototype React Native app.
          </BulletPointListItem>
        </BulletPointListContainer>
      </EducationExperience>
    </Box>
  );
}

function EducationExperience({
  degree,
  organization,
  organizationLink,
  location,
  from,
  to,
  divider,
  children,
}: {
  degree: string;
  organization: string;
  organizationLink?: string;
  location: string;
  from?: string;
  to: string;
  divider?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant={"body1"}>{degree}</Typography>

        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          {from ? `${from} - ${to}` : `${to}`}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -0.2,
        }}
      >
        <Typography
          variant="body2"
          component={organizationLink ? "a" : "span"}
          href={organizationLink}
          target="_blank"
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
            textDecoration: "none",

            "&:hover": {
              textDecoration: organizationLink ? "underline" : "none",
            },
          }}
        >
          {organization}
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.secondary",
          }}
        >
          {location}
        </Typography>
      </Box>

      {children}

      {divider === false ? null : <Divider sx={{ mt: 1, mb: 2 }} />}
    </Box>
  );
}

function PersonalInterests() {
  return (
    <Box>
      <SectionTitle>Personal Interests</SectionTitle>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          // Spacing between lines:
          lineHeight: 1.1,
        }}
      >
        Good Movies & Good books & Good Food & <br />
        Sailing, Soccer, Padel, Table Tennis (hard to beat me at these); <br />
        Tennis, Running (easy to beat me at these); <br />
        Surfing, Wing Foil, Skiing (want to learn!).
      </Typography>
    </Box>
  );
}

function SectionTitle({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) {
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography
        variant="h6"
        sx={{
          // Uppercase:
          textTransform: "uppercase",
          fontWeight: "bold",
          ...sx,
        }}
      >
        {children}
      </Typography>
      <Divider sx={{ borderBottomWidth: 3, borderColor: "text.primary" }} />
    </Box>
  );
}
