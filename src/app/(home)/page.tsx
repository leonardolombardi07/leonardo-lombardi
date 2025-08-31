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
import Slider from "@mui/material/Slider";
import { SxProps, Theme } from "@mui/material/styles";

export default function Page() {
  return (
    <React.Fragment>
      <Container
        maxWidth={"lg"}
        sx={{
          paddingY: 4,

          "@media print": {
            paddingY: 0,
          },
        }}
      >
        <Box
          sx={{
            py: 4,
            paddingX: 4,
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

          <Grid container spacing={5}>
            <Grid size={7}>
              <JobExperienceSection />
              <Spacing />

              <Education />
              <Spacing />
            </Grid>

            <Grid size={5}>
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

      <Typography
        variant="h5"
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          mt: -0.5,
        }}
      >
        Software Engineer
      </Typography>

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
          <PercentageSlider label="Portuguese" value={100} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="English" value={100} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Spanish" value={60} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Italian" value={20} />
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
          <PercentageSlider label="Typescript/Javascript" value={80} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Python (Type Hints ❤️)" value={70} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="OrcaFlex/OrcFxAPI" value={60} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="HTML/CSS" value={65} />
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
          <PercentageSlider label="React/NextJS" value={80} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Plotly/Dash" value={50} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="OrcFxAPI" value={90} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Version Control (Git/GitHub)" value={60} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Redux/Redux Toolkit" value={60} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Material UI" value={85} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="React Native/Expo" value={70} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Firebase" value={75} />
        </Grid>
      </Grid>
    </Box>
  );
}

function Projects() {
  return (
    <Box>
      <SectionTitle>Relevant Projects for the Job</SectionTitle>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <IconLink
          href="https://leonardolombardi.vercel.app/"
          Icon={WebsiteIcon}
        >
          leonardolombardi.vercel.app
        </IconLink>

        <IconLink
          href="https://github.com/leonardolombardi07/leonardo-lombardi"
          Icon={GitHubIcon}
        >
          Code (NextJS + Material UI)
        </IconLink>
      </Stack>

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

function PercentageSlider({ label, value }: { label: string; value: number }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "50%",
          }}
        >
          {label}
        </Typography>
      </Box>

      <Slider
        min={0}
        max={100}
        value={value}
        valueLabelDisplay="auto"
        sx={{
          pt: 1,
          pb: 0.5,

          width: "100%",
          "& .MuiSlider-rail": {
            color: "text.secondary",
          },

          pointerEvents: "none",

          //   Disabled slider
          "& .MuiSlider-thumb": {
            display: "none",
          },

          //   Hide thumb for active and hover as well:
          "& .MuiSlider-thumb.Mui-active, & .MuiSlider-thumb.Mui-focusVisible, & .MuiSlider-thumb:hover":
            {
              display: "none",
            },
        }}
      />
    </Box>
  );
}

function JobExperienceSection() {
  return (
    <Box>
      <SectionTitle>Job Experience</SectionTitle>

      <JobExperience
        position="Installation Analysis Engineer"
        company="Subsea7"
        location="Rio de Janeiro"
        from="February 2024"
        to="Present"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Performed subsea installation analyses using OrcaFlex to optimize
            flexible pipe installation and riser design, ensuring safe and
            efficient deepwater operations.
          </BulletPointListItem>

          <BulletPointListItem>
            Leveraged Python (OrcFXAPI) to build automation and optimization
            algorithms, including a genetic algorithm for Direct Vertical
            Connection analysis.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>

      <JobExperience
        position="Software Engineer"
        company="RBNA Consult"
        location="Rio de Janeiro"
        from="March 2023"
        to="December 2023"
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            Developed a fullstack certification dashboard to streamline client
            interactions and reporting.
          </BulletPointListItem>

          <BulletPointListItem>
            Introduced modern technologies (Next.js, TypeScript, Material UI,
            Firebase, Auth0, AI APIs), enhancing usability, data security, and
            client access to certification metrics.
          </BulletPointListItem>
        </BulletPointListContainer>
      </JobExperience>

      <JobExperience
        position="Software Engineer"
        company="Fluxo Consultoria"
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
        company="Hub Security"
        location="Tel Aviv"
        from="January 2020"
        to="March 2020"
        divider={false}
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
  location,
  from,
  to,
  divider,
  children,
}: {
  position: string;
  company: string;
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
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
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
        place="Universidade Federal do Rio de Janeiro"
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
        place="Instituto Superior Técnico"
        location="Lisbon"
        from="August 2021"
        to="August 2022"
        divider={false}
      >
        <BulletPointListContainer>
          <BulletPointListItem>
            First contact with optimization algorithms in naval engineering
            through the Ship Design course, developing a model to minimize the
            annual cost of a cruiser ship.
          </BulletPointListItem>
        </BulletPointListContainer>
      </EducationExperience>
    </Box>
  );
}

function EducationExperience({
  degree,
  place,
  location,
  from,
  to,
  divider,
  children,
}: {
  degree: string;
  place: string;
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
          sx={{
            color: "secondary.main",
            fontWeight: "bold",
          }}
        >
          {place}
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
