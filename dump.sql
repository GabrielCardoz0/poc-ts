--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: contacts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    name text NOT NULL,
    number text NOT NULL,
    cep text NOT NULL,
    logradouro text NOT NULL,
    bairro text NOT NULL,
    cidade text NOT NULL,
    uf text NOT NULL
);


--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.contacts VALUES (6, 'gabriel', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (7, 'gabriel', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (8, 'gabriel', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (9, 'gabrielChange', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (13, 'gabrielC', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (14, 'gabrielCgghlkjh', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (3, 'gabrielCgghlkjh', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (4, 'gabrielCgghlkjh', '11994703386', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (18, 'gabrielC22', '11994703366', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');
INSERT INTO public.contacts VALUES (19, 'gabrielC22', '11994703366', '06700499', 'Rua Cabrália', 'Jardim Araruama', 'Cotia', 'SP');


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.contacts_id_seq', 19, true);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

