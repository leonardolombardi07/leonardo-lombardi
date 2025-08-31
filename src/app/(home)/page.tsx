import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/material/Avatar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Slider from "@mui/material/Slider";
import { SxProps, Theme } from "@mui/material/styles";

const HEADER_HEIGHT = 200;

export default function Page() {
  return (
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
        <Grid container spacing={8}>
          <Grid size={7}>
            <Header />

            <JobExperienceSection />
            <Box sx={{ mb: 3 }} />

            <PersonalInterests />
          </Grid>

          <Grid size={5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                height: HEADER_HEIGHT,
              }}
            >
              <Avatar
                src="images/Profile.jpg"
                alt="Leonardo Lombardi"
                sx={{
                  width: 150,
                  height: 150,
                }}
              >
                Leonardo Lombardi
              </Avatar>
            </Box>

            <Education />
            <Box sx={{ mb: 3 }} />

            <Languages />
            <Box sx={{ mb: 3 }} />

            <GeneralSkills />
            <Box sx={{ mb: 3 }} />

            <SpecificSkills />
            <Box sx={{ mb: 3 }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

function Header() {
  return (
    <Box
      sx={{
        height: HEADER_HEIGHT,
      }}
    >
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
        <HeaderLink Icon={EmailIcon} href="mailto:leonardolombardi07@gmail.com">
          leonardolombardi07@gmail.com
        </HeaderLink>

        <HeaderLink Icon={WhatsAppIcon} href="https://wa.me/5521989986625">
          +5521989986625
        </HeaderLink>

        <HeaderLink
          Icon={GitHubIcon}
          href="https://github.com/leonardolombardi07"
        >
          leonardolombardi07
        </HeaderLink>

        <HeaderLink
          Icon={LinkedInIcon}
          href="https://www.linkedin.com/in/leonardo-lombardi-b360951a1/?locale=en_US"
        >
          Leonardo Lombardi
        </HeaderLink>
      </Stack>
    </Box>
  );
}

function HeaderLink({
  children,
  Icon,
  href,
}: {
  children: React.ReactNode;
  Icon: typeof EmailIcon;
  href: string;
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

function GeneralSkills() {
  return (
    <Box>
      <SectionTitle>General Skills</SectionTitle>

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

function SpecificSkills() {
  return (
    <Box>
      <SectionTitle>Job Specific Skills</SectionTitle>

      <Grid container columnSpacing={2} rowSpacing={0}>
        <Grid size={6}>
          <PercentageSlider label="React/NextJS/Material UI" value={80} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Plotly/Dash" value={50} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="OrcFxAPI" value={90} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Version Control" value={60} />
        </Grid>

        <Grid size={6}>
          <PercentageSlider label="Redux/Redux Toolkit" value={60} />
        </Grid>
      </Grid>
    </Box>
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
          variant="subtitle2"
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
          //   py: 0.5,
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
            Performed subsea installation analyses using Orca Flex to optimize
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
            Firebase, Auth0, AI APIs) to replace legacy systems, enhancing
            usability, data security, and client access to certification
            metrics.
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
      sx={{ color: "text.secondary", fontSize: 15 }}
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
        divider={false}
      />

      <Box sx={{ mt: 1 }} />

      <EducationExperience
        degree="Exchange, Naval Engineering"
        place="Instituto Superior Técnico"
        location="Lisbon"
        from="August 2021"
        to="August 2022"
        divider={false}
      />
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

      {divider === false ? null : <Divider sx={{ mb: 3 }} />}
    </Box>
  );
}

function PersonalInterests() {
  return (
    <Box>
      <SectionTitle>Personal Interests</SectionTitle>
      Movies & Good books & <br />
      Sailing, Soccer, Padel, Table Tennis (hard to beat me at these); <br />
      Tennis, Running (easy to beat me at these); <br />
      Surfing, Wing Foil, Skiing (want to learn!).
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
