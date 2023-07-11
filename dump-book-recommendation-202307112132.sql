--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Debian 14.6-1.pgdg110+1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-07-11 22:32:58

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: db-user-foula
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO "db-user-foula";

--
-- TOC entry 3442 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: db-user-foula
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 32781)
-- Name: author; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.author (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    birth_date date NOT NULL,
    gender character varying NOT NULL
);


ALTER TABLE public.author OWNER TO "db-user-foula";

--
-- TOC entry 225 (class 1259 OID 32780)
-- Name: author_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.author_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3444 (class 0 OID 0)
-- Dependencies: 225
-- Name: author_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;


--
-- TOC entry 212 (class 1259 OID 24737)
-- Name: book; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.book (
    id integer NOT NULL,
    name character varying NOT NULL,
    number_of_pages integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    author_id integer
);


ALTER TABLE public.book OWNER TO "db-user-foula";

--
-- TOC entry 211 (class 1259 OID 24736)
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.book_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3445 (class 0 OID 0)
-- Dependencies: 211
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- TOC entry 223 (class 1259 OID 24802)
-- Name: books_categories; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.books_categories (
    book_id integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.books_categories OWNER TO "db-user-foula";

--
-- TOC entry 222 (class 1259 OID 24794)
-- Name: books_readings; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.books_readings (
    id integer NOT NULL,
    first_page integer NOT NULL,
    pages_count integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    book_id integer,
    user_id integer
);


ALTER TABLE public.books_readings OWNER TO "db-user-foula";

--
-- TOC entry 221 (class 1259 OID 24793)
-- Name: books_readings_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.books_readings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_readings_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 221
-- Name: books_readings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.books_readings_id_seq OWNED BY public.books_readings.id;


--
-- TOC entry 210 (class 1259 OID 24726)
-- Name: category; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.category (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.category OWNER TO "db-user-foula";

--
-- TOC entry 209 (class 1259 OID 24725)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.category_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 209
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 214 (class 1259 OID 24748)
-- Name: claim; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.claim (
    id integer NOT NULL,
    claim_name character varying NOT NULL,
    module_name character varying NOT NULL,
    read boolean NOT NULL,
    "create" boolean NOT NULL,
    update boolean NOT NULL,
    delete boolean NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.claim OWNER TO "db-user-foula";

--
-- TOC entry 213 (class 1259 OID 24747)
-- Name: claim_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.claim_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.claim_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 213
-- Name: claim_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.claim_id_seq OWNED BY public.claim.id;


--
-- TOC entry 220 (class 1259 OID 24783)
-- Name: role; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.role OWNER TO "db-user-foula";

--
-- TOC entry 219 (class 1259 OID 24782)
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.role_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 219
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- TOC entry 224 (class 1259 OID 24809)
-- Name: roles_claims; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.roles_claims (
    role_id integer NOT NULL,
    claim_id integer NOT NULL
);


ALTER TABLE public.roles_claims OWNER TO "db-user-foula";

--
-- TOC entry 218 (class 1259 OID 24772)
-- Name: user; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    phone character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    role_id integer
);


ALTER TABLE public."user" OWNER TO "db-user-foula";

--
-- TOC entry 217 (class 1259 OID 24771)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 227 (class 1259 OID 41020)
-- Name: users_books_readings; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.users_books_readings (
    book_id integer NOT NULL,
    user_id integer NOT NULL,
    unique_read_pages integer NOT NULL,
    total_read_pages integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users_books_readings OWNER TO "db-user-foula";

--
-- TOC entry 216 (class 1259 OID 24759)
-- Name: users_profiles; Type: TABLE; Schema: public; Owner: db-user-foula
--

CREATE TABLE public.users_profiles (
    id integer NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    gender character varying NOT NULL,
    address character varying NOT NULL,
    birth_date date NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    auth_user_id integer
);


ALTER TABLE public.users_profiles OWNER TO "db-user-foula";

--
-- TOC entry 215 (class 1259 OID 24758)
-- Name: users_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: db-user-foula
--

CREATE SEQUENCE public.users_profiles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_profiles_id_seq OWNER TO "db-user-foula";

--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db-user-foula
--

ALTER SEQUENCE public.users_profiles_id_seq OWNED BY public.users_profiles.id;


--
-- TOC entry 3235 (class 2604 OID 32784)
-- Name: author id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);


--
-- TOC entry 3217 (class 2604 OID 24740)
-- Name: book id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- TOC entry 3232 (class 2604 OID 24797)
-- Name: books_readings id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_readings ALTER COLUMN id SET DEFAULT nextval('public.books_readings_id_seq'::regclass);


--
-- TOC entry 3214 (class 2604 OID 24729)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 3220 (class 2604 OID 24751)
-- Name: claim id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.claim ALTER COLUMN id SET DEFAULT nextval('public.claim_id_seq'::regclass);


--
-- TOC entry 3229 (class 2604 OID 24786)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- TOC entry 3226 (class 2604 OID 24775)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3223 (class 2604 OID 24762)
-- Name: users_profiles id; Type: DEFAULT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_profiles ALTER COLUMN id SET DEFAULT nextval('public.users_profiles_id_seq'::regclass);


--
-- TOC entry 3435 (class 0 OID 32781)
-- Dependencies: 226
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.author (id, name, created_at, updated_at, birth_date, gender) FROM stdin;
3	LP	2023-07-09 21:23:29.456847	2023-07-09 21:23:29.456847	1981-03-18	female
2	Lana Del Rey	2023-07-09 15:25:15.435294	2023-07-09 15:25:15.435294	1985-06-21	female
\.


--
-- TOC entry 3421 (class 0 OID 24737)
-- Dependencies: 212
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.book (id, name, number_of_pages, created_at, updated_at, author_id) FROM stdin;
8	Salvatore	441	2023-07-09 15:36:14.877806	2023-07-09 15:36:14.877806	2
10	The Blackest Day	606	2023-07-09 21:18:58.113526	2023-07-09 21:18:58.113526	2
3	switchblade	424	2023-07-09 13:27:53.064675	2023-07-09 13:27:53.064675	3
11	Cherry	301	2023-07-09 21:31:06.640005	2023-07-09 21:31:06.640005	2
12	The Other Woman	258	2023-07-09 21:31:37.007333	2023-07-09 21:31:37.007333	2
13	The Power	438	2023-07-09 21:31:48.570524	2023-07-09 21:31:48.570524	3
\.


--
-- TOC entry 3432 (class 0 OID 24802)
-- Dependencies: 223
-- Data for Name: books_categories; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.books_categories (book_id, category_id) FROM stdin;
\.


--
-- TOC entry 3431 (class 0 OID 24794)
-- Dependencies: 222
-- Data for Name: books_readings; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.books_readings (id, first_page, pages_count, created_at, updated_at, book_id, user_id) FROM stdin;
6	1	9	2023-07-09 16:30:01.778024	2023-07-09 16:30:01.778024	8	5
7	1	606	2023-07-09 21:36:05.221328	2023-07-09 21:36:05.221328	10	5
8	1	500	2023-07-09 21:40:37.722738	2023-07-09 21:40:37.722738	10	4
9	30	577	2023-07-09 21:40:53.499843	2023-07-09 21:40:53.499843	10	4
10	50	21	2023-07-09 21:41:05.444571	2023-07-09 21:41:05.444571	10	4
11	1	70	2023-07-09 21:42:51.426557	2023-07-09 21:42:51.426557	13	4
12	6	1	2023-07-09 21:43:06.00358	2023-07-09 21:43:06.00358	12	4
13	6	55	2023-07-09 21:43:10.632486	2023-07-09 21:43:10.632486	12	4
14	1	301	2023-07-10 12:44:41.048011	2023-07-10 12:44:41.048011	11	4
15	1	301	2023-07-10 12:44:42.363935	2023-07-10 12:44:42.363935	11	4
16	1	301	2023-07-10 12:44:43.085329	2023-07-10 12:44:43.085329	11	4
17	1	301	2023-07-10 12:44:44.529195	2023-07-10 12:44:44.529195	11	4
18	1	301	2023-07-10 12:44:44.889428	2023-07-10 12:44:44.889428	11	4
19	1	301	2023-07-10 12:44:45.142871	2023-07-10 12:44:45.142871	11	4
20	1	301	2023-07-10 12:44:45.335765	2023-07-10 12:44:45.335765	11	4
21	1	301	2023-07-10 12:44:45.610068	2023-07-10 12:44:45.610068	11	4
22	1	301	2023-07-10 12:44:45.730667	2023-07-10 12:44:45.730667	11	4
23	1	301	2023-07-10 12:44:45.98767	2023-07-10 12:44:45.98767	11	4
24	1	301	2023-07-10 12:44:46.027726	2023-07-10 12:44:46.027726	11	4
25	1	301	2023-07-10 12:44:46.426155	2023-07-10 12:44:46.426155	11	4
26	1	301	2023-07-10 12:44:46.451056	2023-07-10 12:44:46.451056	11	4
27	1	2	2023-07-10 12:45:18.522533	2023-07-10 12:45:18.522533	3	4
28	1	10	2023-07-11 15:22:35.173733	2023-07-11 15:22:35.173733	3	5
29	1	10	2023-07-11 15:23:48.591045	2023-07-11 15:23:48.591045	3	5
30	1	10	2023-07-11 15:24:46.809601	2023-07-11 15:24:46.809601	3	5
33	1	10	2023-07-11 15:33:57.938475	2023-07-11 15:33:57.938475	3	5
36	1	10	2023-07-11 15:37:13.748595	2023-07-11 15:37:13.748595	3	5
37	1	10	2023-07-11 15:38:57.921303	2023-07-11 15:38:57.921303	3	5
38	1	10	2023-07-11 15:40:09.151703	2023-07-11 15:40:09.151703	3	5
41	1	10	2023-07-11 18:05:19.354161	2023-07-11 18:05:19.354161	3	5
42	1	10	2023-07-11 18:17:52.889267	2023-07-11 18:17:52.889267	3	5
43	1	606	2023-07-11 18:19:35.42151	2023-07-11 18:19:35.42151	10	5
44	10	1	2023-07-11 18:20:43.747177	2023-07-11 18:20:43.747177	8	5
45	1	50	2023-07-11 18:22:16.78542	2023-07-11 18:22:16.78542	11	4
46	1	3	2023-07-11 18:23:01.617109	2023-07-11 18:23:01.617109	3	4
47	6	2	2023-07-11 18:23:37.872763	2023-07-11 18:23:37.872763	10	4
48	6	2	2023-07-11 18:24:01.641389	2023-07-11 18:24:01.641389	13	4
49	6	2	2023-07-11 18:24:03.268716	2023-07-11 18:24:03.268716	12	4
\.


--
-- TOC entry 3419 (class 0 OID 24726)
-- Dependencies: 210
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.category (id, name, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3423 (class 0 OID 24748)
-- Dependencies: 214
-- Data for Name: claim; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.claim (id, claim_name, module_name, read, "create", update, delete, created_at, updated_at) FROM stdin;
3	reader_books	books	t	f	f	f	2023-07-09 02:13:01.254693	2023-07-09 02:13:01.254693
4	operations_authors	authors	t	t	t	f	2023-07-09 17:23:06.725279	2023-07-09 17:23:06.725279
5	operations_books	books	t	t	t	f	2023-07-09 17:38:02.435482	2023-07-09 17:38:02.435482
6	reader_booksReadings	booksReadings	t	t	t	t	2023-07-09 17:40:52.189339	2023-07-09 17:40:52.189339
\.


--
-- TOC entry 3429 (class 0 OID 24783)
-- Dependencies: 220
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.role (id, name, created_at, updated_at) FROM stdin;
1	reader	2023-07-07 02:22:22.888474	2023-07-07 02:22:22.888474
2	admin_books	2023-07-09 17:23:50.525001	2023-07-09 17:23:50.525001
\.


--
-- TOC entry 3433 (class 0 OID 24809)
-- Dependencies: 224
-- Data for Name: roles_claims; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.roles_claims (role_id, claim_id) FROM stdin;
1	3
2	5
2	4
1	6
2	6
\.


--
-- TOC entry 3427 (class 0 OID 24772)
-- Dependencies: 218
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public."user" (id, email, phone, password, created_at, updated_at, role_id) FROM stdin;
1	ok	012	notok	2023-07-07 02:22:27.46846	2023-07-07 02:22:27.46846	1
2	ok2	0111	notok	2023-07-08 22:31:30.539664	2023-07-08 22:31:30.539664	1
3	ok3	03	notok	2023-07-08 22:31:57.649573	2023-07-08 22:31:57.649573	1
4	ok4	04	notok	2023-07-08 22:56:59.683161	2023-07-08 22:56:59.683161	1
7	ok5	05	notok	2023-07-08 23:03:27.373629	2023-07-08 23:03:27.373629	1
8	ok6	06	notok	2023-07-08 23:03:56.07894	2023-07-08 23:03:56.07894	1
9	ok7	07	$2b$10$nOUIs5kJ7naTuTFkBy1veubm09J1i1FJEoa8Sfj.jTU1jVAs6rSzi	2023-07-08 23:27:57.191868	2023-07-08 23:27:57.191868	1
10	reader	09	$2b$10$2XocWLNaV/1eIoUgjoKqt.npYTyxfIag81OCxhkQ5svXdFQXwxTf6	2023-07-09 15:19:36.077324	2023-07-09 15:19:36.077324	1
11	books-admin	10	$2b$10$8emNEmhnPVfjm6xZsNAJ0OhXvH6rJFQsY/wA.bWoCd/hdxRnw0Ppi	2023-07-09 21:17:22.394042	2023-07-09 21:17:22.394042	2
\.


--
-- TOC entry 3436 (class 0 OID 41020)
-- Dependencies: 227
-- Data for Name: users_books_readings; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.users_books_readings (book_id, user_id, unique_read_pages, total_read_pages, created_at, updated_at) FROM stdin;
3	5	10	90	2023-07-11 20:17:30.519898	2023-07-11 20:17:30.519898
10	5	606	1212	2023-07-11 18:19:42.095369	2023-07-11 18:19:42.095369
8	5	10	10	2023-07-11 18:20:43.77133	2023-07-11 18:20:43.77133
11	4	301	3963	2023-07-11 18:22:16.804676	2023-07-11 18:22:16.804676
3	4	3	5	2023-07-11 18:23:01.633077	2023-07-11 18:23:01.633077
10	4	606	1100	2023-07-11 18:23:37.888002	2023-07-11 18:23:37.888002
13	4	70	72	2023-07-11 18:24:01.65729	2023-07-11 18:24:01.65729
12	4	55	58	2023-07-11 18:24:03.284719	2023-07-11 18:24:03.284719
\.


--
-- TOC entry 3425 (class 0 OID 24759)
-- Dependencies: 216
-- Data for Name: users_profiles; Type: TABLE DATA; Schema: public; Owner: db-user-foula
--

COPY public.users_profiles (id, first_name, last_name, gender, address, birth_date, created_at, updated_at, auth_user_id) FROM stdin;
1	Mo	Fo	male	miami	2023-01-01	2023-07-08 22:56:59.724255	2023-07-08 22:56:59.724255	4
2	Mo	Fo	male	miami	2023-01-01	2023-07-08 23:03:27.433914	2023-07-08 23:03:27.433914	7
3	Mo	Fo	male	miami	2023-01-01	2023-07-08 23:03:56.104806	2023-07-08 23:03:56.104806	8
4	Mo	Fo	male	miami	2023-01-01	2023-07-08 23:27:57.214325	2023-07-08 23:27:57.214325	9
5	Mo	Fo	male	miami	2023-01-01	2023-07-09 15:19:36.117843	2023-07-09 15:19:36.117843	10
6	Mo	Foula	male	miami	2023-01-01	2023-07-09 21:17:22.418615	2023-07-09 21:17:22.418615	11
\.


--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 225
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.author_id_seq', 3, true);


--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 211
-- Name: book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.book_id_seq', 13, true);


--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 221
-- Name: books_readings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.books_readings_id_seq', 49, true);


--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 209
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.category_id_seq', 1, false);


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 213
-- Name: claim_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.claim_id_seq', 6, true);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 219
-- Name: role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.role_id_seq', 1, true);


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.user_id_seq', 11, true);


--
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 215
-- Name: users_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db-user-foula
--

SELECT pg_catalog.setval('public.users_profiles_id_seq', 6, true);


--
-- TOC entry 3245 (class 2606 OID 24757)
-- Name: claim PK_466b305cc2e591047fa1ce58f81; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.claim
    ADD CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY (id);


--
-- TOC entry 3265 (class 2606 OID 32790)
-- Name: author PK_5a0e79799d372fe56f2f3fa6871; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 24735)
-- Name: category PK_9c4e4a89e3674fc9f382d733f03; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY (id);


--
-- TOC entry 3243 (class 2606 OID 24746)
-- Name: book PK_a3afef72ec8f80e6e5c310b28a4; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY (id);


--
-- TOC entry 3253 (class 2606 OID 24792)
-- Name: role PK_b36bcfe02fc8de3c57a8b2391c2; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);


--
-- TOC entry 3251 (class 2606 OID 24781)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 3267 (class 2606 OID 41026)
-- Name: users_books_readings PK_d14ba4fa661f7a7d1ab2af63f1a; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_books_readings
    ADD CONSTRAINT "PK_d14ba4fa661f7a7d1ab2af63f1a" PRIMARY KEY (book_id, user_id);


--
-- TOC entry 3259 (class 2606 OID 24806)
-- Name: books_categories PK_dd273b23cf830ed55de0c199393; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_categories
    ADD CONSTRAINT "PK_dd273b23cf830ed55de0c199393" PRIMARY KEY (book_id, category_id);


--
-- TOC entry 3255 (class 2606 OID 24801)
-- Name: books_readings PK_e0aefabd373e17ccead29a5ea59; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_readings
    ADD CONSTRAINT "PK_e0aefabd373e17ccead29a5ea59" PRIMARY KEY (id);


--
-- TOC entry 3263 (class 2606 OID 24813)
-- Name: roles_claims PK_e267ebd3f54b40defb6ce005625; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.roles_claims
    ADD CONSTRAINT "PK_e267ebd3f54b40defb6ce005625" PRIMARY KEY (role_id, claim_id);


--
-- TOC entry 3247 (class 2606 OID 24768)
-- Name: users_profiles PK_e7a7f7db3fc96700d9239e43cda; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_profiles
    ADD CONSTRAINT "PK_e7a7f7db3fc96700d9239e43cda" PRIMARY KEY (id);


--
-- TOC entry 3249 (class 2606 OID 24770)
-- Name: users_profiles REL_28ba334a6a52cc5dac34e082ac; Type: CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_profiles
    ADD CONSTRAINT "REL_28ba334a6a52cc5dac34e082ac" UNIQUE (auth_user_id);


--
-- TOC entry 3260 (class 1259 OID 24814)
-- Name: IDX_68abbeb9a2e069557a635fb8ce; Type: INDEX; Schema: public; Owner: db-user-foula
--

CREATE INDEX "IDX_68abbeb9a2e069557a635fb8ce" ON public.roles_claims USING btree (role_id);


--
-- TOC entry 3261 (class 1259 OID 24815)
-- Name: IDX_a3da1b2593720b806144c065cb; Type: INDEX; Schema: public; Owner: db-user-foula
--

CREATE INDEX "IDX_a3da1b2593720b806144c065cb" ON public.roles_claims USING btree (claim_id);


--
-- TOC entry 3256 (class 1259 OID 24808)
-- Name: IDX_a7267f91a94721a1b11c9a2f6a; Type: INDEX; Schema: public; Owner: db-user-foula
--

CREATE INDEX "IDX_a7267f91a94721a1b11c9a2f6a" ON public.books_categories USING btree (category_id);


--
-- TOC entry 3257 (class 1259 OID 24807)
-- Name: IDX_ed5b61edeb35368078e032f5ca; Type: INDEX; Schema: public; Owner: db-user-foula
--

CREATE INDEX "IDX_ed5b61edeb35368078e032f5ca" ON public.books_categories USING btree (book_id);


--
-- TOC entry 3277 (class 2606 OID 41027)
-- Name: users_books_readings FK_17b251ff60a24eccc37201e3d99; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_books_readings
    ADD CONSTRAINT "FK_17b251ff60a24eccc37201e3d99" FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3268 (class 2606 OID 32791)
-- Name: book FK_24b753b0490a992a6941451f405; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT "FK_24b753b0490a992a6941451f405" FOREIGN KEY (author_id) REFERENCES public.author(id);


--
-- TOC entry 3269 (class 2606 OID 24816)
-- Name: users_profiles FK_28ba334a6a52cc5dac34e082ac3; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_profiles
    ADD CONSTRAINT "FK_28ba334a6a52cc5dac34e082ac3" FOREIGN KEY (auth_user_id) REFERENCES public."user"(id);


--
-- TOC entry 3275 (class 2606 OID 24846)
-- Name: roles_claims FK_68abbeb9a2e069557a635fb8ce0; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.roles_claims
    ADD CONSTRAINT "FK_68abbeb9a2e069557a635fb8ce0" FOREIGN KEY (role_id) REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3271 (class 2606 OID 24826)
-- Name: books_readings FK_9c4ebce22d27212458869ba45ab; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_readings
    ADD CONSTRAINT "FK_9c4ebce22d27212458869ba45ab" FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3276 (class 2606 OID 24851)
-- Name: roles_claims FK_a3da1b2593720b806144c065cb4; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.roles_claims
    ADD CONSTRAINT "FK_a3da1b2593720b806144c065cb4" FOREIGN KEY (claim_id) REFERENCES public.claim(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3273 (class 2606 OID 24841)
-- Name: books_categories FK_a7267f91a94721a1b11c9a2f6a7; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_categories
    ADD CONSTRAINT "FK_a7267f91a94721a1b11c9a2f6a7" FOREIGN KEY (category_id) REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3278 (class 2606 OID 41032)
-- Name: users_books_readings FK_dca9e75f651c9ffe204e1f6bd8b; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.users_books_readings
    ADD CONSTRAINT "FK_dca9e75f651c9ffe204e1f6bd8b" FOREIGN KEY (user_id) REFERENCES public.users_profiles(id);


--
-- TOC entry 3274 (class 2606 OID 24836)
-- Name: books_categories FK_ed5b61edeb35368078e032f5ca2; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_categories
    ADD CONSTRAINT "FK_ed5b61edeb35368078e032f5ca2" FOREIGN KEY (book_id) REFERENCES public.book(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3270 (class 2606 OID 24821)
-- Name: user FK_fb2e442d14add3cefbdf33c4561; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY (role_id) REFERENCES public.role(id);


--
-- TOC entry 3272 (class 2606 OID 24831)
-- Name: books_readings FK_fc92b5c36b4559fef9048422e30; Type: FK CONSTRAINT; Schema: public; Owner: db-user-foula
--

ALTER TABLE ONLY public.books_readings
    ADD CONSTRAINT "FK_fc92b5c36b4559fef9048422e30" FOREIGN KEY (user_id) REFERENCES public.users_profiles(id);


--
-- TOC entry 3443 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: db-user-foula
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2023-07-11 22:32:58

--
-- PostgreSQL database dump complete
--

