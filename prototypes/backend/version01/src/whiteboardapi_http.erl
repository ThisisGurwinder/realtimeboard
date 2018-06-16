-module(whiteboardapi_http).
-behaviour(gen_server).

-export([start_link/0]).
-export([init/1,
			handle_call/3,
			handle_info/2,
			handle_cast/2,
			terminate/2,
			code_change/3
			]).
-export([start_http/1]).

start_link() ->
	Opts = [],
	gen_server:start_link(?MODULE, [], Opts).

init([]) ->
	Dispatch = cowboy_router:compile([
			{'_', [
				% {"/api/sync", api_sync_handler, []}
			]}
		]),
	start_http(Dispatch),
	{ok, dispatched}.


handle_call(alloc, _From, State) ->
	{reply, normal, ok, State}.

handle_cast(_Message, State) ->
	{noreply, State}.

handle_info(shutdown, State) ->
	{noreply, State}.

terminate(_Reason, _State) ->
	ok.

code_change(_OldVsn, State, _Extra) ->
	{ok, State}.

start_http(Dispatch) ->
	Port = case application:get_env(whiteboardapi, port) of
								undefined -> 8080;
								{ok, ConfPort} -> ConfPort
			end,
	case application:get_env(whiteboardapi, ssl) of
		undefined ->
			{ok, _} = cowboy:start_http(http, 100, [
					{port, Port}
				],
				[{env, [{dispatch, Dispatch}
						]},
				{middlewares, [
					cowboy_router,
					cowboy_handler
				]}
			]),
			ok;
	 	{ok, SSLConf} -> configure_ssl_port
end.