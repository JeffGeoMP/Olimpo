PGDMP     7                    y            ProyectoAyD    13.1    13.1 Q               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    ProyectoAyD    DATABASE     m   CREATE DATABASE "ProyectoAyD" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Guatemala.1252';
    DROP DATABASE "ProyectoAyD";
                postgres    false            �            1259    17035    cliente    TABLE       CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    telefono character varying(10) NOT NULL,
    correo character varying(150) NOT NULL,
    nit character varying(15) NOT NULL
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    17033    cliente_id_cliente_seq    SEQUENCE     �   CREATE SEQUENCE public.cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.cliente_id_cliente_seq;
       public          postgres    false    215                       0    0    cliente_id_cliente_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;
          public          postgres    false    214            �            1259    16996    det_pro_pla    TABLE     �   CREATE TABLE public.det_pro_pla (
    id_detallereceta integer NOT NULL,
    fk_id_platillo integer NOT NULL,
    fk_id_producto integer NOT NULL
);
    DROP TABLE public.det_pro_pla;
       public         heap    postgres    false            �            1259    16994     det_pro_pla_id_detallereceta_seq    SEQUENCE     �   CREATE SEQUENCE public.det_pro_pla_id_detallereceta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.det_pro_pla_id_detallereceta_seq;
       public          postgres    false    209                       0    0     det_pro_pla_id_detallereceta_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.det_pro_pla_id_detallereceta_seq OWNED BY public.det_pro_pla.id_detallereceta;
          public          postgres    false    208            �            1259    17056    detalle_platillo_pedido    TABLE     �   CREATE TABLE public.detalle_platillo_pedido (
    id_dplatillo integer NOT NULL,
    cantidad integer NOT NULL,
    subtotal numeric NOT NULL,
    fkid_factura integer NOT NULL,
    fkid_platillo integer NOT NULL,
    fkid_pedido integer NOT NULL
);
 +   DROP TABLE public.detalle_platillo_pedido;
       public         heap    postgres    false            �            1259    17054 (   detalle_platillo_pedido_id_dplatillo_seq    SEQUENCE     �   CREATE SEQUENCE public.detalle_platillo_pedido_id_dplatillo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public.detalle_platillo_pedido_id_dplatillo_seq;
       public          postgres    false    219                       0    0 (   detalle_platillo_pedido_id_dplatillo_seq    SEQUENCE OWNED BY     u   ALTER SEQUENCE public.detalle_platillo_pedido_id_dplatillo_seq OWNED BY public.detalle_platillo_pedido.id_dplatillo;
          public          postgres    false    218            �            1259    17022    factura    TABLE     �   CREATE TABLE public.factura (
    id_factura integer NOT NULL,
    total integer NOT NULL,
    fecha date NOT NULL,
    fkid_tipopago integer NOT NULL
);
    DROP TABLE public.factura;
       public         heap    postgres    false            �            1259    17020    factura_id_factura_seq    SEQUENCE     �   CREATE SEQUENCE public.factura_id_factura_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.factura_id_factura_seq;
       public          postgres    false    213                       0    0    factura_id_factura_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.factura_id_factura_seq OWNED BY public.factura.id_factura;
          public          postgres    false    212            �            1259    16956    menu    TABLE     d   CREATE TABLE public.menu (
    id_menu integer NOT NULL,
    menu character varying(50) NOT NULL
);
    DROP TABLE public.menu;
       public         heap    postgres    false            �            1259    16954    menu_id_menu_seq    SEQUENCE     �   CREATE SEQUENCE public.menu_id_menu_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.menu_id_menu_seq;
       public          postgres    false    203                        0    0    menu_id_menu_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.menu_id_menu_seq OWNED BY public.menu.id_menu;
          public          postgres    false    202            �            1259    17043    pedido    TABLE     b   CREATE TABLE public.pedido (
    id_pedido integer NOT NULL,
    fkid_cliente integer NOT NULL
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    17041    pedido_id_pedido_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_id_pedido_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.pedido_id_pedido_seq;
       public          postgres    false    217            !           0    0    pedido_id_pedido_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.pedido_id_pedido_seq OWNED BY public.pedido.id_pedido;
          public          postgres    false    216            �            1259    16964    platillo    TABLE     �   CREATE TABLE public.platillo (
    id_platillo integer NOT NULL,
    nombre character varying(50) NOT NULL,
    precio numeric NOT NULL,
    descripcion character varying(150) NOT NULL,
    imagen character varying(100),
    id_menu integer NOT NULL
);
    DROP TABLE public.platillo;
       public         heap    postgres    false            �            1259    16962    platillo_id_platillo_seq    SEQUENCE     �   CREATE SEQUENCE public.platillo_id_platillo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.platillo_id_platillo_seq;
       public          postgres    false    205            "           0    0    platillo_id_platillo_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.platillo_id_platillo_seq OWNED BY public.platillo.id_platillo;
          public          postgres    false    204            �            1259    16980    producto    TABLE     �   CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    nproducto character varying(50) NOT NULL,
    precio_u numeric NOT NULL,
    id_tipproducto integer NOT NULL,
    descripcion character varying(150)
);
    DROP TABLE public.producto;
       public         heap    postgres    false            �            1259    16978    producto_id_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.producto_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.producto_id_producto_seq;
       public          postgres    false    207            #           0    0    producto_id_producto_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.producto_id_producto_seq OWNED BY public.producto.id_producto;
          public          postgres    false    206            �            1259    17014 	   tipo_pago    TABLE     s   CREATE TABLE public.tipo_pago (
    id_tipo_pago integer NOT NULL,
    tipo_pago character varying(50) NOT NULL
);
    DROP TABLE public.tipo_pago;
       public         heap    postgres    false            �            1259    17012    tipo_pago_id_tipo_pago_seq    SEQUENCE     �   CREATE SEQUENCE public.tipo_pago_id_tipo_pago_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.tipo_pago_id_tipo_pago_seq;
       public          postgres    false    211            $           0    0    tipo_pago_id_tipo_pago_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.tipo_pago_id_tipo_pago_seq OWNED BY public.tipo_pago.id_tipo_pago;
          public          postgres    false    210            �            1259    16948    tipo_producto    TABLE        CREATE TABLE public.tipo_producto (
    id_tipo_producto integer NOT NULL,
    tipo_producto character varying(50) NOT NULL
);
 !   DROP TABLE public.tipo_producto;
       public         heap    postgres    false            �            1259    16946 "   tipo_producto_id_tipo_producto_seq    SEQUENCE     �   CREATE SEQUENCE public.tipo_producto_id_tipo_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.tipo_producto_id_tipo_producto_seq;
       public          postgres    false    201            %           0    0 "   tipo_producto_id_tipo_producto_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.tipo_producto_id_tipo_producto_seq OWNED BY public.tipo_producto.id_tipo_producto;
          public          postgres    false    200            b           2604    17038    cliente id_cliente    DEFAULT     x   ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);
 A   ALTER TABLE public.cliente ALTER COLUMN id_cliente DROP DEFAULT;
       public          postgres    false    215    214    215            _           2604    16999    det_pro_pla id_detallereceta    DEFAULT     �   ALTER TABLE ONLY public.det_pro_pla ALTER COLUMN id_detallereceta SET DEFAULT nextval('public.det_pro_pla_id_detallereceta_seq'::regclass);
 K   ALTER TABLE public.det_pro_pla ALTER COLUMN id_detallereceta DROP DEFAULT;
       public          postgres    false    209    208    209            d           2604    17059 $   detalle_platillo_pedido id_dplatillo    DEFAULT     �   ALTER TABLE ONLY public.detalle_platillo_pedido ALTER COLUMN id_dplatillo SET DEFAULT nextval('public.detalle_platillo_pedido_id_dplatillo_seq'::regclass);
 S   ALTER TABLE public.detalle_platillo_pedido ALTER COLUMN id_dplatillo DROP DEFAULT;
       public          postgres    false    219    218    219            a           2604    17025    factura id_factura    DEFAULT     x   ALTER TABLE ONLY public.factura ALTER COLUMN id_factura SET DEFAULT nextval('public.factura_id_factura_seq'::regclass);
 A   ALTER TABLE public.factura ALTER COLUMN id_factura DROP DEFAULT;
       public          postgres    false    213    212    213            \           2604    16959    menu id_menu    DEFAULT     l   ALTER TABLE ONLY public.menu ALTER COLUMN id_menu SET DEFAULT nextval('public.menu_id_menu_seq'::regclass);
 ;   ALTER TABLE public.menu ALTER COLUMN id_menu DROP DEFAULT;
       public          postgres    false    202    203    203            c           2604    17046    pedido id_pedido    DEFAULT     t   ALTER TABLE ONLY public.pedido ALTER COLUMN id_pedido SET DEFAULT nextval('public.pedido_id_pedido_seq'::regclass);
 ?   ALTER TABLE public.pedido ALTER COLUMN id_pedido DROP DEFAULT;
       public          postgres    false    216    217    217            ]           2604    16967    platillo id_platillo    DEFAULT     |   ALTER TABLE ONLY public.platillo ALTER COLUMN id_platillo SET DEFAULT nextval('public.platillo_id_platillo_seq'::regclass);
 C   ALTER TABLE public.platillo ALTER COLUMN id_platillo DROP DEFAULT;
       public          postgres    false    205    204    205            ^           2604    16983    producto id_producto    DEFAULT     |   ALTER TABLE ONLY public.producto ALTER COLUMN id_producto SET DEFAULT nextval('public.producto_id_producto_seq'::regclass);
 C   ALTER TABLE public.producto ALTER COLUMN id_producto DROP DEFAULT;
       public          postgres    false    206    207    207            `           2604    17017    tipo_pago id_tipo_pago    DEFAULT     �   ALTER TABLE ONLY public.tipo_pago ALTER COLUMN id_tipo_pago SET DEFAULT nextval('public.tipo_pago_id_tipo_pago_seq'::regclass);
 E   ALTER TABLE public.tipo_pago ALTER COLUMN id_tipo_pago DROP DEFAULT;
       public          postgres    false    211    210    211            [           2604    16951    tipo_producto id_tipo_producto    DEFAULT     �   ALTER TABLE ONLY public.tipo_producto ALTER COLUMN id_tipo_producto SET DEFAULT nextval('public.tipo_producto_id_tipo_producto_seq'::regclass);
 M   ALTER TABLE public.tipo_producto ALTER COLUMN id_tipo_producto DROP DEFAULT;
       public          postgres    false    200    201    201                      0    17035    cliente 
   TABLE DATA           V   COPY public.cliente (id_cliente, nombre, apellido, telefono, correo, nit) FROM stdin;
    public          postgres    false    215   {_                 0    16996    det_pro_pla 
   TABLE DATA           W   COPY public.det_pro_pla (id_detallereceta, fk_id_platillo, fk_id_producto) FROM stdin;
    public          postgres    false    209   �_                 0    17056    detalle_platillo_pedido 
   TABLE DATA           }   COPY public.detalle_platillo_pedido (id_dplatillo, cantidad, subtotal, fkid_factura, fkid_platillo, fkid_pedido) FROM stdin;
    public          postgres    false    219   S`                 0    17022    factura 
   TABLE DATA           J   COPY public.factura (id_factura, total, fecha, fkid_tipopago) FROM stdin;
    public          postgres    false    213   p`                 0    16956    menu 
   TABLE DATA           -   COPY public.menu (id_menu, menu) FROM stdin;
    public          postgres    false    203   �`                 0    17043    pedido 
   TABLE DATA           9   COPY public.pedido (id_pedido, fkid_cliente) FROM stdin;
    public          postgres    false    217   �`                 0    16964    platillo 
   TABLE DATA           ]   COPY public.platillo (id_platillo, nombre, precio, descripcion, imagen, id_menu) FROM stdin;
    public          postgres    false    205   a       	          0    16980    producto 
   TABLE DATA           a   COPY public.producto (id_producto, nproducto, precio_u, id_tipproducto, descripcion) FROM stdin;
    public          postgres    false    207   e                 0    17014 	   tipo_pago 
   TABLE DATA           <   COPY public.tipo_pago (id_tipo_pago, tipo_pago) FROM stdin;
    public          postgres    false    211   +f                 0    16948    tipo_producto 
   TABLE DATA           H   COPY public.tipo_producto (id_tipo_producto, tipo_producto) FROM stdin;
    public          postgres    false    201   Hf       &           0    0    cliente_id_cliente_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.cliente_id_cliente_seq', 1, false);
          public          postgres    false    214            '           0    0     det_pro_pla_id_detallereceta_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.det_pro_pla_id_detallereceta_seq', 47, true);
          public          postgres    false    208            (           0    0 (   detalle_platillo_pedido_id_dplatillo_seq    SEQUENCE SET     W   SELECT pg_catalog.setval('public.detalle_platillo_pedido_id_dplatillo_seq', 1, false);
          public          postgres    false    218            )           0    0    factura_id_factura_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.factura_id_factura_seq', 1, false);
          public          postgres    false    212            *           0    0    menu_id_menu_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.menu_id_menu_seq', 8, true);
          public          postgres    false    202            +           0    0    pedido_id_pedido_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.pedido_id_pedido_seq', 1, false);
          public          postgres    false    216            ,           0    0    platillo_id_platillo_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.platillo_id_platillo_seq', 35, true);
          public          postgres    false    204            -           0    0    producto_id_producto_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.producto_id_producto_seq', 12, true);
          public          postgres    false    206            .           0    0    tipo_pago_id_tipo_pago_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.tipo_pago_id_tipo_pago_seq', 1, false);
          public          postgres    false    210            /           0    0 "   tipo_producto_id_tipo_producto_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.tipo_producto_id_tipo_producto_seq', 4, true);
          public          postgres    false    200            t           2606    17040    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    215            n           2606    17001    det_pro_pla det_pro_pla_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.det_pro_pla
    ADD CONSTRAINT det_pro_pla_pkey PRIMARY KEY (id_detallereceta);
 F   ALTER TABLE ONLY public.det_pro_pla DROP CONSTRAINT det_pro_pla_pkey;
       public            postgres    false    209            x           2606    17064 4   detalle_platillo_pedido detalle_platillo_pedido_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.detalle_platillo_pedido
    ADD CONSTRAINT detalle_platillo_pedido_pkey PRIMARY KEY (id_dplatillo);
 ^   ALTER TABLE ONLY public.detalle_platillo_pedido DROP CONSTRAINT detalle_platillo_pedido_pkey;
       public            postgres    false    219            r           2606    17027    factura factura_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_pkey PRIMARY KEY (id_factura);
 >   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_pkey;
       public            postgres    false    213            h           2606    16961    menu menu_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.menu
    ADD CONSTRAINT menu_pkey PRIMARY KEY (id_menu);
 8   ALTER TABLE ONLY public.menu DROP CONSTRAINT menu_pkey;
       public            postgres    false    203            v           2606    17048    pedido pedido_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id_pedido);
 <   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_pkey;
       public            postgres    false    217            j           2606    16972    platillo platillo_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.platillo
    ADD CONSTRAINT platillo_pkey PRIMARY KEY (id_platillo);
 @   ALTER TABLE ONLY public.platillo DROP CONSTRAINT platillo_pkey;
       public            postgres    false    205            l           2606    16988    producto producto_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);
 @   ALTER TABLE ONLY public.producto DROP CONSTRAINT producto_pkey;
       public            postgres    false    207            p           2606    17019    tipo_pago tipo_pago_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.tipo_pago
    ADD CONSTRAINT tipo_pago_pkey PRIMARY KEY (id_tipo_pago);
 B   ALTER TABLE ONLY public.tipo_pago DROP CONSTRAINT tipo_pago_pkey;
       public            postgres    false    211            f           2606    16953     tipo_producto tipo_producto_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.tipo_producto
    ADD CONSTRAINT tipo_producto_pkey PRIMARY KEY (id_tipo_producto);
 J   ALTER TABLE ONLY public.tipo_producto DROP CONSTRAINT tipo_producto_pkey;
       public            postgres    false    201            ~           2606    17049    pedido fk_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT fk_cliente FOREIGN KEY (fkid_cliente) REFERENCES public.cliente(id_cliente) ON DELETE CASCADE;
 ;   ALTER TABLE ONLY public.pedido DROP CONSTRAINT fk_cliente;
       public          postgres    false    2932    217    215            y           2606    16973    platillo fk_menu    FK CONSTRAINT     �   ALTER TABLE ONLY public.platillo
    ADD CONSTRAINT fk_menu FOREIGN KEY (id_menu) REFERENCES public.menu(id_menu) ON DELETE CASCADE;
 :   ALTER TABLE ONLY public.platillo DROP CONSTRAINT fk_menu;
       public          postgres    false    203    2920    205                       2606    17065    detalle_platillo_pedido fk_menu    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_platillo_pedido
    ADD CONSTRAINT fk_menu FOREIGN KEY (fkid_factura) REFERENCES public.factura(id_factura) ON DELETE CASCADE;
 I   ALTER TABLE ONLY public.detalle_platillo_pedido DROP CONSTRAINT fk_menu;
       public          postgres    false    213    2930    219            |           2606    17007    det_pro_pla fk_tiplatillo    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_pro_pla
    ADD CONSTRAINT fk_tiplatillo FOREIGN KEY (fk_id_platillo) REFERENCES public.platillo(id_platillo) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.det_pro_pla DROP CONSTRAINT fk_tiplatillo;
       public          postgres    false    2922    209    205            }           2606    17028    factura fk_tipo_pago    FK CONSTRAINT     �   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT fk_tipo_pago FOREIGN KEY (fkid_tipopago) REFERENCES public.tipo_pago(id_tipo_pago) ON DELETE CASCADE;
 >   ALTER TABLE ONLY public.factura DROP CONSTRAINT fk_tipo_pago;
       public          postgres    false    211    2928    213            z           2606    16989    producto fk_tipproducto    FK CONSTRAINT     �   ALTER TABLE ONLY public.producto
    ADD CONSTRAINT fk_tipproducto FOREIGN KEY (id_tipproducto) REFERENCES public.tipo_producto(id_tipo_producto) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.producto DROP CONSTRAINT fk_tipproducto;
       public          postgres    false    201    2918    207            {           2606    17002    det_pro_pla fk_tiproducto    FK CONSTRAINT     �   ALTER TABLE ONLY public.det_pro_pla
    ADD CONSTRAINT fk_tiproducto FOREIGN KEY (fk_id_producto) REFERENCES public.producto(id_producto) ON DELETE CASCADE;
 C   ALTER TABLE ONLY public.det_pro_pla DROP CONSTRAINT fk_tiproducto;
       public          postgres    false    209    207    2924                  x������ � �         �   x��� ��a*B�k��?G���%�]�Ԍɬ(fGkj�bvlq�q��y�1;r��$Ur�.�\r�/I�	�CP^m�|:�9t���s���^'[�a9a�	��W��'�3j(��T�W���}l_�W���}l_����5�}=U�u���WD/yE4?f_�e�}?��@/�            x������ � �            x������ � �         _   x�3�tI-N�,���2�t��-M-���2�JMKLN����2�LI�QH�L�2���KK�+���2��/.)J-�2�tJM�LI,��t�()2b���� �)�            x������ � �         �  x��V�n�8>����޼�dٱs��f�=i�ilӠH-)�ߪ���!E�������}3��fF|�����U��Vn�"'���	�&b3г��zp�����6�!�Ѣޢ0��:G�{ߒ�����eЦ��ն[C�M��?�L��߇ڴ~�ƞDm�Oqw�#��p��	�Gr0���d����C7b���É��䵕�{sJ�l�I���+VYjB��l�?3&��y��%r^�=)���E �����zE��ۛ��m�e�:���l�z�s(B�>&V� Eu-�'<jT�΅���}�z`E�?�
u/U����jOD�:v$��������%��g7\#{�<Ug�2���� ��E_���e�1���>^��(�A��w��v	�I�H��f
��i��?��6!J�!ד�v�qc��X��>�v��(V������[�.�jY�e���Z����[ԙ�"NE��$,���z��E�&�%�ܒ}��O��x�UkSգ].9)G�qc��Xw͠jb��b��y�\��@�̊��,�<�I̟��廉�1�S�Z<e!�o�Ý�`8AQؐ����D�<��t�H��M��B���S�;(��GdCG-�S�Ӳ}ߓ�ruR�<���y��v��7�]�2f�z��� 1� �I'�z>kC�'ٳt��C�JN<�f������xL�����a���п�_l�P��X;�:h�L���&'���a�x=J~�r,ꩯ��b"�Z�c�����Z���Lq�O�ё�������������8V|s03�p�������k�r��u�zJW��-�q)a%7�i�J�<���1�y�(����á�8\ovR���J��:I#���:�c��"Ț��������S���k^Iq����։�䢆u,L�o�����L��>)0>�����m�%OYN\�����sK���s�_��}�>A�g�*:.gY9�Vj)�|N�S��9�g_eY�/����      	   �   x���MN�0��3��P�-?K��]]��Q0r=�W�X���a�&˨K3���ӳ�G�,�`��*�p�֐�ƭb�h���I[GJT�}�X�S⣀.�>ˠg�s����!�/q�xI�?�iH�N7��i�[��=��㘪�g�6������s9��d�9�K�S�r|{&�D�U����5�&�2�}�ʡ��:^f�p���o�)��G�)�4��F�f9�ְ�๴��qjpYS�H��8�c��"����֣#            x������ � �         7   x�3�tJM�LI�2���K/JM�L�+I�2�KMO-I�I-�2�tN,�2b���� u�`     